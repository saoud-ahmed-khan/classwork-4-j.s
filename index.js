const obj={
    name:"saoud",
    lname:"khan"
}
//to save value in local storage
localStorage.setItem("name","saoud")
localStorage.setItem("fname",'mehmood')
//to get valcu from local storage
let a=localStorage.getItem("name");
let b=localStorage.getItem("fname");
//removing
// localStorage.removeItem("name")
// localStorage.removeItem("fname");


console.log(a);
console.log(b);
console.log(localStorage.length)
//sessional storage
// 

let arr=['saoud','kinza','farman'];
let [,secondname]=arr;
console.log(secondname)

let newobject={
    
}