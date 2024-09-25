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
        return Teacher;
    }
    else {
        return Director;
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
