import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { CatsModule } from './cats/cats.module';
import { UsersModule } from './users/users.module';
import { PosteosModule } from './posteos/posteos.module';
import { CommonModule } from './common/common.module';
import { DatabaseModule } from './common/database/database.module';


@Module({
  imports: [DatabaseModule,DogsModule, CatsModule, UsersModule, PosteosModule, CommonModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
