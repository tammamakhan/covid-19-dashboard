var countryInput = "";
var graphTypeInput = "";
var dataTypeInput = "";
var newsAPIKey = "";
var newsLink = "";

var submitEl = document.querySelector("#submit-form");

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
};

/////////////////////////////////
//           NEWS API          //
/////////////////////////////////

function getNewsAPI() {
  var requestOptions = {
    method: "GET",
  };

  var params = {
    q: "covid",
    pageSize: "5",
    // apiKey: '4c2773d12e684f40b1fe0aa0e6487e74'
  };

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

function newsCardCreator(data) {
  var cardTitle = document.getElementById("card_img_1");
}

var saveUserInput = function () {
  localStorage.setItem("country", JSON.stringify(countryInput));
  localStorage.setItem("graphType", JSON.stringify(graphTypeInput));
  localStorage.setItem("dataType", JSON.stringify(dataTypeInput));
};

var loadUserInput = function () {
  var savedCountry = localStorage.getItem("country");
  var savedGraphType = localStorage.getItem("graphType");
  var savedDataType = localStorage.getItem("dataType");
};

submitEl.addEventListener("click", inputFormHandler);
getNewsAPI();
loadUserInput();
