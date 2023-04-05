// Method Get - default method
// CREATE method - POST 
const postToAdd = {
    author: "Mango",
    body: "CRUD is awesome",
  };

const optionsToCreate = {
    method: "POST",
    body: JSON.stringify(postToAdd),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    }
  }

// UPDATE method - PUT/PATCH
// Метод PATCH заменяет в существующем ресурсе значения переданные в теле запроса свойств. Метод PUT полностью заменяет ресурс.

const postToUpdate = {
    id: 3,
    body: "CRUD is really awesome",
    title: "CRUD PATCH",
    userId: 777,
    author: "DMITRIY"
}

const optionsToUpdate = {
    method: "PATCH",
    body: JSON.stringify(postToUpdate),
    headers: {
        "Content-Type": "application/json; charset=UTF-8",
    }
}

// DELETE method - DELETE

const postToDelete = 3

const optionsToDelete = {
    method: "DELETE",
}

fetch("https://jsonplaceholder.typicode.com/posts/3", optionsToDelete)
.then(r => r.json())
.then(posts => console.log(posts))
.catch(e => console.log(e))

