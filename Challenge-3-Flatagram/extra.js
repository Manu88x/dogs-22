document.addEventListener("DOMContentLoaded", function () {
    const baseUrl = "http://localhost:3000";

    // DOM elements
    const titleElement = document.getElementById("card-title");
    const imageElement = document.getElementById("card-image");
    const likeCountElement = document.getElementById("like-count");
    const likeButton = document.getElementById("like-button");
    const commentsList = document.getElementById("comments-list");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment");

    // Fetch image and comments data
    fetch(`${baseUrl}/images/1`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch image and comments data');
            }
            return response.json();
        })
        .then(data => {
            titleElement.textContent = data.title;
            imageElement.src = baseUrl + data.image; // Ensure correct image path
            likeCountElement.textContent = `${data.likes} likes`;

            // Render comments
            data.comments.forEach(comment => {
                const li = document.createElement("li");
                li.textContent = comment.content;
                commentsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching image and comments data:", error);
            // You can add more detailed error handling here, like displaying an error message to the user.
        });

    // Event listeners
    likeButton.addEventListener("click", function () {
        // Increment like count and update UI
        const currentLikes = parseInt(likeCountElement.textContent);
        likeCountElement.textContent = `${currentLikes + 1} likes`;
    });

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newComment = commentInput.value;
        if (newComment.trim() !== "") {
            // Add new comment to UI
            const li = document.createElement("li");
            li.textContent = newComment;
            commentsList.appendChild(li);
            // Clear comment input
            commentInput.value = "";
        }
    });

    // Bonus deliverable: Click to remove comment
    commentsList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.remove();
        }
    });

    // Bonus deliverable: Toggle image visibility by clicking title
    titleElement.addEventListener("click", function () {
        imageElement.classList.toggle("hidden");
    });

    // Bonus deliverable: Click to fetch new random dog image
    imageElement.addEventListener("click", function () {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch random dog image');
                }
                return response.json();
            })
            .then(data => {
                imageElement.src = data.message;
            })
            .catch(error => {
                console.error("Error fetching random dog image:", error);
                // You can add more detailed error handling here, like displaying an error message to the user.
            });
    });
});






//version 2.00000




document.addEventListener("DOMContentLoaded", function () {
    const baseUrl = "http://localhost:3000";

    // DOM elements
    const titleElement = document.getElementById("card-title");
    const imageElement = document.getElementById("card-image");
    const likeCountElement = document.getElementById("like-count");
    const likeButton = document.getElementById("like-button");
    const commentsList = document.getElementById("comments-list");
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment");

    // Fetch image and comments data
    fetch(`${baseUrl}/images/1`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch image and comments data');
            }
            return response.json();
        })
        .then(data => {
            titleElement.textContent = data.title;
            imageElement.src = baseUrl + data.image; // Ensure correct image path
            likeCountElement.textContent = `${data.likes} likes`;

            // Clear existing comments
            commentsList.innerHTML = '';

            // Render comments
            data.comments.forEach(comment => {
                const li = document.createElement("li");
                li.textContent = comment.content;
                commentsList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error fetching image and comments data:", error);
            // You can add more detailed error handling here, like displaying an error message to the user.
        });

    // Event listeners
    likeButton.addEventListener("click", function () {
        // Increment like count and update UI
        const currentLikes = parseInt(likeCountElement.textContent);
        likeCountElement.textContent = `${currentLikes + 1} likes`;
    });

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const newComment = commentInput.value;
        if (newComment.trim() !== "") {
            // Add new comment to UI
            const li = document.createElement("li");
            li.textContent = newComment;
            commentsList.appendChild(li);
            // Clear comment input
            commentInput.value = "";
        }
    });

    // Bonus deliverable: Click to remove comment
    commentsList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.remove();
        }
    });

    // Bonus deliverable: Toggle image visibility by clicking title
    titleElement.addEventListener("click", function () {
        imageElement.classList.toggle("hidden");
    });

    // Bonus deliverable: Click to fetch new random dog image
    imageElement.addEventListener("click", function () {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch random dog image');
                }
                return response.json();
            })
            .then(data => {
                imageElement.src = data.message;
            })
            .catch(error => {
                console.error("Error fetching random dog image:", error);
                // You can add more detailed error handling here, like displaying an error message to the user.
            });
    });
});