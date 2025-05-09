import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';

@Module({
  imports: [MoviesModule], //importa os modulos
  controllers: [AppController ], //Declara os controladores disponíveis
  providers: [AppService], //Declara os serviços, injeção de dependência.
})
export class AppModule {}
