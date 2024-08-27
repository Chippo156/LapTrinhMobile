(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  // Task 1: Attach event listener to change color to blue on body click
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

