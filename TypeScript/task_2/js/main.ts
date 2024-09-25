interface DirectorInterface {
    workFromHome():string,
    getCoffeBreak():string,
    workDirectorTask():string,
};

interface TeacherInterface {
    workFromHome():string,
    getCoffeBreak():string,
    workTeacherTask():string,
};
class Director implements DirectorInterface {
    workFromHome(): string {
        return "working from home";
    }
    getCoffeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTask(): string {
        return "Getting to director tasks";
    }
};

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot Workfrom home";
    }
    getCoffeBreak(): string {
        return "Cannot have a break";
    }
    workTeacherTask(): string{
        return "Getting to work";
    }
};
function createEmployee(salary: number | string) {
    if (typeof salary === 'number' && salary < 500){
        return Teacher;
        
    }
    else {
        return Director;
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));