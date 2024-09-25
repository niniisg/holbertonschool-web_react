;
;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "working from home";
    };
    Director.prototype.getCoffeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTask = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot Workfrom home";
    };
    Teacher.prototype.getCoffeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTask = function () {
        return "Getting to work";
    };
    return Teacher;
}());
;
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
function isDirector(employee) {
    return employee instanceof Director;
}
function executeWork(employee) {
    if (employee instanceof Director) {
        console.log(employee.workDirectorTask());
    }
    else {
        console.log(employee.workTeacherTask());
    }
}
;
function teachClass(todayClass) {
    if (todayClass === 'Math') {
        console.log('Teaching Math');
    }
    else if (todayClass === 'History') {
        console.log('Teaching History');
    }
}
teachClass('Math');
teachClass('History');
