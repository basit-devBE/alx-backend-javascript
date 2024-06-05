interface Student{
   firstName:string;
    lastName:string;
    age:number;
    location:string;
}

const student1:Student={
    firstName:"John",
    lastName:"Doe",
    age:20,
    location:"USA"
} 

const student2:Student={
    firstName:"Jane",
    lastName:"Doe",
    age:21,
    location:"UK"
}

const studentsList:Student[] = [student1,student2];

// Get a reference to the container element where you want to render the table
const tableContainer = document.getElementById("table-container"); // Replace with your container element's ID

// Create the table element
const table = document.createElement("table");

// Create the table header row
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
headerFirstName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Loop through each student in the list
studentsList.forEach((student) => {
  // Create a new row for each student
  const row = document.createElement("tr");

  // Create cells for first name and location
  const cellFirstName = document.createElement("td");
  cellFirstName.textContent = student.firstName;
  const cellLocation = document.createElement("td");
  cellLocation.textContent = student.location;

  // Append cells to the row
  row.appendChild(cellFirstName);
  row.appendChild(cellLocation);

  // Append the row to the table
  table.appendChild(row);
});

// Append the table to the container element
tableContainer.appendChild(table);
