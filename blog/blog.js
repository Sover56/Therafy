let mainSection = document.getElementById("main-section")

const fetchComments = async () => {
 const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RIVU2qEhd4jNRLQpQfR8/comments?item_id=post')
 let comments = await res.json()
 console.log(comments)
 let i = 1
 comments.forEach((response) => {
    mainSection.innerHTML += `
      <div class="post" id="post-${i}">
        <div class="poster">
          <img class="pfp" src="assets/pfp.jpg">
          <p id="poster-name"> ${response.username} </p>
        </div>
        <div class="post-content">
          <p id="post-text"> ${response.comment} </p>
        </div>
      </div>
    ` 
    i++;
  })
}

fetchComments()

    
   // )})
    


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
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RIVU2qEhd4jNRLQpQfR8/comments/",
      options
  ).then((response) => console.log(response))
  
  mainSection.innerHTML += `<div class="post">
  <div class="poster">
    <img class="pfp" src="assets/pfp.jpg">
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