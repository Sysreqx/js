const giveJobToStudent = (student, jobTitle) => {
  return {
      ...student,
      job: jobTitle
  };
};

const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

console.log(updatedStudent);

/*
updatedStudent = {
fullName: 'Максим',
experienceInMonths: 12 Keyword this,
stack: ['HTML', 'CSS', 'JavaScript', 'React'],
job: 'веб-разработчик',
}
 */
