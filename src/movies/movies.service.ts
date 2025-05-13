import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createMovieDTO } from './dto/create-movie.dto';
import { updateMovieDTO } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async findAll() {
    return this.movieRepository.find();
  }

  async findOne(id: number) {
    const movie = await this.movieRepository.findOne({ 
      where : {id},
     });
    if (!movie) {
      throw new Error(`Movie ${id} not found`);
    }
    return movie;
  }

  async create(createMovieDTO: createMovieDTO) {
    const movie = this.movieRepository.create(createMovieDTO);
    return this.movieRepository.save(movie);
  }

  async update(id: number, updateMovieDTO: updateMovieDTO) {
    const movie = await this.movieRepository.preload({
      ...updateMovieDTO,
      id,
    })
    if(!movie){
      throw new Error(`Movie ${id} not found`);
    }
    return this.movieRepository.save(movie);
  }

  async remove(id: number) {
    const movie = await this.movieRepository.findOne({
      where: {id},
    })
    if (!movie) {
      throw new Error(`Movie ${id} not found`);
    }
   return this.movieRepository.remove(movie);
  }
}
