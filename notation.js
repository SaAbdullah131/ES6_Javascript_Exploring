const student = {
    name:'Kolim Uddin',
    age:15,
    class:'Ten',
    marks: {
        math:78,
        physics:89,
        Chemistry: 65
    }
};
const marks = student.marks;
console.log(marks);
const mathMarks = student.marks.math;
const chemistry = student['marks']['Chemistry'];
const subject = 'math';
const subjectMarks= student.marks[subject];
console.log(subjectMarks);
console.log(chemistry);
console.log(mathMarks);