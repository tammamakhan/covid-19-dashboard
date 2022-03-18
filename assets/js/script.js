var countryInput, graphTypeInput, dataTypeInput, newsAPIKey, newsLink


/////////////////////////////////
//           NEWS API          //
/////////////////////////////////

function getNewsAPI() {
  var requestOptions = {
    method: 'GET'
  };
  
  var params = {
    q: 'covid',
    pageSize: '5',
    // apiKey: '4c2773d12e684f40b1fe0aa0e6487e74'
  };
  
  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');
  
  fetch("https://newsapi.org/v2/everything?" + query, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .then(data => {
      newsCardCreator(data);
  })
  .catch(error => console.log('error', error));
}

function updateNews() {

}

function newsCardCreator(data) {
  var cardTitle = document.getElementById('card_img_1')
}


/////////////////////////////////
//            MAIN             //
/////////////////////////////////

function main() {
  getNewsAPI();
}





main()