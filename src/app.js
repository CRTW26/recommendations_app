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
    const searchResults = sortResponse(response);
    formatHTML(searchResults);
  });
}

function sortResponse(response) {
  let searchResults = [];
  for (let count = 0; count < 10; count ++) {
    searchResults.push(response.Similar.Results[count].Name)
  }
  return searchResults
}

function formatHTML(resultsArray) {
  let htmlString = '<ul>';
  let results = resultsArray;
  console.log(results);
  for (let count = 0; count < results.length; count ++) {
    htmlString += '<li><div>' + results[count] + '</div></li>'
  }
    console.log(htmlString);
    htmlString += '</ul>'
    console.log(htmlString);
    return htmlString
  
}