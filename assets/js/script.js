var countryInput, graphTypeInput, dataTypeInput, newsAPIKey, newsLink


/////////////////////////////////
//           NEWS API          //
/////////////////////////////////
/* 
Top Headline API Country Parameters for selection: (in URL)
https://newsapi.org/docs/endpoints/top-headlines
*/
var params = {
  // update params object to change country
  country: "us",
  q: 'covid',
  // totalResults: "5",
  apiKey: '4c2773d12e684f40b1fe0aa0e6487e74'
};

function getNewsAPI() {

  // demo api search 
  // https://newsapi.org/v2/top-headlines?q=covid&include_similar=false&pageSize=5&from=2022-03-18&apiKey=4c2773d12e684f40b1fe0aa0e6487e74

  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');
  
  fetch("https://newsapi.org/v2/top-headlines?" + query)
    .then(response => response.json())
    .then(data => {
      newsCardUpdator(data);
  })
  .catch(error => console.log('error', error));
}


function newsCardUpdator(data) {
  newsCardCreator(data)
}

function newsCardCreator(data) {
  var cardCount = data.totalResults
  var card_container = document.getElementById('cards')

  for (let i=0; i<cardCount; i++) {

    // Card Image
    var card_div = document.createElement('div')
    card_div.classList.add('card','p-1','m-2')
    card_container.append(card_div)

    var card_div_figure = document.createElement('div')
    card_div_figure.classList.add('card-image')
    card_div.append(card_div_figure)

    var card_figure = document.createElement('figure')
    card_figure.classList.add('image', 'is-4by3')
    card_div_figure.append('card_figure')

    var card_image = document.createElement('img')
    card_image.src = data.articles[i].urlToImage
    card_figure.append(card_image)

    // Card Titles and Content
    var card_content_div = document.createElement('div')
    card_content_div.classList.add('card-content')
    card_div.append(card_content_div)

    var card_media_div = document.createElement('div')
    card_media_div.classList.add('media')
    card_content_div.append(card_media_div)

    var card_media_content_div = document.createElement('div')
    card_media_content_div.classList.add('media-content')
    card_media_div.append(card_media_content_div)

    var card_title_p = document.createElement('p')
    card_title_p.classList.add('title', 'is-4')
    card_title_p.innerHTML = data.articles[i].title
    card_media_content_div.append(card_title_p)

    var card_subtitle_p = document.createElement('p')
    card_subtitle_p.classList.add('subtitle', 'is-6')
    card_subtitle_p.innerHTML = `<strong>${data.articles[i].source.name}</strong>`
    card_media_content_div.append(card_subtitle_p)

    var card_content_text_div = document.createElement('div')
    card_content_text_div.classList.add('content')
    card_content_text_div.innerHTML = `Author: <em>${data.articles[i].author}</em></br>${data.articles[i].description}</br>`
    card_content_div.append(card_content_text_div)

    var card_time = document.createElement('time')
    card_time.innerHTML = `</br>Published On: ${data.articles[i].publishedAt}`
    card_content_text_div.append(card_time)

    // Card Footer Content
    var card_footer = document.createElement('footer')
    card_footer.classList.add('card-footer-item')
    card_content_div.append(card_footer)

    var card_link_a = document.createElement('a')
    card_link_a.innerHTML = "Link"
    card_link_a.target = "_blank"
    card_link_a.href = data.articles[i].url
    card_footer.append(card_link_a)
  }

}

/////////////////////////////////
//            MAIN             //
/////////////////////////////////

function main() {
  getNewsAPI();
}

main()