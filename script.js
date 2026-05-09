const loadData = () => {

    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((resposnse) => resposnse.json())
    .then((data) => console.log(data));
};

// const loadPost=()=>{
//     const url='https://jsonplaceholder.typicode.com/posts';
   
//     fetch(url)
//     .then(res=>res.json())
//     .then(json => displayPost(json));
// };

// const displayPost=(posts)=>{
//  console.log(posts);
// };




//console.log("Explore API");

// const person = {
//     name: "selim",
//     fruit: "dalim",
//     dish: "halim",
//     friends: ["alim", "kolim", "lamim"],
//     isRich: false,
//     money: 34000,
// };
// console.log(person, typeof person);
// // JSON -> JS object with Notation
// // JSON.stringify

// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personeJSON);
