import '../css/common.css';
import NewsApiService from "./news-service";
import LoadMoreBtn from './load-more-btn';
// import {markupTempalate} from './articles';
const refs = {
    searchForm: document.querySelector('.search-form-pagination'),
    articlesList: document.querySelector(".pg-articles"),
};

// создал экземпляр класса для того, что бы ниже в коде вызывать методы и свойства класса

// для кнопки loadMoreBtn;
const loadMoreBtn = new LoadMoreBtn({
    selector: '[data-action="load-more"]',
    hidden: true,
});
console.log('loadMoreBtn',loadMoreBtn);

// для промиса с News API
const newsApiService = new NewsApiService();
console.log('newsApiService', newsApiService)

refs.searchForm.addEventListener("submit", onSearch);
loadMoreBtn.refs.button.addEventListener("click", fetchArticles)


function onSearch(e) {
    e.preventDefault();

// получаем значение с инпута
    newsApiService.data = e.currentTarget.elements.query.value;

    if(newsApiService.data === "") {
        return alert("Введите что-то нормальное");
    }
    loadMoreBtn.show();

    newsApiService.resetPage();
    clearArticlesContainer();

    fetchArticles();
}

function fetchArticles() {
    loadMoreBtn.disable();
    newsApiService.fetchArticles()
    .then(articles => {
        createArticlesMarkup(articles);
        loadMoreBtn.enable();
    })
       // проблема с articles.js в консоле articles is undefined
    // .then(appendArticlesMarkup)
}

// function appendArticlesMarkup(markup) {
//     refs.articlesList.insertAdjacentHTML("beforeend", markupTempalate(markup))
// }

function createArticlesMarkup(articles) {
    const markup = articles.map(({url,urlToImage,title,author,description})=> {
        return `
            <li> 
            <a href='${url}' target="_blank" rel="noopener noreferrer">
            <article> 
            <img src="${urlToImage}" alt="" width="480">
            <h2>${title}</h2>
            <p>Posted by: ${author}</p>
            <p>${description}</p>
            </article>
            </a>
            </li>
            `
        }).join("");

        refs.articlesList.insertAdjacentHTML('beforeend', markup)
}

function clearArticlesContainer() {
    refs.articlesList.innerHTML = '';
}