
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface StudentFieldsInput {
    name?: Nullable<string>;
    roll_number?: Nullable<number>;
    class?: Nullable<string>;
    section?: Nullable<string>;
    address?: Nullable<string>;
    phone_number?: Nullable<string>;
    subjects?: Nullable<string>;
    aadhaar_number?: Nullable<string>;
    date_of_birth?: Nullable<string>;
    gender?: Nullable<string>;
}

export interface Student {
    name: string;
    roll_number: number;
    class: string;
    section: string;
    address: string;
    phone_number: string;
    subjects: string;
    aadhaar_number: string;
    date_of_birth: string;
    gender: string;
}

export interface IQuery {
    index(): string | Promise<string>;
}

export interface IMutation {
    getStudentsByFields(fields: StudentFieldsInput): Student[] | Promise<Student[]>;
}

type Nullable<T> = T | null;
