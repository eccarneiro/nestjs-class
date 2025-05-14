import { Column, Entity, ManyToMany, Not, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./movie.entity";

@Entity('tags')
export class Tag{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Movie, (Movie) => Movie.tags)
    movies: Movie[];
}