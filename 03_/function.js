
function sayMyname(){
    console.log("S");
    console.log("A");
    
}

//sayMyname ->> ye hai function ka referance
//sayMyname()->> ye hai funciton execution 

// function addTwoNumbers(number1,number2){
//    console.log(number1+number2) ;
// }
function addTwoNumbers(number1,number2){
    let result = number1+number2;
    return result;
    console.log("your name");// this code is unreachable as after the return we cannot 
 }
 let reusult =addTwoNumbers(3,4);//function defination ke andar jo hote hai vo hai parameter and calling ke vakt jo hote hai vo hai arguments


 function loginUsermessage(username){
    if(username === undefined){
        return `please Enter the username`
    }
    return `${username} just log in`
 }
  console.log(loginUsermessage("swapnil"))
 // console.log(loginUsermessage(""))->> jab koi values hi nahi pass karoge to ayega undefined
 //agar user koi input nahi de to tum default values bhi de sakte ho 
//  function loginUsermessage(username="sam"){
//     if(username === undefined){
//         return `please Enter the username`
//     }
//     return `${username} just log in`
//  }


//when number of parameter is not known -> in shopping wishlist you dont know how many item will gona to add 

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200,300,400))
//here you will get an array as an output


function calculateCartPrice(val1,val2,...num){
    return num;
}

console.log(calculateCartPrice(200,300,400,500,600));
//this console log will print the [400,500,600] bcz 200 will go in val 1 and 300 will go in val2


//function 
const user={
    username: "swapnil",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

//passing the direct object in function
handleObject({
    username:"sam",
    price: 399
})

const newArr = [200,300,400]
function returnsecondvalue(getArray){
    return getArray[1];//point to noted getarray ek random hai jisme konsa bhi array send kar sakte hai
}
console.log(returnsecondvalue());