const form = document.querySelector('form');
const container = document.querySelector('.container');
const input = document.querySelector('input');
const dismissBtn = document.querySelector('.dismiss');
const container2 = document.querySelector('.container-2');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value !== '') {
    container.classList.add('hide');
    container2.classList.remove('hide');
  }
});

dismissBtn.addEventListener('click', () => {
  input.value = '';
  container.classList.remove('hide');
  container2.classList.add('hide');
});
