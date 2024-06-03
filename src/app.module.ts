import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';



@Module({
  imports: [
    ServeStaticModule.forRoot({ 
        rootPath: join(__dirname, '..', 'public')
    }),
    PokemonModule 
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
