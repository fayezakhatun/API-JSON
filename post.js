 const loadPost=()=>{
    const url='https://jsonplaceholder.typicode.com/posts';
   
    fetch(url)
    .then(res=>res.json())
    .then((data) => {
//    console.log(data);
displayPosts(data);
    })
    };
//     const displayPosts=(posts)=>{
//         // for(let i = 0; i < posts.length; i++){
//         // console.log(posts[i]);
//         // }
//         // for(let post of posts){
//             // console.log(post);
//         // }
// // 1.get the container

// const postContainer= document.getElementById("post-container");
// // console.log(postContainer);

//         posts.forEach((post) => {
//             // console.log(post.title);
//             // 2.creat HTML element
//             const li = document.createElement("li");
//             li.innerText = post.title; 
//             // console.log(li);

//             //3.add li into li
//             postContainer.appendChild(li);
//         });
// };


// {
//     "userId": 4,
//     "id": 32,
//     "title": "doloremque illum aliquid sunt",
//     "body": "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
// }
const displayPosts = (posts) => {
    // 1.get the container and empty the container
    const postsContainer = document.getElementById("post-container");
    postsContainer.innerHTML = "";
    posts.forEach((post) =>{
        // console.log(post);
        // 2.create element
        const postCard = document.createElement("div");
        postCard.innerHTML= ` <div class="post-card">
        <h2>${post.title  }</h2>
        <p>${post.body}</p>
    </div>`;

    // 3.add to the container
    postsContainer.append(postCard);
    });
};

loadPost();