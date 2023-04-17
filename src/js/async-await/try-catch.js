try {
    console.log('Внутри блока try')
    myVar;
    console.log('После блока try')

} catch (error) {
    console.log(error.stack) 
    console.log("Ошибка в блоке catch")
}


console.log('После try...catch')
