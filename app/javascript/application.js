// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Manipulate the obtained data
  })
  .catch(error => {
    // Handle any errors that occur
  });

document.getElementById("ajax_test").addEventListener("click", function(event) {
event.preventDefault(); // Prevent the page from refreshing when clicking the link

fetch("/poeple/1", {
    headers: {
    "X-Requested-With": "XMLHttpRequest"
    }
})
    .then(response => response.text())
    .then(html => {
    document.getElementById("result").innerHTML = html;
    });
});


document.getElementById("fetch_people").addEventListener("click", function(event) {
event.preventDefault(); // Prevent the page from refreshing when clicking the link

fetch("/people", {
    headers: {
    "X-Requested-With": "XMLHttpRequest"
    }
})
    .then(response => response.text())
    .then(html => {
    document.getElementById("people_list").innerHTML = html;
    })
    .catch(error => {
    console.error('Error fetching people:', error);
    });
});




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
  