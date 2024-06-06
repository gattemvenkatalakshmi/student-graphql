import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity('Student')
export class StudentEntity {
  @Column()
  name: string;
  
  @PrimaryGeneratedColumn({ type: 'int' })
  roll_number: number;
  
  @Column()
  class: string;
  
  @Column()
  section: string;
  
  @Column()
  address: string;

  @Column()
  phone_number: string;

  @Column()
  subjects: string;

  @Column()
  aadhaar_number: string;

  @Column()
  date_of_birth: string;

  @Column()
  gender: string;
}