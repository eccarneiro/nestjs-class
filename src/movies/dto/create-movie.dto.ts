import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createMovieDTO {
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    readonly nota: number;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString({ each: true })
    tags: string[];
}