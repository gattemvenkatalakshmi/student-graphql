import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GraphQLModule} from '@nestjs/graphql';
import  {ApolloDriver} from '@nestjs/apollo' 
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app.resolver';
import { StudentModule } from './student/student.module';
import { APP_PIPE } from '@nestjs/core';
import { StudentResolver } from './student/student.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    StudentModule,
    GraphQLModule.forRoot({
    driver: ApolloDriver,
    playground:true,
    autoSchemaFile:join(process.cwd(),'src/schema.graphql'),
    definitions: {
      path: join(process.cwd(), 'src/graphql.ts'),
    },
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'student_db',
      entities: [
        
        __dirname + '/**/*.entity{.ts,.js}'
      ],
      synchronize: true,
  }),
   ],
  controllers: [],
  providers: [AppService, AppResolver,StudentResolver],
})
export class AppModule {}
