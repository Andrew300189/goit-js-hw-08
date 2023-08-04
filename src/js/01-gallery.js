// Add imports above this line
<<<<<<< Updated upstream
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute('data-source', item.original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

const gallery = document.querySelector('.gallery');
let lightbox;

const galleryItemsElements = galleryItems.map((item) => createGalleryItem(item));
gallery.append(...galleryItemsElements);

gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const imageUrl = event.target.dataset.source;

    if (lightbox) {
      lightbox.close();
    }

    lightbox = new SimpleLightbox(`<img src="${imageUrl}" alt="Image">`, {
      onShow: (instance) => {
        document.addEventListener('keydown', handleKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', handleKeyPress);
      },
    });

    lightbox.show();
  }
});

function handleKeyPress(event) {
  if (event.key === 'Escape') {
    lightbox.close();
  }
}

console.log(galleryItems);

=======
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
>>>>>>> Stashed changes
