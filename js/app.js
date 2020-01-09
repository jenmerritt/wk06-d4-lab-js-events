document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

})

const handleFormSubmit = function (event) {
  event.preventDefault();



  this.reset();
  console.log("it works");
};
