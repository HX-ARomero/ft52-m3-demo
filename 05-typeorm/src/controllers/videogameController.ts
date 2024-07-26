import { AppDataSource } from "../config/data-source";
import { Character } from "../entities/CharacterEntity";
import { Genre } from "../entities/GenreEntity";
import { In } from "typeorm";
import { Platform } from "../entities/PlatformEntity";
import { Request, Response } from "express";
import { Videogame } from "../entities/VideogameEntity";

export const addVideogame = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      releaseDate,
      rating,
      price,
      platform_id,
      genres,
      character_id,
    } = req.body;

    const videogame = new Videogame();

    // Verificar que la plataforma exista y asociar:
    if (platform_id !== undefined) {
      const platform = await AppDataSource.manager.findOne(Platform, {
        where: { id: platform_id },
      });
      if (!platform) {
        return res.status(400).send({
          error: "Plataforma no encontrada",
        });
      }
      videogame.platform = platform;
    }

    // Verificar que los géneros existan y asociar:
    let genresArray = [];
    if (genres !== undefined) {
      genresArray = await AppDataSource.manager.findBy(Genre, {
        id: In(genres),
      });
      if (genresArray.length !== genres.length) {
        return res
          .status(400)
          .send({ error: "Uno o más géneros no encontrados" });
      }
      videogame.genres = genresArray;
    }

    // Verificar que el personaje exista y asociar:
    if (character_id !== undefined) {
      const character = await AppDataSource.manager.findOne(Character, {
        where: { id: character_id },
      });
      if (!character) {
        return res.status(400).send({
          error: "Personaje no encontrado",
        });
      }
      videogame.character = character;
    }

    // Asociamos el resto de los atributos:
    videogame.title = title;
    videogame.description = description;
    videogame.releaseDate = releaseDate;
    videogame.rating = rating;
    videogame.price = price;

    // Grabamos en Base de Datos:
    const savedVideogame = await AppDataSource.manager.save(videogame);

    res.status(201).send(savedVideogame);
  } catch (error) {
    res.status(500).send({ error: "Error al guardar videojuego" });
  }
};

export const getVideogames = async (req: Request, res: Response) => {
  try {
    const videogames = await AppDataSource.manager.find(Videogame, {
      relations: ["platform", "genres", "character"],
    });
    res.status(200).send(videogames);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener videogames" });
  }
};

export const updateVideogame = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      releaseDate,
      rating,
      price,
      platform_id,
      genres,
      character_id,
    } = req.body;

    // Buscar el videojuego existente por su id:
    const videogame = await AppDataSource.manager.findOne(Videogame, {
      where: { id: parseInt(id) },
    });

    if (!videogame) {
      return res.status(404).send({ error: "Videojuego no encontrado" });
    }

    // Verificar que la plataforma exista y modificar:
    if (platform_id !== undefined) {
      const platform = await AppDataSource.manager.findOne(Platform, {
        where: { id: platform_id },
      });
      if (!platform) {
        return res.status(400).send({ error: "Plataforma no encontrada" });
      }
      videogame.platform = platform;
    }

    // Verificar que los géneros existan y modificar:
    let genresArray = [];
    if (genres !== undefined) {
      genresArray = await AppDataSource.manager.findBy(Genre, {
        id: In(genres),
      });
      if (genresArray.length !== genres.length) {
        return res
          .status(400)
          .send({ error: "Uno o más géneros no encontrados" });
      }
      videogame.genres = genresArray;
    }

    // Verificar que el personaje exista y modificar:
    if (character_id !== undefined) {
      const character = await AppDataSource.manager.findOne(Character, {
        where: { id: character_id },
      });
      if (!character) {
        return res.status(400).send({ error: "Personaje no encontrado" });
      }
      videogame.character = character;
    }

    // Actualizar los campos solo si se proporcionan:
    if (title !== undefined) videogame.title = title;
    if (description !== undefined) videogame.description = description;
    if (releaseDate !== undefined) videogame.releaseDate = releaseDate;
    if (rating !== undefined) videogame.rating = rating;
    if (price !== undefined) videogame.price = price;

    // Guardar los cambios:
    const updatedVideogame = await AppDataSource.manager.save(videogame);

    // Devolver el recurso actualizado:
    res.status(200).send(updatedVideogame);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error al actualizar videojuego" });
  }
};

export const deleteVideogame = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Buscar el videojuego existente por su id:
    const videogame = await AppDataSource.manager.findOne(Videogame, {
      where: { id: parseInt(id) },
    });

    if (!videogame) {
      return res.status(404).send({ error: "Videojuego no encontrado" });
    }

    // Eliminar el videojuego de la Base de Datos:
    await AppDataSource.manager.remove(videogame);

    // Enviar respuesta de éxito:
    res.status(200).send({ message: "Videojuego eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error al eliminar videojuego" });
  }
};
