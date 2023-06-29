"use strict";
const postsList = document.querySelector("#postsList");
const moreButton = document.querySelector("#more-button");
const loginData = getLoginData();
let page = 1;
let limit = 5;

function fetchPosts(page, limit) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${loginData.token}`,
    },
  };

  fetch(
    `${apiBaseURL}/api/posts?limit=${limit}&offset=${(page - 1) * limit}`,
    options
  )
    .then((response) => response.json())
    .then((list) => {
      // postsList.innerHTML = ""; // Clear existing posts
      console.log(list);
      for (const userPost of list) {
        let postItemContainer = document.createElement("div");
        postItemContainer.className = "card mb-3";

        let postItemBody = document.createElement("div");
        postItemBody.className = "card-body";

        let postItem = document.createElement("h5");
        postItem.className = "card-title";
        postItem.innerText = userPost.username;

        let postText = document.createElement("p");
        postText.className = "card-text";
        postText.innerText = userPost.text;

        let timePosted = document.createElement("p");
        timePosted.className = "card-text small";
        timePosted.innerText = new Date(
          userPost.createdAt
        ).toLocaleString();

        postItemBody.append(postItem, postText, timePosted);
        postItemContainer.appendChild(postItemBody);
        postsList.appendChild(postItemContainer);
      }
    })
    .catch((error) => {
      console.log("Error fetching posts:", error);
    });
}

const postForm = document.querySelector("#postForm");

postForm.addEventListener("submit", function (event) {
  event.preventDefault();
  createPost();
});

function createPost() {
  const postMessage = document.querySelector("#postMessage").value;

  const postData = {
    text: postMessage,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loginData.token}`,
    },
    body: JSON.stringify(postData),
  };

  fetch(apiBaseURL + "/api/posts", options)
    .then((response) => response.json())
    .then((newPost) => {
      document.querySelector("#postMessage").value = "";
      page = 1;
      limit = 5;
      postsList.innerHTML = ""; // Clear existing posts
      fetchPosts(page, limit);
    })
    .catch((error) => {
      console.log("Error creating new post:", error);
    });
}

window.addEventListener("DOMContentLoaded", (e) => {
  moreButton.addEventListener("click", () => {
    page = page + 1;
    fetchPosts(page, limit);
  });

  fetchPosts(page, limit);
});
