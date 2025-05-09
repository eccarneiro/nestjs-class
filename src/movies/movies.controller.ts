import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { createMovieDTO } from './dto/create-movie.dto';
import { updateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService : MoviesService) {}

    @Get()
    findAll(){
        return this.movieService.findAll()
    }

    @Get(":id") 
    findOne(@Param('id') id : number){ 
        return this.movieService.findOne(id)
    }
        
    @Post()
    create(@Body() createMovieDTO: createMovieDTO){
        return this.movieService.create(createMovieDTO)
    }

    @Put(":id")
    update(@Param("id") id : number, @Body() updateMovieDTO:updateMovieDTO) {
       return this.movieService.update(id, updateMovieDTO)
    }

    @Delete(":id")
    remove(@Param("id") id : number) {
        return this.movieService.remove(id)
    }
}
