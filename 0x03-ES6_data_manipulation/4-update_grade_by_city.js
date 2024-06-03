const updateStudentGradeByCity = (students, city, newGrades) => {
    const defaultGrade = { grade: 'N/A' };

    if (Array.isArray(students)) {
        return students
            .filter((student) => student.location === city)
            .map((student) => ({
                id: student.id,
                firstName: student.firstName,
                location: student.location,
                grade: (newGrades.find((grade) => grade.studentId === student.id) || defaultGrade).grade
            }));
    }

    return [];
};

export default updateStudentGradeByCity;
