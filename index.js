const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];
let mainEl= document.getElementById("main-el")
let i = Number(Math.floor((Math.random())*3))
console.log(i)

posts.forEach((post) =>{
    const html = `
    <div class="post-header">
                <img src=${posts[i].avatar} alt="" class="pfp">
                <div>
                 <h1>
                    ${posts[i].name}
                </h1>
                <h2>
                    ${posts[i].location}
                </h2>   
                </div>
            </div>
            <img src=${posts[i].post} alt="" class="post-img">
            <div class="icons">
                 <img src="images/icon-heart.png" alt="like logo" class="icon">
                 <img src="images/icon-comment.png" alt=" comment logo" class="icon">
                 <img src="images/icon-dm.png" alt="share logo" class="icon">
            </div>
            <p id="likes">${posts[i].likes} likes</p>
            <p id="comment"><span class="cmt-usrname">${posts[i].username}</span> ${posts[i].comment}</p>

    
    `
    mainEl.innerHTML = html
});
