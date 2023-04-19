 // import "./try-catch";
//  import "./async";
 import "./async-crud"
// Для объявления асинхронной стрелочной функции, перед списком параметров добавляем ключевое слово "async";

// Внутри неё можно использовать оператор "await" и справа от него поставить что-то, что вернёт промис. Метод "response.json()" также возвращает промис, поэтому ставим "await";

// const fetchUsers = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await response.json();
//     return users;
// }
  
// fetchUsers()
//     .then(users => console.log(users))
//     .catch(error => console.error(error));

// const fetchUsers = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await response.json();
//         console.log(users);
//     } catch (error){
//         console.log(error.message)
//     }
// }

// fetchUsers()

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const firstResponse = await fetch(`${baseUrl}/users/1`);
//     const secondResponse = await fetch(`${baseUrl}/users/2`);
//     const thirdResponse = await fetch(`${baseUrl}/users/3`);
  
//     const firstUser = await firstResponse.json();
//     const secondUser = await secondResponse.json();
//     const thirdUser = await thirdResponse.json();
  
//     console.log(firstUser, secondUser, thirdUser);
//   };
  
//   fetchUsers();

// const fetchUsers = async () => {
//     const baseUrl = "https://jsonplaceholder.typicode.com";
//     const userIds = [1, 2, 3];
  
//     // 1. Создаём массив промисов
//     const arrayOfPromises = userIds.map(async userId => {
//       const response = await fetch(`${baseUrl}/users/${userId}`);
//       return response.json();
//     });
  
//     // 2. Запускаем все промисы параллельно и ждем их завершения
//     const users = await Promise.all(arrayOfPromises);
//     console.log(users);
//   };
  
//   fetchUsers();

