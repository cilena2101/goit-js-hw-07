import { galleryItems } from "./gallery-items.js";

const imageEl = document.querySelector(".gallery");
function imageInGallery({ original, preview, description }) {
	return `<a class="gallery__item" href="${original}">
	<img class="gallery__image" src="${preview}" alt="${description}" />
	</a>`;
}

const makeElementGallery = galleryItems.map(imageInGallery).join("");
imageEl.insertAdjacentHTML("afterbegin", makeElementGallery);


const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
    fadeSpeed: 250,
});

console.log(galleryItems);