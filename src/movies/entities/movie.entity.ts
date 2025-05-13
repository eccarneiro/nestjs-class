import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column("json", { nullable: true })
    tags: string[];
}