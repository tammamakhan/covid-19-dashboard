var countryInput, graphTypeInput, dataTypeInput, newsAPIKey, newsLink

var newsURL = `https://newsapi.org/v2/everything?q=covid&from=2022-03-18&apiKey=${newsAPIKey}`


/////////////////////////////////
//           NEWS API          //
/////////////////////////////////

function getNewsAPI() {
  var newsAPIKey = "4c2773d12e684f40b1fe0aa0e6487e74"

  fetch (newsURL)
    .then(response => {
      response.json()
    })
    .then(data=>{

    }) 
}

function updateNews() {

}

function writeNews() {

}