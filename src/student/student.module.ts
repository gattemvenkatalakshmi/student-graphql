import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './entity/student.entity';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { StudentController } from './student.controller';
import { HttpModule, HttpService } from '@nestjs/axios';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity]),HttpModule
   

  ],
  controllers: [StudentController],
  providers: [StudentService,StudentResolver,{
    provide: APP_PIPE,
    useClass: ValidationPipe,
  },],
})
export class StudentModule {}