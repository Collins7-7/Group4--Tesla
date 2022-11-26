// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

const overlay = document.querySelector('.overlay');
const overlayClose = document.querySelector('.overlay__close');

const openMenu = document.querySelectorAll('.open-menu');
openMenu.forEach(menuBtn => {
  menuBtn.addEventListener('click', (event) => {
    overlay.classList.add('show')
  });
});
overlayClose.addEventListener('click', (event) => {
  overlay.classList.remove('show')
});
