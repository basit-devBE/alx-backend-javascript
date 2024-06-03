const getStudentIdsSum = (students) => {
  if (students instanceof Array) {
    const sum = students.reduce((acc, currentvalue) => acc + currentvalue.id, 0);
    return sum;
  }
  return 0;
};

export default getStudentIdsSum;
