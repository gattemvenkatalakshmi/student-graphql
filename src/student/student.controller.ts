import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentEntity } from './entity/student.entity';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  async find(@Body() student: any): Promise<StudentEntity[]> {
    return this.studentService.find(student)
  }
}