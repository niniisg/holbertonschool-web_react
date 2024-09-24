var student1 = {
    firstName: "kisuke",
    lastName: "urahara",
    age: 30,
    location: "Duloc"
};
var student2 = {
    firstName: "yoruichi",
    lastName: "shihoin",
    age: 28,
    location: "Duloc"
};
var studentList = [student1, student2];
var table = document.createElement('table');
studentList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
});
document.body.appendChild(table);
