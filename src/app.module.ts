import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [], //importa os modulos
  controllers: [AppController, MoviesController], //Declara os controladores disponíveis
  providers: [AppService, MoviesService], //Declara os serviços, injeção de dependência.
})
export class AppModule {}
