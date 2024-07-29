import { AppDataSource } from "../config/data-source";
import { Platform } from "../entities/PlatformEntity";
import { Request, Response } from "express";

export const addPlatform = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    //* Construir instancia de "Platform":
    const platform = new Platform();
    platform.name = name;
    //* Grabar en BBDD:
    const savedPlatform = await AppDataSource.manager.save(platform);
    res.status(201).send(savedPlatform);
  } catch (error) {
    res.status(500).json({
      error: "Error al guardar plataforma",
    });
  }
};

export const getPlatforms = async (req: Request, res: Response) => {
  try {
    const platforms = await AppDataSource.manager.find(Platform);
    res.status(200).send(platforms);
  } catch (error) {
    res.status(500).send({ error: "Error al obtener videogames" });
  }
};

export const updatePlatform = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Buscar la plataforma existente por su id
    const platform = await AppDataSource.manager.findOne(Platform, {
      where: { id: parseInt(id) },
    });

    if (!platform) {
      return res.status(404).send({ error: "Plataforma no encontrada" });
    }

    // Actualizar los campos solo si se proporcionan
    if (name !== undefined) platform.name = name;

    // Guardar los cambios
    const updatedPlatform = await AppDataSource.manager.save(platform);

    // Devolver la plataforma actualizada
    res.status(200).send(updatedPlatform);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al actualizar plataforma",
    });
  }
};

//* deletePlatform: No podemos eliminar plataformas!!!
//* Tienen relación con la Tabla "VIDEOGAMES"!!!
//* Para hacerlo utilizaríamos el "BORRADO LÓGICO"
