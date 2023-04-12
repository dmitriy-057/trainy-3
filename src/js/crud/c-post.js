// CREATE method - POST 
const BASE_URL = "https://jsonplaceholder.typicode.com";

function addPost(post) {
    const optionsToCreate = {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json",
        }
      }
    return fetch(`${BASE_URL}/posts`, optionsToCreate)
      .then(response => response.json())
}

addPost({
    "body": " Test content",
    "title": "JS",
    "rating": 10,
}).then(renderBook)

addPost({
    "body": " Test content",
    "title": "CSS",
    "rating": 9,
}).then(renderBook)

addPost({
    "body": " Test content",
    "title": "HTML",
    "rating": 8,
}).then(renderBook)

function renderBook(post) {
    console.log("Пришел ответ от бекенда можно рисовать")
    console.log(post)
}