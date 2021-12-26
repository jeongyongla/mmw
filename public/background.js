chrome.history.search({text: '', maxResults: 5}, function(data) {
  data.forEach(function(page,index) {
      // console.log(page.id+"/"+page.lastVisitTime+"/"+page.title+"/"+page.url+"/"+page.visitCount);
      document.getElementById(20+index).innerText=page.title;   
      document.getElementById(20+index).className=page.url;
      document.getElementById(20+index).addEventListener("click",winclick);
  });
});  
chrome.topSites.get((arr) => {
    arr.forEach(function(page,index) {
      // console.log(page+index);
      if(index<5){
        document.getElementById(10+index).innerText=page.title;   
        document.getElementById(10+index).className=page.url;
        document.getElementById(10+index).addEventListener("click",winclick);
      }
    })
    document.getElementById("99").className='http://localhost:3000';
    document.getElementById("99").addEventListener("click",winclick);
  });
function winclick(params) {
  window.open(params.target.className);
};
// function home() {
//   window.open('http://localhost:3000');
// }

// function home() {
//   window.open("http://localhost:3000");
// };

// window.open('http://localhost:3000');
// window.location.href=('http://localhost:3000');
//https://developer.chrome.com/docs/extensions/reference/history/#type-HistoryItem