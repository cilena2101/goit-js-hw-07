import { galleryItems } from './gallery-items.js';

const imagesEl = document.querySelector(".gallery");

const imageInGallery = ({original, preview, description }) => {
	return `<div class="gallery__item"> 
 <a class="gallery__link" href="${original}"> 
 <img class="gallery__image", src="${preview}", data-source="${original}", alt="${description}"> </a>
 </div>`;
};

const makeElementGallery = galleryItems.map(imageInGallery).join("");

imagesEl.insertAdjacentHTML("afterbegin", makeElementGallery);

imagesEl.addEventListener('click', onImageClick);
console.log(imagesEl);

function onImageClick(evt) {
	evt.preventDefault();
	if (evt.target.nodeName !== 'IMG') {
		return;
	} else {
		const instance = basicLightbox.create(`
	<img src="${evt.target.dataset.source}" width="800" height="600">`);
		instance.show();

		imagesEl.addEventListener('keydown', (evt) => {
			if (evt.code === "Escape") {
				instance.close();
			}
		});
	}
}