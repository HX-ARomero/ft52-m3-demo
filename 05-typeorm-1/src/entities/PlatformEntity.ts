import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Videogame } from "./VideogameEntity";

@Entity({
  name: "PLATFORMS"
})
export class Platform {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column({ unique: true })
	name!: string;

  //* PLATFORMS 1:N VIDEOGAMES
  @OneToMany(type => Videogame, videogame => videogame.platform)
  videogames!: Videogame[];
}