import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { MoviesController } from './movies.controller';
import { AppService } from 'src/app.service';
import { MoviesService } from './movies.service';

@Module({
    controllers: [AppController, MoviesController], //Declara os controladores disponíveis
    providers: [AppService, MoviesService], //Declara os serviços, injeção de dependência.
    imports: [], //importa os modulos
})
export class MoviesModule {}

