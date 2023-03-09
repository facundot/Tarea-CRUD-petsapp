import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  controllers: [CatsController],
  providers: [CatsService,],
  imports: [TypeOrmModule.forFeature([Cat,User])],
  exports: [CatsService,]
})
export class CatsModule {}
