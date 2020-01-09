document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = "Delete All";
  deleteButton.id = "deleteButton";
  document.body.appendChild(deleteButton);

  const button = document.querySelector('#deleteButton');
  button.addEventListener('click', handleDeleteButtonClick);

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

  const list = document.querySelector('#reading-list');
  list.appendChild(newTitleItem);
  list.appendChild(newAuthorItem);
  list.appendChild(categoryItem);

  this.reset();
  console.log("it works");
};

const handleDeleteButtonClick = function () {

  document.getElementById("reading-list").innerHTML = "";

  // const list = document.querySelector('#reading-list');
  // list.parentNode.removeChild(list);

  // const list = document.querySelector('#reading-list');

  // const newList = document.createElement('ul');
  // newList.id = 'reading-list';
  // document.body.appendChild(newList);

}
