namespace Subjects {
    export interface Teacher {
        experienceTeachingReact?: number;
    }
    export class React extends subject {
        getRequirements(): string {
            return 'Here ist the list of requirements for React';
        }
    getAvailableTeacher(): string {
        if(this.teacher.experienceTeachingReact > 0) {
            return 'Available Teacher: ${this.teacher.firstName}';
        }
        else {
            return 'No available teacher';
        }
    }
}
}