import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { createMovieDTO } from './dto/create-movie.dto';
import { updateMovieDTO } from './dto/update-movie.dto';
import { Tag } from './entities/tags.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  async findAll() {
    return this.movieRepository.find({
      relations: ['tags'],
    });
  }

  async findOne(id: number) {
    const movie = await this.movieRepository.findOne({ 
      where : {id},
      relations: ['tags'],
     });
    if (!movie) {
      throw new Error(`Movie ${id} not found`);
    }
    return movie;
  }

  private async preloadTagByName(name): Promise<Tag> {
    const tag = await this.tagRepository.findOne({
      where: { name},
    })
    if (tag) {
      return tag;
    }
    return this.tagRepository.create({name});
  }
  

  async create(createMovieDTO: createMovieDTO) {
    const tags = await Promise.all(
      createMovieDTO.tags.map( name => this.preloadTagByName(name)),
    )
    const movie = await this.movieRepository.create({
      ...createMovieDTO,
      tags,
    });
    console.log(movie);
    return this.movieRepository.save(movie);
  }

  async update(id: number, updateMovieDTO: updateMovieDTO) {
    const tags = 
    updateMovieDTO.tags && 
    (await Promise.all(
      updateMovieDTO.tags.map( name => this.preloadTagByName(name)),
    ))

    const movie = await this.movieRepository.preload({
      ...updateMovieDTO,
      id,
      tags,

    })

    if (!movie) {
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
