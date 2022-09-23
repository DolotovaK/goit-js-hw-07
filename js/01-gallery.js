import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
/*Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. Подивися демо відео роботи галереї.
Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
2. Реалізація делегування на div.gallery і отримання url великого зображення.
3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
5. Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
 */

function renderMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${preview}"
    />
  </a>
</div>`;
    })
    .join("");
}

const galleryContainer = document.querySelector(".gallery");
const galleryMakrup = renderMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMakrup);

galleryContainer.addEventListener("click", onClickGetModal);

function onClickGetModal(evt) {
  evt.preventDefault();

  const isImage = evt.target.classList.contains("gallery__image");

  if (!isImage) {
    return;
  }
  const currentImage = evt.target;

  const instance = basicLightbox.create(`
        <img src="${currentImage.dataset.source}" >
        `);
  instance.show();

  //   const shownImage = instance.element();
  //   console.log(shownImage);
  document.addEventListener("keydown", onCloseModal);

  function onCloseModal(evt) {
    // console.log(evt.key);
    if (evt.key === "Escape") {
      instance.close();
    }
  }
}
