import { HttpException, Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {

    private movies: Movie[] = [
        {
            id: 1,
            name: "Titanic",
            nota: 5,
            description: "Filme legal, emocionante e triste",
            tags : ["Classico", "Antigo", "Brad pit"]
        }
    ]

    findAll(){
        return this.movies
    }

    findOne(id: number){
        
        const movie = this.movies.find( movie => movie.id === id)
        if (!movie){
            throw new HttpException(`Movie ${id} not found`, 404)
        }
        return movie
    }

    create(createMovieDTO: any){
        this.movies.push(createMovieDTO)
        return createMovieDTO
    }

    update(id: number, updateMovieDTO: any){
        const existingMovie = this.findOne(id )
        if (existingMovie as any){
           const index = this.movies.findIndex(movie => movie.id === id)
           this.movies[index] = {
            id,
            ...updateMovieDTO,
           } 
        } 
    }

    remove(id: number) {
        const index = this.movies.findIndex(movie => movie.id === id)
        if (index >= 0){
            this.movies.splice(index, 1)
        }
    }


}
