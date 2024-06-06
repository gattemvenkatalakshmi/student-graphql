import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString, IsInt } from 'class-validator';

@InputType()
export class StudentFieldsInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsInt()
  roll_number?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  class?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  section?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  address?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  phone_number?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  subjects?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  aadhaar_number?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  date_of_birth?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  gender?: string;
}