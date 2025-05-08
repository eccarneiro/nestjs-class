import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [], //importa os modulos
  controllers: [AppController], //Declara os controladores disponíveis
  providers: [AppService], //Declara os serviços, injeção de dependência.
})
export class AppModule {}
