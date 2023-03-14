let mainSection = document.getElementById("main-section")
const commentList = document.getElementsByClassName(".comment-list")
let showCommentBtn = document.getElementById("show-comments-btn")
const commentSection = document.querySelector(".comment-section")
let popupLayer = document.querySelector(".popup")

popupLayer.addEventListener("click", () => {
  popup.style.display = "none"
})

commentSection.style.display = "none"

const fetchPosts = async () => {
 const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9EEXdDYb5o1ICB2tG4xC/comments?item_id=post')
 let posts = await res.json()
 let i = 1
 posts.forEach((response) => {
    mainSection.innerHTML += `
      <div class="post" id="post-${i}" >
        <div class="poster">
          <img class="pfp" src="/assets/profile-pic.jpg">
          <p id="poster-name"> ${response.username} </p>
        </div>
        <div class="post-content">
          <p id="post-text"> ${response.comment} </p>
        </div>
        <p class="inst-text"> Double click to view </p>
      </div>
    `
    i++;
  })
  let commentList = document.querySelector(".comment-list")
  const postList = document.querySelectorAll(".post")  
postList.forEach(post => { 
  post.addEventListener("click",() => 
  { console.log(post.id)
    showComments(post.id)
    const commentBtn = document.getElementById("comment-btn")
    if (!commentBtn) {
      commentList.innerHTML += 
      `<button id="comment-btn" onclick="postComment('${post.id}')"> Submit </button>`
    } 
   } )
});


}
fetchPosts()


//RIVU2qEhd4jNRLQpQfR8 ( for posts) //
const popup = document.getElementById("popup")
function displayPopup() {
  let postInput = document.getElementById("post-input")
  let posterInput = document.getElementById("poster-input")
  popup.style.display = "block"
  posterInput.value = ""
  postInput.value = ""

}



// POST FUNCTION //


function post() { 
  let postInput = document.getElementById("post-input")
  let posterInput = document.getElementById("poster-input")
  let mainSection = document.getElementById("main-section")

  const header = {
    accept: "application.json",
    "content-type": "application/json",
  };
  const data = {
    item_id: "post",
    username: posterInput.value,
    comment: postInput.value,
  };
  const options = {
    method: "POST",
    headers: header,
    body: JSON.stringify(data),
  };


  fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9EEXdDYb5o1ICB2tG4xC/comments/",
      options
  ).then((response) => console.log(response))


  mainSection.innerHTML += `<div class="post" id="'post'" onclick="showComments()"->
  <div class="poster">
    <img class="pfp" src="/assets/pfp.jpg">
    <p id="poster-name"> ${posterInput.value} </p>
  </div>
  <div class="post-content">
    <p id="post-text"> ${postInput.value} </p>
  </div>
</div>` 
  posterInput.value = ""
  postInput.value = ""
  popup.style.display = "none"

}



function showComments(postId) {
  const commentText = document.getElementById("comment-text")
  const commentorName = document.getElementById("commentor-name")
  commentSection.style.display = "block"
  
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9EEXdDYb5o1ICB2tG4xC/comments?item_id=${postId}`)
  .then(response => response.json())
  .then(response=> {
    commentText.innerHTML = ""
    commentorName.innerHTML = ""
    response.forEach((username)=> {  
      console.log(commentText)
        commentText.innerHTML += `<li> ${username.comment}</li>`
        commentorName.innerHTML += `<li> ${username.username} </li>`
    })
  })
  .catch(error => {
    commentText.textContent += "No comments"
    commentorName.textContent += "There are"
  })
}


//comment function //


function postComment(postId) {
  let usernameInput = document.getElementById("username-input")
  let commentInput = document.getElementById("comment-input")
  const commentorName = document.getElementById("commentor-name")
  const commentText = document.getElementById("comment-text")

  const header = {
    accept: "application.json",
    "content-type": "application/json",
  };
  const data = {
    item_id: postId,
    username: usernameInput.value,
    comment: commentInput.value,
  };
  const options = {
      method: "POST",
      headers: header,
      body: JSON.stringify(data),
  }; 
fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9EEXdDYb5o1ICB2tG4xC/comments?item_id=comment",
      options
  ) .then((response) =>  {
    commentText.innerHTML +=`<li>
    ${commentInput.value} </li> ` 
      commentorName.innerHTML += `<li>
      ${usernameInput.value} </li>`
      // if ( usernameInput.value =="") {
      //   commentorName.innerHTML += ` <li> Anonymous </li>`
      // } else {
      //   usernameInput.value  = usernameInput.value
      //   commentInput.value = commentInput.value
      // }
      commentInput.value = ""
      usernameInput.value = ""
    })

}



// console.log(showCommentBtn)
// showCommentBtn.addEventListener("click", () =>  {






// SHOW COMMENTS //

// function showComments() {

