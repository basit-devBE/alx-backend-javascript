interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee:boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}


interface Directors extends Teacher{
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
  }

  interface StudentConstructorArgs {
    firstName: string;
    lastName: string;
  }
  
  interface StudentMethods {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentMethods {
    private firstName: string;
    private lastName: string;
  
    constructor(args: StudentConstructorArgs) {
      this.firstName = args.firstName;
      this.lastName = args.lastName;
    }
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  