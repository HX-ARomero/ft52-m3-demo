import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Platform } from "./PlatformEntity";
import { Genre } from "./GenreEntity";
import { Character } from "./CharacterEntity";

@Entity({
  name: "VIDEOGAMES",
})
export class Videogame {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  title!: string;

  @Column({ type: "text" })
  description!: string;

  @Column()
  price!: number;

  @Column({ default: 5 })
  rating!: number;

  @Column()
  releaseDate!: Date;

  //* VIDEOGAMES N:1 PLATFORMS
  @ManyToOne((type) => Platform, (platform) => platform.videogames)
  @JoinColumn({ name: "platform_id" })
  platform!: Platform;

  //* VIDEOGAMES N:N GENRES
  @ManyToMany((type) => Genre)
  @JoinTable({
    name: "VIDEOGAMES_GENRES",
    joinColumns: [{ name: "videogame_id" }],
    inverseJoinColumns: [{ name: "genre_id" }],
  })
  genres!: Genre[];

  //* VIDEOGAMES 1:1 CHARACTERS
  @OneToOne((type) => Character)
  @JoinColumn({ name: "character_id" })
  character!: Character;
}
