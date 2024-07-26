import { AppDataSource } from "../config/data-source";
import { Character } from "../entities/CharacterEntity";
import { Request, Response } from "express";

export const addCharacter = async (request: Request, response: Response) => {
  const { name } = request.body;
  const character = new Character();
  character.name = name;

  const savedCharacter = await AppDataSource.manager.save(character);
  response.status(201).send(savedCharacter);
};

export const getCharacters = async (req: Request, res: Response) => {
  try {
    const characters = await AppDataSource.manager.find(Character);
    res.status(200).send(characters);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener videogames" });
  }
};

export const updateCharacter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Buscar el personaje existente por su id:
    const character = await AppDataSource.manager.findOne(Character, {
      where: { id: parseInt(id) },
    });

    if (!character) {
      return res.status(404).send({
        error: "Personaje no encontrado",
      });
    }

    // Actualizar los campos solo si se proporcionan:
    if (name !== undefined) character.name = name;

    // Guardar los cambios en Base de Datos:
    const updatedCharacter = await AppDataSource.manager.save(character);

    // Devolver el género actualizado:
    res.status(200).send(updatedCharacter);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al actualizar personaje",
    });
  }
};

//* deleteCharacter: No podemos eliminar personajes!!!
//* Tienen relación con la Tabla "VIDEOGAMES"!!!
//* Para hacerlo utilizaríamos el "BORRADO LÓGICO"
