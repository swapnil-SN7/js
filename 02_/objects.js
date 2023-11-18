//singleton ->>constructor se banega to hamesha singleton banega agar literals se banayega to singleton nahi banega
//object.create

//objects literals
const mySym = Symbol ("key1")
const jsUser={
    name:"José",
    [mySym]:"this is swapnilwalave",
    age:30,
    profession:"developer",
    isLoggedIn: false, 
    lastLoggedIN: ["MON","Tue","wend"]


}

console.log(jsUser.age);//accesing the elements of the objects
console.log(jsUser["age"]);// another way fo accessing the the element in the objects
//string me dena important hai
console.log(jsUser[mySym])
//how to overide the values

jsUser.age = 99;
jsUser.profession="designer";
//agar mai chahata hu ki koi bhi use modify na kare 
Object.freeze(jsUser)
