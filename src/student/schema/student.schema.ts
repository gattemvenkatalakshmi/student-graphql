import { ObjectType ,Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Student{
  @Field()
  name: string;
  
  @Field((type)=>Int)
  roll_number: number;
  
  @Field()
  class: string;
  
  @Field()
  section: string;
  
  @Field()
  address: string;

  @Field()
  phone_number: string;

  @Field()
  subjects: string;

  @Field()
  aadhaar_number: string;

  @Field()
  date_of_birth: string;

  @Field()
  gender: string;
}