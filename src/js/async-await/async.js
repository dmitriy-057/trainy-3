

// async function fn() { };

// const fn = async function () {};

// const arr = async() => {};

// const x = {
//     async getName() {}
// };

// class X {
//     async getName() {}
// }

async function getFruit(name) {
    const fruits = {
        strawberry: "🍓",
        kiwi: "🥝",
        apple: "🍎"
    }
    return Promise.resolve(fruits[name]);
} 

getFruit('apple').then(fruit=> console.log(fruit))