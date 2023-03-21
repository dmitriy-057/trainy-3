import '../css/common.css';
import NewsApiService from "./news-service";

const refs = {
    searchForm: document.querySelector('.search-form-pagination'),
    articlesList: document.querySelector(".pg-articles"),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};
// создал экземпляр класса для того, что бы получить обьект с методами и свойствами класса
const newsApiService = new NewsApiService();
console.log('newsApiService', newsApiService)

refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore)


function onSearch(e) {
    e.preventDefault();

// получаем значение с инпута
    newsApiService.data = e.currentTarget.elements.query.value;
    console.log('Data input', newsApiService.data);
    
    newsApiService.fetchArticles()

    refs.searchForm.reset();
}

function onLoadMore() {
    newsApiService.fetchArticles()
}