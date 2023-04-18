
// Синтаксис написания async/await
// async function fn() { };

// const fn = async function () {};

// const arr = async() => {};

// const x = {
//     async getName() {}
// };

// class X {
//     async getName() {}
// }

function getFruit(name) {
    const fruits = {
        strawberry: "🍓",
        kiwi: "🥝",
        apple: "🍎"
    }
    // return Promise.resolve(fruits[name]);
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(fruits[name])
        }, 500)
    })

} 

async function asyncMakeFruit(name) {
    console.time('asyncMakeFruit')
try {
    const apple = getFruit('apple');
    console.log(apple);
    const strawberry = getFruit('strawberry');
    console.log(strawberry);
    const kiwi = getFruit("kiwi");
    console.log(kiwi);

    const fruitsAll = await Promise.all([apple,strawberry,kiwi])
    console.log(fruitsAll) 
    
} catch (error) {
    console.log(error);
}


    console.timeEnd('asyncMakeFruit')
}
asyncMakeFruit()