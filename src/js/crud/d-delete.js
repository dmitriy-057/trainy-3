// DELETE method - DELETE
const BASE_URL = "https://jsonplaceholder.typicode.com";

function removePost(postId) {
    const url = `${BASE_URL}posts/${postId}`
    const options = {
        method: "DELETE",
    }
    return fetch(url,options).then(res=>res.json()).then(console.log)
}
// removePost(3)
// removePost(4)