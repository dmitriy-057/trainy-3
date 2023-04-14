// Метод PATCH заменяет в существующем ресурсе значения переданные в теле запроса свойств. 
// Метод PUT полностью заменяет ресурс.

const BASE_URL = "https://jsonplaceholder.typicode.com";

function updatePostById(object,postId) {
    const options = {
        method: "PATCH",
        body: JSON.stringify(object),
        headers: {
            "Content-Type": "application/json",
        }
    }
    return fetch(`${BASE_URL}/posts/${postId}`, options)
    .then(res=> res.json())
    .then(posts => console.log(posts))
    .catch(e => console.log(e))
}

updatePostById({body: "CRUD is really awesome"}, 13)
updatePostById({title: "Тестовая книга по Node.JS"}, 14)