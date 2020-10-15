// getting input from search-query form

const form = document.getElementById('search-query')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(event.target);
  const asString = new URLSearchParams(formData).toString();
  search(asString);
});

function search(searchTerm) {
  const localServer = 'http://localhost:9292/recommendation?'
  fetch(localServer + searchTerm)
  .then(function(response) {
    return response.json();
  }).then(function(response) {
    console.log(response);
  });
}