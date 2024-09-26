namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

export class java extends subject {
    getRequirements(): string {
        return 'Here is the list of requirements for java';
    }
    getAvailableTeacher(): string {
        if (this.teacher.experienceTeachingJava > 0) {
            return 'Available Teacher: ${this.teacher.firtsname}';
        }
        else {
            return 'No available teacher';
        }

        }
    }
}
