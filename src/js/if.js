import InfiniteScroll from 'infinite-scroll';

// var unsplashID =
//   '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';

const API_KEY = '2cb1f6a129e341208656bdf150fd7b47';
const BASE_URL = 'https://newsapi.org/v2';

const infScroll = new InfiniteScroll('.container', {
  responseType: 'text',
  history: false,
  path() {
    return `https://newsapi.org/v2/everything?q=tesla&from=2021-10-01&sortBy=publishedAt&apiKey=2cb1f6a129e341208656bdf150fd7b47`;
  },
});

// console.log(infScroll);

infScroll.loadNextPage();

// setTimeout(() => {
//   infScroll.loadNextPage();
// }, 1000);

infScroll.on('load', (path, response) => {
  console.log(JSON.parse(response));
  // console.log(path);
});

// infScroll.on('load', (response, path) => {
//   console.log(JSON.parse(response));

// тут по шаблну сделали строку с тегами
// потом кинули в фрагмент
// фрагмент передали в infScroll.appendItems(фоагмент)
// });

// const markup = '<p>qweqweqwe</p>';
// const fragment = new DocumentFragment();
// const d = document.createElement('div');
// fragment.innerHTML = markup;
// console.log(fragment);
