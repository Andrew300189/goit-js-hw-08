// Импортируем библиотеку SimpleLightbox из модуля 'simplelightbox'
import SimpleLightbox from 'simplelightbox';

// Импортируем стили CSS для библиотеки SimpleLightbox из файла 'simple-lightbox.min.css'
import 'simplelightbox/dist/simple-lightbox.min.css';

// Импортируем массив с элементами галереи из файла 'gallery-items.js'
import { galleryItems } from './gallery-items.js';

// Функция createGalleryItem принимает объект item и возвращает строку с разметкой элемента галереи
function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          alt="${item.description}"
        />
      </a>
    </li>
  `;
}


const gallery = document.querySelector('.gallery');

// Создаем HTML разметку для всех элементов галереи, используя функцию createGalleryItem и метод map для перебора массива galleryItems
// Затем объединяем элементы массива в одну строку с помощью метода join('')
const galleryItemsHTML = galleryItems.map((item) => createGalleryItem(item)).join('');

// Вставляем разметку всех элементов галереи в конец контейнера галереи
gallery.insertAdjacentHTML('beforeend', galleryItemsHTML);

// Создаем новый экземпляр SimpleLightbox и передаем ему селектор для элементов галереи, которые будут являться ссылками для открытия изображений
const lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',         
  captionPosition: 'bottom',   
  captionDelay: 250,          
});
