var countryInput = "";
var graphTypeInput = "";
var dataTypeInput = "";
var newsLink = "";
var newsAPIKey = "";
var submitEl = document.querySelector("#submit-form");
var params = {
  // update params object to change country
  country: "ca",
  q: "covid",
  include_similar: "true",
  // need to add date time getter
  // from: '2022-03-19',
  totalResults: "5",
  apiKey: "4c2773d12e684f40b1fe0aa0e6487e74",
};

var inputFormHandler = function () {
  // Get the user input values
  var country = document.querySelector("select[name='country']").value;
  var graphType = document.querySelector("select[name='graph-type']").value;
  var dataType = document.querySelector("select[name='data-type']").value;

  // Update global variables
  countryInput = country;
  graphTypeInput = graphType;
  dataTypeInput = dataType;

  // Save user input to local storage
  saveUserInput();

  // Update the displayed graph
  getSelectedGraph();
};

var createInputChoices = function () {
  // Create options for countries
  var countrySelectEl = document.querySelector("select[name='country']");
  var countryOptions = ["US", "Bangladesh", "Canada"];
  for (var i = 0; i < countryOptions.length; i++) {
    // Create option element
    var optionEl = document.createElement("option");
    optionEl.textContent = countryOptions[i];
    optionEl.setAttribute("value", countryOptions[i]);

    // Append to select
    countrySelectEl.appendChild(optionEl);
  }

  // Create options for graph type
  var graphTypeSelectEl = document.querySelector("select[name='graph-type']");
  var graphTypeOptions = [
    "Total Cases",
    "Total Confirmed Cases",
    "New Cases",
    "Key Metrics",
    "Covid-19 Details",
  ];
  for (var i = 0; i < graphTypeOptions.length; i++) {
    // Create option element
    var optionEl = document.createElement("option");
    optionEl.textContent = graphTypeOptions[i];
    optionEl.setAttribute("value", graphTypeOptions[i]);

    // Append to select
    graphTypeSelectEl.appendChild(optionEl);
  }

  // Create options for data type
  var dataTypeSelectEl = document.querySelector("select[name='data-type']");
  var dataTypeOptions = ["Cases", "Deaths"];
  for (var i = 0; i < dataTypeOptions.length; i++) {
    // Create option element
    var optionEl = document.createElement("option");
    optionEl.textContent = dataTypeOptions[i];
    optionEl.setAttribute("value", dataTypeOptions[i]);

    // Append to select
    dataTypeSelectEl.appendChild(optionEl);
  }
};

function getSelectedGraph() {
  if (graphTypeInput == "Total Confirmed Cases") {
    document.getElementById("graph-frame").src =
      "https://public.domo.com/cards/dwoBJ";
  } else if (graphTypeInput == "Total Cases") {
    document.getElementById("graph-frame").src =
      "https://public.domo.com/cards/dG1jy";
  } else if (graphTypeInput == "New Cases") {
    document.getElementById("graph-frame").src =
      "https://public.domo.com/cards/aKg4r";
  } else if (graphTypeInput == "Key Metrics") {
    document.getElementById("graph-frame").src =
      "https://public.domo.com/cards/aOm4g";
  } else if (graphTypeInput == "Covid-19 Details") {
    document.getElementById("graph-frame").src =
      "https://public.domo.com/cards/aOm4g";
  }
}

function getNewsAPI() {
  // demo api search
  // https://newsapi.org/v2/top-headlines?q=covid&include_similar=false&pageSize=5&from=2022-03-18&apiKey=4c2773d12e684f40b1fe0aa0e6487e74

  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map(function (k) {
      return esc(k) + "=" + esc(params[k]);
    })
    .join("&");

  fetch("https://newsapi.org/v2/everything?" + query, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .then((data) => {
      newsCardCreator(data);
    })
    .catch((error) => console.log("error", error));
}

function updateNews() {}

function newsCardUpdator(data) {
  /* BASIC CARDS */
  /* Card 1 */
  var cardImage1 = document.getElementById("card_img_1");
  var cardTitle1 = document.getElementById("card-1-title");
  var cardContent1 = document.getElementById("card-1-content");
  var cardLink1 = document.getElementById("card-1-link");

  cardImage1.src = data.articles[0].urlToImage;
  cardTitle1.innerHTML = data.articles[0].title;
  cardContent1.innerHTML = data.articles[0].content;
  cardLink1.href = data.articles[0].url;

  /* Card 2 */
  var cardImage1 = document.getElementById("card_img_2");
  var cardTitle1 = document.getElementById("card-2-title");
  var cardContent1 = document.getElementById("card-2-content");
  var cardLink1 = document.getElementById("card-2-link");

  cardImage1.src = data.articles[1].urlToImage;
  cardTitle1.innerHTML = data.articles[1].title;
  cardContent1.innerHTML = data.articles[1].content;
  cardLink1.href = data.articles[1].url;

  /* Card 3 */
  var cardImage1 = document.getElementById("card_img_3");
  var cardTitle1 = document.getElementById("card-3-title");
  var cardContent1 = document.getElementById("card-3-content");
  var cardLink1 = document.getElementById("card-3-link");

  cardImage1.src = data.articles[2].urlToImage;
  cardTitle1.innerHTML = data.articles[2].title;
  cardContent1.innerHTML = data.articles[2].content;
  cardLink1.href = data.articles[2].url;

  /* Card 4 */
  var cardImage1 = document.getElementById("card_img_4");
  var cardTitle1 = document.getElementById("card-4-title");
  var cardContent1 = document.getElementById("card-4-content");
  var cardLink1 = document.getElementById("card-4-link");

  cardImage1.src = data.articles[3].urlToImage;
  cardTitle1.innerHTML = data.articles[3].title;
  cardContent1.innerHTML = data.articles[3].content;
  cardLink1.href = data.articles[3].url;

  /* Card 5 */
  var cardImage1 = document.getElementById("card_img_5");
  var cardTitle1 = document.getElementById("card-5-title");
  var cardContent1 = document.getElementById("card-5-content");
  var cardLink1 = document.getElementById("card-5-link");

  cardImage1.src = data.articles[4].urlToImage;
  cardTitle1.innerHTML = data.articles[4].title;
  cardContent1.innerHTML = data.articles[4].content;
  cardLink1.href = data.articles[4].url;
}

function newsCardUpdatorV1(data) {
  var cardList = [];

  for (let i = 0; i < cardList.length; i++) {}
}

function newsCardCreator(data) {
  var cardTitle = document.getElementById("card_img_1");
}

var saveUserInput = function () {
  localStorage.setItem("country", JSON.stringify(countryInput));
  localStorage.setItem("graphType", JSON.stringify(graphTypeInput));
  localStorage.setItem("dataType", JSON.stringify(dataTypeInput));
};

var loadUserInput = function () {
  countryInput = localStorage.getItem("country");
  graphTypeInput = localStorage.getItem("graphType");
  dataTypeInput = localStorage.getItem("dataType");
};

submitEl.addEventListener("click", inputFormHandler);
//getNewsAPI();
loadUserInput();
createInputChoices();
getSelectedGraph();
