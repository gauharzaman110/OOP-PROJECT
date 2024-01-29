import inquirer from "inquirer";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log("Welcome Guest");
        const answer = await inquirer.prompt({
            type: "list",
            message: "Ap kis se bat krna pasand kre gy..",
            name: "Select",
            choices: ["Khud se: self", "Student sy"]
        });
        if (answer.Select == "Khud se: self") {
            console.log("Hello mn khud se bat kr rha hun");
        }
        if (answer.Select == "Student sy") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "ap ko kis sy bat kr ni hy",
                name: "student"
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${name.name}, aur mn thik hun , ap sunao`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name}, aur mn thik hun , ap sunao...`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programStart(persons);
