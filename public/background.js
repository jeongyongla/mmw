chrome.history.search({text: '', maxResults: 100}, function(data) {
  data.forEach(function(page) {
      console.log(page.url);
  });
});

// window.open('http://localhost:3000');
window.location.href=('http://localhost:3000');
 alert("dd");