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

        return cardElement;
        // setTimeout(() => {
        //   const img = cardElement.querySelector('img');
        //   img.src = img.dataset.src;
        //   img.onload = () => {
        //     // Add the `fade` class to the placeholder
        //     img.parentNode.querySelector('.placeholder').classList.add('fade');
        //   }
        // }, 3000);
      });

      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
       */
      const options = {
        rootMarging: '0px 0px 0px 0px'
      };
      const callback = entries => {
        entries.forEach((entry) => {
          // If image element in view
          if (entry.isIntersecting) {
            // Actualy load image
            const image = entry.target
            image.src = image.dataset.src;
            image.onload = () => {
              // Add the `fade` class to the placeholder
              image.parentNode.querySelector('.placeholder').classList.add('fade');
            }
          }
        });
      };

      const io = new IntersectionObserver(callback, options);
      // Observe images as they enter the viewport
      cards.forEach((card) => {
        const image = card.querySelector('img');
        io.observe(image);
      });
    } catch (error) {
      console.log(error.toString());
    }
})(document);
