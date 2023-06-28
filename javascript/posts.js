"use strict";
      const postsList = document.querySelector("#postsList");
      const loginData = getLoginData();

      function fetchPosts() {
        const options = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${loginData.token}`,
          },
        };

        fetch(apiBaseURL + "/api/posts", options)
          .then((response) => response.json())
          .then((list) => {
            postsList.innerHTML = ""; // Clear existing posts
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
              timePosted.className = "card-text";
              timePosted.innerText = userPost.createdAt;

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
          })
          .catch((error) => {
            console.log("Error creating new post:", error);
          });
      }

      window.addEventListener("DOMContentLoaded", (e) => {
        fetchPosts();
      })