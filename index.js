// const obj = {
//     name: "saoud",
//     lname: "khan"
// }
// //to save value in local storage
// localStorage.setItem("name", "saoud")
// localStorage.setItem("fname", 'mehmood')
// //to get valcu from local storage
// let a = localStorage.getItem("name");
// let b = localStorage.getItem("fname");
// //removing
// // localStorage.removeItem("name")
// // localStorage.removeItem("fname");


// console.log(a);
// console.log(b);
// console.log(localStorage.length)
// //sessional storage
// // 

// let arr = ['saoud', 'kinza', 'farman'];
// let [, secondname] = arr;
// console.log(secondname)

// // let newobject = 
// // {
// //     name:'saaoud',
// //     fname:'mehmood',
// //     city:'karachi',
// //     town:'orangi',
// //     hobies: {
// //                 sports:'cricket',
// //                 food:'pizza',
// //                 dish:'karahi'
// //            }
// // }

// // let {name}=newobject;
// // console.log(name)
// // let {hobies}=newobject
// // console.log(hobies)
// // let{dish}=hobies
// // console.log(dish)
// let newobj={
//     name:'saaoud',
//     fname:'mehmood',
//     city:'karachi',
//     town:'orangi',
// }
// // let spread=
// // {
// //     ...newobj,
// //     hoby:'cooking'
// // }
// // console.log(spread)
// let {name, ...restvalue}= newobj

////////////////map
const items=
[
    {name:'bike', price:'100'},
    {name:'car', price:'300'},
    {name:'plane', price:'500'},
    {name:'cake', price:'40'},
    {name:'cup', price:'130'},
    {name:'duck', price:'200'},
    {name:'hen', price:'10'},

]

// let maparrry= items.map((item,index)=>console.log(index))
const filterarry=items.filter((item)=>{return item.price <= 100}) 
 console.log(filterarry)

// let filtearray= items.filter((item)=>{return item.name==="cake"})
// console.log(filtearray)
// let findarry= items.find((item)=>{return item.price<=100})
// console.log(findarry)