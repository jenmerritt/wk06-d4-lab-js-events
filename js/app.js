document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})

const handleFormSubmit = function (event) {
  event.preventDefault();

  // console.log(event.target.title.value);

  const newTitleItem = document.createElement('li');
  newTitleItem.textContent = `Title: ${event.target.title.value}`;

  const list = document.querySelector('ul');
  list.appendChild(newTitleItem);

  // this.reset();
  console.log("it works");
};
