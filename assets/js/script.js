var countryInput, graphTypeInput, dataTypeInput, newsAPIKey, newsLink


/////////////////////////////////
//           NEWS API          //
/////////////////////////////////

function getNewsAPI() {
  
  var params = {
    q: 'covid',
    pageSize: '5',
    include_similar: 'false',
    from: '2022-03-19',
    apiKey: '4c2773d12e684f40b1fe0aa0e6487e74'
  };
  
  // demo api search 
  // https://newsapi.org/v2/everything?q=covid&include_similar=false&pageSize=5&from=2022-03-18&apiKey=4c2773d12e684f40b1fe0aa0e6487e74

  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');
  
  fetch("https://newsapi.org/v2/everything?" + query)
    .then(response => response.json())
    .then(data => {
      newsCardUpdator(data);
  })
  .catch(error => console.log('error', error));
}

function updateNews() {

}

function newsCardUpdator(data) {
  var cardImage1 = document.getElementById('card_img_1')
  var cardTitle1 = document.getElementById('card-1-title')
  var cardContent1 = document.getElementById('card-1-content')
  var cardLink1 = document.getElementById('card-1-link')

  cardImage1.src = data.articles[0].urlToImage
  cardTitle1.innerHTML = data.articles[0].title
  cardContent1.innerHTML = data.articles[0].content
  cardLink1.href = data.articles[0].url
}


/////////////////////////////////
//            MAIN             //
/////////////////////////////////

function main() {
  getNewsAPI();
}





main()