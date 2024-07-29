import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({
  name: "CHARACTERS",
})
export class Character {
  @BeforeInsert()
  nameToUpperCase() {
    this.name = this.name.toUpperCase();
  }

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  //* CHARACTERS 1:1 VIDEOGAMES
  //* Declaro relación en tabla principal: "VIDEOGAMES"
}
