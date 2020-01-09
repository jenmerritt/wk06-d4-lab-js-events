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

  const newAuthorItem = document.createElement('li');
  newAuthorItem.textContent = `Author: ${event.target.author.value}`;

  const categoryItem = document.createElement('li');
  categoryItem.textContent = `Category: ${event.target.category.value}`;

  const list = document.querySelector('ul');
  list.appendChild(newTitleItem);
  list.appendChild(newAuthorItem);
  list.appendChild(categoryItem);

  this.reset();
  console.log("it works");
};
