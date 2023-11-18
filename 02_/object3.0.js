const course ={
    coursename: "javascript in hindi",
    price: 999,
    courseInstructor : "Hitesh"
}


//destucturing the objects 
//course.courseInstructure
const {courseInstructor}= course;
console.log(courseInstructor);

//there is another path for the same,with custumize name
const {courseInstructor:instructor}= course;
console.log(Instructor);

//in react while passing the props same destructuring concept is used
// apna kam kisi aur par dalna hi -> API

//json -> object structure
// {
//     "name":"swapnil",
//     "coursename": "javascript mastery",
//     "price":1000,
// }