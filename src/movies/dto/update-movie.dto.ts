import { PartialType } from '@nestjs/mapped-types';
import {IsNumber, IsString } from 'class-validator';
import { createMovieDTO } from './create-movie.dto';

export class updateMovieDTO extends PartialType(createMovieDTO){
    // ao inves de reutilizar o código, podemos extender a classe createMovieDTO de forma parcial, pois o update 
    // não precisa de todos os campos obrigatórios.
    // @IsString()
    // readonly name?: string;

    // @IsNumber()
    // readonly nota?: number;

    // @IsString()
    // readonly description?: string;

    // @IsString({ each: true })
    // readonly tags?: string[];
}