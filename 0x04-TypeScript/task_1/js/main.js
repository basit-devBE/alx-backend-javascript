function printTeacher(firstName, lastName) {
    return { firstName: firstName, lastName: lastName };
}
var teacher = printTeacher("John", "Doe");
console.log(teacher); // Output: { firstName: "John", lastName: "Doe" }
