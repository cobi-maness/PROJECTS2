var students = ['cobi', 'josh', 'monty', 'daddy', 'eric', 'gus', 'rosa', 'alfredo', 'leo', 'rigo', 'mikayla', 'osvaldo', 'david', 'matt', 'haley', 'melissa'];
// console.log(students.length);

function randomStudent(){
  var numStudents = students.length;
  var randStudent = Math.ceil( Math.random() * numStudents ) -1;
  alert(students[randStudent]);
}
randomStudent();
