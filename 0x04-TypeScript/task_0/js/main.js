var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "USA"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 21,
    location: "UK"
};
var studentsList = [student1, student2];
// Get a reference to the container element where you want to render the table
var tableContainer = document.getElementById("table-container"); // Replace with your container element's ID
// Create the table element
var table = document.createElement("table");
// Create the table header row
var headerRow = document.createElement("tr");
var headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
var headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);
// Loop through each student in the list
studentsList.forEach(function (student) {
    // Create a new row for each student
    var row = document.createElement("tr");
    // Create cells for first name and location
    var cellFirstName = document.createElement("td");
    cellFirstName.textContent = student.firstName;
    var cellLocation = document.createElement("td");
    cellLocation.textContent = student.location;
    // Append cells to the row
    row.appendChild(cellFirstName);
    row.appendChild(cellLocation);
    // Append the row to the table
    table.appendChild(row);
});
// Append the table to the container element
tableContainer.appendChild(table);
