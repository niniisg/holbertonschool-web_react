interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "kisuke",
    lastName: "urahara",
    age: 30,
    location: "Duloc"
};
let student2: Student = {
    firstName: "yoruichi",
    lastName: "shihoin",
    age: 28,
    location: "Duloc"
};

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');
studentList.forEach((student) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
document.body.appendChild(table);