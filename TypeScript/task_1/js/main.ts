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
  console.log(director1);