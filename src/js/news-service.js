export default class NewsApiService {
    constructor() {
        this.searchData = '';
        this.page = 1;
    }
    fetchArticles() {
        console.log('this до запроса',this);
    const options = {
        headers: {
            Authorization: '4330ebfabc654a6992c2aa792f3173a3'
        }
    }
    const url = `https://newsapi.org/v2/everything?q=${this.searchData}&pageSize=5&page=${this.page}`;

    fetch(url, options)
    .then(r => r.json())
    .then(result => {
        console.log('result', result)
        this.page += 1;
        console.log('this после запроса если все ок', this);
    })
    }

    get data() {
        return this.searchData;
    }
    set data(newData) {
        this.searchData = newData;
    }
}