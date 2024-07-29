import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "GENRES"
})
export class Genre {
  @PrimaryGeneratedColumn()
	id!: number;

  @Column({ unique: true })
	name!: string;

  //* GENRES N:N VIDEOGAMES
  //* Declaro relación en tabla principal: "VIDEOGAMES"
}