import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeamsModule } from './teams/teams.module';
import { GamesModule } from './games/games.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',              // ou IP do servidor MySQL
      port: 3306,
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_do_banco',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,             // use só em desenvolvimento!
    }),
    TeamsModule,
    GamesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
