
   chrome.history.search({text: '', maxResults: 10}, function(data) {
    data.forEach(function(page) {
        console.log(page.id+"/"+page.lastVisitTime+"/"+page.title+"/"+page.url+"/"+page.visitCount);
      });
  });

  chrome.topSites.get((arr) => {
    console.log(arr);
  });
 
// window.open('http://localhost:3000');
// window.location.href=('http://localhost:3000');
//https://developer.chrome.com/docs/extensions/reference/history/#type-HistoryItem