import AppCard from '/js/components/card/card.js';
import { openDB } from '/node_modules/idb/build/esm/index.js';
import checkConnectivity  from '/js/connection.js';

(async function (document) {

    const app = document.querySelector('#app');
    const skeleton = app.querySelector('.skeleton');
    const listPage = app.querySelector('[page=list]');

    checkConnectivity();
    document.addEventListener('connection-changed', ({ detail }) => {
      console.log(detail)
    });

    skeleton.removeAttribute('active');
    listPage.setAttribute('active', '');

    const data = await fetch('./data/spacex.json');
    const json = await data.json();

    const database = await openDB('app-store', 1, {
      upgrade(db) {
        db.createObjectStore('articles');
      }
    });

    if (navigator.onLine) {
      await database.put('articles', json, 'articles');
    }

    await database.put('articles', json, 'articles');

    const articles = await database.get('articles', 'articles');

    try {
      const cards = articles.map(item => {
        const cardElement = new AppCard();

        cardElement.initCard(item.image, item.placeholder, item.content.title, item.content.description, cardElement);
        listPage.appendChild(cardElement);

        if (!'IntersectionObserver' in window) {
          cardElement.swapImage();
        }

        return cardElement;
      });

      const callback = function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const card = entry.target;

            card.addEventListener('image-loaded', card.swapImage());
          }
        });
      }

      const io = new IntersectionObserver(callback);

      cards.forEach(card => {
        io.observe(card);
      });

    } catch (error) {
      console.log(error.toString());
    }
})(document);
