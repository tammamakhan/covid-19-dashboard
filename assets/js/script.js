var countryInput, graphTypeInput, dataTypeInput, newsAPIKey, newsLink


/////////////////////////////////
//           NEWS API          //
/////////////////////////////////

function getNewsAPI() {
  
  var params = {
    q: 'covid',
    pageSize: '5',
    include_similar: 'false',
    // need to add date time getter
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
  /* BASIC CARDS */
  /* Card 1 */
  var cardImage1 = document.getElementById('card_img_1')
  var cardTitle1 = document.getElementById('card-1-title')
  var cardContent1 = document.getElementById('card-1-content')
  var cardLink1 = document.getElementById('card-1-link')

  cardImage1.src = data.articles[0].urlToImage
  cardTitle1.innerHTML = data.articles[0].title
  cardContent1.innerHTML = data.articles[0].content
  cardLink1.href = data.articles[0].url

  /* Card 2 */
  var cardImage1 = document.getElementById('card_img_2')
  var cardTitle1 = document.getElementById('card-2-title')
  var cardContent1 = document.getElementById('card-2-content')
  var cardLink1 = document.getElementById('card-2-link')

  cardImage1.src = data.articles[1].urlToImage
  cardTitle1.innerHTML = data.articles[1].title
  cardContent1.innerHTML = data.articles[1].content
  cardLink1.href = data.articles[1].url

  /* Card 3 */
  var cardImage1 = document.getElementById('card_img_3')
  var cardTitle1 = document.getElementById('card-3-title')
  var cardContent1 = document.getElementById('card-3-content')
  var cardLink1 = document.getElementById('card-3-link')

  cardImage1.src = data.articles[2].urlToImage
  cardTitle1.innerHTML = data.articles[2].title
  cardContent1.innerHTML = data.articles[2].content
  cardLink1.href = data.articles[2].url

  /* Card 4 */
  var cardImage1 = document.getElementById('card_img_4')
  var cardTitle1 = document.getElementById('card-4-title')
  var cardContent1 = document.getElementById('card-4-content')
  var cardLink1 = document.getElementById('card-4-link')

  cardImage1.src = data.articles[3].urlToImage
  cardTitle1.innerHTML = data.articles[3].title
  cardContent1.innerHTML = data.articles[3].content
  cardLink1.href = data.articles[3].url

  /* Card 5 */
  var cardImage1 = document.getElementById('card_img_5')
  var cardTitle1 = document.getElementById('card-5-title')
  var cardContent1 = document.getElementById('card-5-content')
  var cardLink1 = document.getElementById('card-5-link')

  cardImage1.src = data.articles[4].urlToImage
  cardTitle1.innerHTML = data.articles[4].title
  cardContent1.innerHTML = data.articles[4].content
  cardLink1.href = data.articles[4].url
}

function newsCardUpdatorV1(data) {
  var cardList = []

  for (let i=0; i<cardList.length; i++) {

  }
}

/////////////////////////////////
//            MAIN             //
/////////////////////////////////

function main() {
  getNewsAPI();
}

main()