// CREATE method - POST 
const BASE_URL = "https://jsonplaceholder.typicode.com";

const newPost = {
    "body": " Test content",
    "title": "JS",
    "rating": 10,
}

const optionsToCreate = {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
        "Content-Type": "application/json",
    }
  }

  fetch(`${BASE_URL}/posts`, optionsToCreate)