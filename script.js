// show modal
const contactUsButtons = document.querySelectorAll('#contact-us');
const closeModalButton = document.querySelector('#close-modal');
const modal = document.querySelector('.modal');

contactUsButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.add('modal-show');
  });
});

closeModalButton.addEventListener('click', () => {
  modal.classList.remove('modal-show');
});

// end of show modal

// extra* navigation button show/hide
const toggleButton = document.querySelector('.toggle');
const collapseElement = document.querySelector('.collapse');

toggleButton.addEventListener('click', () => {
  collapseElement.classList.toggle('active');
});
