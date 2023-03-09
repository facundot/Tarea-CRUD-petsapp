import { Global, Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/cats/entities/cat.entity';
import { Dog } from 'src/dogs/entities/dog.entity';
import { Posteo } from 'src/posteos/entity/posteo.entity';
import { User } from 'src/users/entities/user.entity';


@Global()
@Module({  imports: [TypeOrmModule.forRootAsync({
        useFactory: () => ({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'mascotapp',
            entities: [Cat, Dog, User, Posteo],
            synchronize: true,
            keepConnectionAlive: true,
            retryAttempts: 2,
            retryDelay: 1000,
         }),
    }),
 ],
})

export class DatabaseModule {}