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
        return new Teacher();
        
    }
    else {
        return new Director();
    }
}

function isDirector(employee: Teacher | Director):boolean {
    return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): void {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTask())
    }
    else {
        console.log(employee.workTeacherTask())

    }
};

type subjects = 'Math' | 'History'

function teachClass(todayClass: subjects): void {
    if(todayClass === 'Math') {
        console.log('Teaching Math');
    } else if(todayClass === 'History') {
        console.log('Teaching History');
    }
}
teachClass('Math');
teachClass('History');
