// src/student/student.resolver.ts
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Student } from './schema/student.schema';

import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { StudentFieldsInput } from './dto/student-fields.input.ts';

@Resolver(() => Student)
export class StudentResolver {
  constructor(private readonly httpService: HttpService) {}

  @Mutation(() => Student)
  async getStudentsByFields(
    @Args('fields') fields: StudentFieldsInput,
  ): Promise<Student[]> {
    const fieldKeys = Object.keys(fields).filter(key => fields[key] !== undefined);

    if (fieldKeys.length !== 3) {
      throw new BadRequestException('Exactly three fields must be provided');
    }

  
    try {
      const response: AxiosResponse<Student[]> = await lastValueFrom(
        this.httpService.get('http://localhost:3000/student', {
          data: fields,
        }),
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new BadRequestException('Endpoint not found');
      } else {
        throw new InternalServerErrorException('An error occurred while fetching data');
      }
    }
  }
}
