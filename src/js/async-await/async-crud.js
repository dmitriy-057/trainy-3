// Использование CRUD c async/await

const BASE_URL = "https://jsonplaceholder.typicode.com";

// POST
async function addPost(post) {
    const optionsToCreate = {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json",
        }
      };

    const response = await fetch(`${BASE_URL}/posts`,   optionsToCreate);
    const newPost = await response.json();

    return newPost;
    }

async function addPostAndUpdateUi() {
    try {
        const post = await addPost({});
        console.log(post)
    }
    catch (error) {
        console.log(error);
    }
}

addPostAndUpdateUi();

// GET
async function fetchPosts() {
    const response = await fetch(`${BASE_URL}/posts/`);
    const getPosts = await response.json();
    return getPosts;
}

// DELETE

async function removePost(postId) {
    const url = `${BASE_URL}posts/${postId}`
    const options = {
        method: "DELETE",
    }
    const response = await fetch(url, options);
    const removePost = await response.json()
    return removePost;
}

// PATCH

async function updatePost(updateObject, postId) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(updateObject),
        headers: {
            "Content-Type": "application/json",
        }
    }
    const response = await fetch(`${BASE_URL}/posts/${postId}`, options);
    const postToUpdate = await response.json();

    return postToUpdate;
}