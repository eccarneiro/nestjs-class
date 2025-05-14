import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tags.entity";


@Entity('movies')
export class Movie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    nota: number;

    @Column()
    description: string;

    @JoinTable()
    @ManyToMany(() => Tag, (tag) => tag.movies,{
        cascade: true,
    })                                                                                                                                 
    tags: Tag[];                                                  
}