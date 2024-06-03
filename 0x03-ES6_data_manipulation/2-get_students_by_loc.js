// Description: Write a function that returns an array of students
// who are located in a specific city.
const getStudentsByLocation = (students, city) => {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
};
export default getStudentsByLocation;
