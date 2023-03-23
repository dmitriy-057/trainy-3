export default class NewsApiService {
    constructor() {
        this.searchData = '';
        this.page = 1;
    }
    // метод класса
    fetchArticles() {
        const options = {
        headers: {
            Authorization: '4330ebfabc654a6992c2aa792f3173a3'
        }
        }
        const url = `https://newsapi.org/v2/everything?q=${this.searchData}&pageSize=5&page=${this.page}`;

       return fetch(url, options)
        .then(response => response.json())
        .then(data => {
            this.incrementPage();
            return data.articles;
        })
    };
    // метод класса
    incrementPage() {
    this.page += 1;
    };
    // метод класса
    resetPage() {
    this.page = 1;
}
    // метод класса
    // в геттере получаю данные с инпута;
    get data() {
        return this.searchData;
    };
    // метод класса
    // в сеттере изменяю данные с инпута и записываю их в searchData;
    set data(newData) {
        this.searchData = newData;
    }
}