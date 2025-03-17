function Student(firstName, lastName, age, id, avgGrade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.id = id;
    this.avgGrade = avgGrade;
}

const studentsGroup = {
    students: [],
    addStudent: function (firstName, lastName, age, id, avgGrade) {
        const newStudent = new Student(firstName, lastName, age, id, avgGrade);
        this.students.push(newStudent);
    },
    removeStudent: function (id) {
        this.students = this.students.filter((student) => student.id !== id);
    },
    listStudents: function () {
        this.students.forEach((student) => {
            console.log(
                `ID: ${student.id}, Name ${student.firstName}, Last Name: ${student.lastName}, Age: ${student.age}, Avg Grade: ${student.avgGrade},`
            );
        });
    },
    findStudent: function (id) {
        const student = this.students.find((student) => student.id === id);
        if (student) {
            console.log(`Found student: ID ${student.id}, Name ${student.firstName}, Last Name ${student.lastName}`);
        } else {
            console.log(`Student not found`);
        }
    },
    add(product, count) {
        this.cart.push({ product: product, count: count });
    },
};

studentsGroup.addStudent("Oleksii", "Balla", 25, 1, 90);
studentsGroup.addStudent("Petro", "Petrenko", 25, 2, 90);
studentsGroup.removeStudent();
studentsGroup.findStudent(2);
studentsGroup.listStudents();
