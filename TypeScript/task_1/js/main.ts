interface Teacher {
    firstName:string;
    lastName:string;
    fullTimeEmployee:boolean;
    yearsofExperience?:number;
    location:string;
    [key: string]: any;
}
 interface Directors  extends Teacher {
    numberOfReports:number;
 }


const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  interface printTeacherFunction {
    (firstName:string, lastName:string):string

  };
  

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
}
class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(){
        return `Currently working`
    }
    displayName(){
        return `${this.firstName}`
    }
}

  interface StudentClassInterface {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName():string,
  }

  interface StudentConstructer {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  const s1 = new StudentClass("Esme", "Sanchez");
 
console.log(s1.workOnHomework());
console.log(s1.displayName());
  console.log(director1);
  console.log(printTeacher(teacher3.firstName, teacher3.lastName));