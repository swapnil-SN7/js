

if(true){
    let a =10
const b=20
var c =90
}

//console.log(a)->> a defined nahi hai
//console.log(b)->> available hi nahi hai

//console.log(c)->> print karega 90 (ye hui na problem ki batt)->> therefore it should be avoided
//let and const are block scope but var is function scoped

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++PART 2+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username= "swapnil"
    function two(){
        const website ="youtube ";
        console.log(`${username} uses ${website}`);
    }
    console.log(`${website}`) //ye accessable nahi hai one() ke liye

    two()
}

one()

if(true){
    const username="swap"
    if(username=="swap"){
        const website =" youtube"
        console.log(username+website)
    }
    //console.log(website)//nahi access hoga
}
//console.log(username) -> undefined
//++++++++++++++++ Interesting +++++++++++++++++++++++++++++
addone(5) //koi error nahi dega baki programming lang ke tarah
function addone(num){
        return num+1;

}


       addTwo(5)// ye error dega kyuki aap isko ek const ke under store kar raha hai
const addTwo = function (num){
    return num+2;
}
