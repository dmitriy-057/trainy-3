// Использование CRUD с try...catch

async function addAndRenderPosts() {
    try {
        const post = await addPost({})
        console.log(post); 
    } catch(error) {
        console.log(error);
    }
}