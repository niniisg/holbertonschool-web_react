var Subjects;
(function (Subjects) {
    var subject = /** @class */ (function () {
        function subject() {
        }
        subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return subject;
    }());
    Subjects.subject = subject;
})(Subjects || (Subjects = {}));
