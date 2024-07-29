import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Videogame } from "../entities/VideogameEntity";
import { Platform } from "../entities/PlatformEntity";
import { Genre } from "../entities/GenreEntity";
import { Character } from "../entities/CharacterEntity";
import { PlatformSubscriber } from "../subscibers";
dotenv.config();

export const AppDataSource = new DataSource({
  //* Credenciales:
  type: "postgres",
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //* Configuración extra:
  synchronize: true,
  dropSchema: true,
  logging: true,
  entities: [Videogame, Platform, Genre, Character],
  subscribers: [PlatformSubscriber],
  migrations: [],
})