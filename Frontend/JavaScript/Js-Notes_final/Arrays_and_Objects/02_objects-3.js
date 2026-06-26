//1-- Destructering objects -- for improving readability

//Instead of writing course.courseInstructor again and again we can use destructering

const course = {
    courseName: 'ML',
    coursePrice: 1000,
    courseInstructor: 'Aryan'
}

//////1--
// const {courseInstructor} = course
// console.log(courseInstructor) o/p = Aryan

//////2--
// if we want to give a new name after destructering

const {courseInstructor: instructor} = course
console.log(instructor)