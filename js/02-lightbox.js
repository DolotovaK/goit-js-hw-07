import { galleryItems } from "./gallery-items.js";

/*Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а також гортання зображень за допомогою клавіатури. */
// Change code below this line

console.log(galleryItems);

function renderMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a 
      class="gallery__item" 
      href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`;
    })
    .join("");
}
const galleryContainer = document.querySelector(".gallery");
const galleryMakrup = renderMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMakrup);

const lightboxGallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
console.log(lightboxGallery);
