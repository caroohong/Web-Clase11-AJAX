// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails


//GET RESPONSE
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('fetch_people').addEventListener('click', fetchPeople);
});

function fetchPeople() {
  fetch('/people.json')
    .then(response => response.json())
    .then(data => {
      let peopleList = document.getElementById('people-list');
      peopleList.innerHTML = '';
      data.forEach(person => {
        let personItem = document.createElement('div');
        personItem.textContent = `- ${person.name} (${person.age} years old)`;
        peopleList.appendChild(personItem);
      });
    });
}

//POST RESPONSE
$(document).ready(function() {
    $('#new_person').on('ajax:success', function(event) {
      var [data, status, xhr] = event.detail;
      $('#people-list').html(xhr.responseText);
      $('#person_name').val('');
      $('#person_age').val('');
    }).on('ajax:error', function(event) {
      var [data, status, xhr] = event.detail;
      alert('Error: ' + xhr.responseText);
    });
  });
  