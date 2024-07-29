import { AppDataSource } from "../config/data-source";
import { Character } from "../entities/CharacterEntity";
import { Genre } from "../entities/GenreEntity";
import { Platform } from "../entities/PlatformEntity";
import { Videogame } from "../entities/VideogameEntity";

export const genreRepository = AppDataSource.getRepository(Genre);
export const characterRepository = AppDataSource.getRepository(Character);
export const videogameRepository = AppDataSource.getRepository(Videogame);

export const platformRepository = AppDataSource.getRepository(Platform)
  .extend({
    findPlatformByName(name: string) {
      return this
        .createQueryBuilder("platform")
        .where ("platform.name = :name", { name })
        .getOne();
    }
  });