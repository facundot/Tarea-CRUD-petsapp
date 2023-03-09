import { Module } from '@nestjs/common';
import { PosteosController } from './posteos.controller';
import { PosteosService } from './posteos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posteo } from './entity/posteo.entity';

@Module({
  controllers: [PosteosController],
  providers: [PosteosService],
  imports: [TypeOrmModule.forFeature([Posteo])]
})
export class PosteosModule {}
