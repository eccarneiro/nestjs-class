import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService : MoviesService) {}

    @Get()
    findAll(){
        return this.movieService.findAll()
    }

    @Get(":id") 
    findOne(@Param('id') id : number){ 
        return this.movieService.findOne(+id)
    }
        
    @Post()
    create(@Body() body){
        return this.movieService.create(body)
    }

    @Put(":id/:name")
    update(@Param("id") id : number, @Body() body) {
       return this.movieService.update(+id, body)
    }

    @Delete(":id")
    remove(@Param("id") id : number) {
        return this.movieService.remove(+id)
    }
}
