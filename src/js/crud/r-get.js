// Method Get - default method
const BASE_URL = "https://jsonplaceholder.typicode.com";
function fetchPosts() {
    return fetch(`${BASE_URL}/posts`)
    .then(r => r.json())
}

function fetchPostById(postId) {
    return fetch(`${BASE_URL}/posts/${postId}`)
    .then(r => r.json())
    .then(console.log)
}

// fetchPosts();
fetchPostById(30);
