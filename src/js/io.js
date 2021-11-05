// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// });

// const sentinel = document.querySelector('#sentinel');
// observer.observer(sentinel);

/**
 * Typical Observer's registration
 */
const callback = (entries, io) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Привет из колбека в forEach');
      console.log(entry.target);
    }
  });
};
const options = {
  rootMargin: '500px',
  threshold: 0.75,
};
const observer = new IntersectionObserver(callback, options);

const sentinel = document.querySelector('#sentinel');
observer.observe(sentinel);
