import { AppDataSource } from "../config/data-source";
import { Genre } from "../entities/GenreEntity";
import { Request, Response } from "express";
import { genreRepository } from "../repositories/indexRepository";

export const addGenre = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    //* Construir objeto:
    const genre = new Genre();
    genre.name = name;
    //* Grbar en BBDD:
    const savedPlatform = await genreRepository.save(genre);
    res.status(201).send(savedPlatform);
  } catch (error) {
    res.status(500).json({ error: "Error al guardar género" });
  }
};

export const getGenres = async (req: Request, res: Response) => {
  try {
    const platforms = await genreRepository.find();
    res.status(200).send(platforms);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener videogames" });
  }
};

export const updateGenre = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Buscar el género existente por su id:
    const genre = await AppDataSource.manager.findOne(Genre, {
      where: { id: parseInt(id) },
    });

    if (!genre) {
      return res.status(404).send({ error: "Plataforma no encontrada" });
    }

    // Actualizar los campos solo si se proporcionan:
    if (name !== undefined) genre.name = name;

    // Guardar los cambios en Base de Datos:
    const updatedGenre = await AppDataSource.manager.save(genre);

    // Devolver el género actualizado:
    res.status(200).send(updatedGenre);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al actualizar género",
    });
  }
};

//* deleteGenre: No podemos eliminar géneros!!!
//* Tienen relación con la Tabla "VIDEOGAMES"!!!
//* Para hacerlo utilizaríamos el "BORRADO LÓGICO"
