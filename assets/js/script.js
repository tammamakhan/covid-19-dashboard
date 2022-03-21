var countryInput = "";
var graphTypeInput = "";
var dataTypeInput = "";
var newsLink = "";
var newsAPIKey = "";
var submitEl = document.querySelector("#submit-form");
var params = {
  // update params object to change country
  country: "us",
  q: "covid",
  include_similar: "true",
  apiKey: "4c2773d12e684f40b1fe0aa0e6487e74",
};

var countryISO = [
  {
    name: 'United States',
    iso: 'us'
  },
  {
    name: 'Canada',
    iso: 'ca'
  },
  {
    name: 'United Kingdom',
    iso: 'uk'
  },
  {
    name: 'Argentina',
    iso: 'ar'
  },
  {
    name: 'South Korea',
    iso: 'kr'
  },
]

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
  for (var i = 0; i < countryISO.length; i++) {
    // Create option element
    var optionEl = document.createElement("option");
    optionEl.textContent = countryISO[i].name;
    optionEl.setAttribute("value", countryISO[i].name);

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

// function to update news location based on search
function updateCountryNews() {
  countryISO.
    filter(function(item){ 
    return item.name === document.querySelector("select[name='country']").value; 
    }).
    map(function(item){
      params.country = item.iso;
    });
  console.log(params)
  newsReset()
  getNewsAPI()
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

  fetch("https://newsapi.org/v2/top-headlines?" + query)
    .then((response) => response.json())
    .then((data) => {
      newsCardCreator(data);
    })
    .catch((error) => console.log("error", error));
}


function newsCardCreator(data) {
  var cardCount = data.totalResults;
  var card_container = document.getElementById("cards");

  for (let i = 0; i < cardCount; i++) {
    // Card Image
    var card_div = document.createElement("div");
    card_div.classList.add("card", "p-1", "m-2");
    card_container.append(card_div);

    var card_div_figure = document.createElement("div");
    card_div_figure.classList.add("card-image");
    card_div.append(card_div_figure);

    var card_figure = document.createElement("feature");
    card_figure.classList.add("image", "is-4by3");
    card_div_figure.append(card_figure);

    var card_image = document.createElement("img");
    card_image.src = data.articles[i].urlToImage;
    card_figure.appendChild(card_image);

    // Card Titles and Content
    var card_content_div = document.createElement("div");
    card_content_div.classList.add("card-content");
    card_div.append(card_content_div);

    var card_media_div = document.createElement("div");
    card_media_div.classList.add("media");
    card_content_div.append(card_media_div);

    var card_media_content_div = document.createElement("div");
    card_media_content_div.classList.add("media-content");
    card_media_div.append(card_media_content_div);

    var card_title_p = document.createElement("p");
    card_title_p.classList.add("title", "is-4");
    card_title_p.innerHTML = data.articles[i].title;
    card_media_content_div.append(card_title_p);

    var card_subtitle_p = document.createElement("p");
    card_subtitle_p.classList.add("subtitle", "is-6");
    card_subtitle_p.innerHTML = `<strong>${data.articles[i].source.name}</strong>`;
    card_media_content_div.append(card_subtitle_p);

    var card_content_text_div = document.createElement("div");
    card_content_text_div.classList.add("content");
    card_content_text_div.innerHTML = `Author: <em>${data.articles[i].author}</em></br>${data.articles[i].description}</br>`;
    card_content_div.append(card_content_text_div);

    var card_time = document.createElement("time");
    card_time.innerHTML = `</br>Published On: ${data.articles[i].publishedAt}`;
    card_content_text_div.append(card_time);

    // Card Footer Content
    var card_footer = document.createElement("footer");
    card_footer.classList.add("card-footer-item");
    card_content_div.append(card_footer);

    var card_link_a = document.createElement("a");
    card_link_a.innerHTML = "View Article";
    card_link_a.target = "_blank";
    card_link_a.href = data.articles[i].url;
    card_footer.append(card_link_a);
  }
}

function newsReset() {
  var card_container = document.getElementById("cards");
  while (card_container.lastElementChild) {
    card_container.removeChild(card_container.lastElementChild)
  }

  var card_main = document.getElementById('card-container')
  card_container.classList.add('column', 'is-desktop', 'p-1')
  card_container.id = "cards"
  card_main.append(card_container)
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

submitEl.addEventListener("click", () => {
  inputFormHandler
});

document.querySelector("select[name='country']").addEventListener('change', function() {
  updateCountryNews();
})
getNewsAPI();
loadUserInput();
createInputChoices();
getSelectedGraph();
