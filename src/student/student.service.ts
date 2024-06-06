import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { setDefaultAutoSelectFamily } from 'net';
import { StudentEntity } from './entity/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}
  
  async find(student: Partial<StudentEntity>): Promise<StudentEntity[]> {

    // return this.studentRepository.find({ where: student });   
    return this.studentRepository.find({ where: student });
  }
}