

fetch("https://covid19.mathdro.id/api/deaths")
  .then((response) => response.json())
  .then((data) => {
     const countriesSelectElement = document.getElementById('countries');
     
     // remove duplicates and sort alphabetically
     const uniqueCountries =  data.map(r => r.countryRegion).filter((value, index, arr) => arr.indexOf(value) === index).sort((a,b) => a > b ? 1 : -1);
     countriesSelectElement.innerHTML += uniqueCountries.map(c => `<option value=${c}>${c}</option>`).join('');
    

     document.getElementById('search-form').addEventListener('submit', event => {
      event.preventDefault();
      const selectedCountry = document.getElementById('countries');
      const selectedDataType = document.getElementById('dataType');
      /*const dataTypes = {
         cases: 'confirmed',
         deaths: 'deaths'
      }*/
      //const globalDeathCases = data.reduce((accumulator, item) => accumulator + item[dataTypes[selectedDataType.value]], 0);
      // const countryDeathCases = filteredData.reduce((a,b) => a + b[dataTypes[selectedDataType.value]], 0);

      let globalDeathCases = 0;
      data.forEach(item => {
         if (selectedDataType.value === 'cases') {
            globalDeathCases += item.confirmed;
         } else {
            globalDeathCases += item.deaths;
         } 
      });

      const filteredData = data.filter(r => r.countryRegion === selectedCountry.value);
      let countryDeathCases = 0;
      filteredData.forEach(item => {
         if (selectedDataType.value === 'cases') {
            countryDeathCases += item.confirmed;
         } else {
            countryDeathCases += item.deaths;
         } 
      });
      
      document.getElementById('globalCases').innerText = globalDeathCases;
      document.getElementById('countryCases').innerText = countryDeathCases;
     });




  })
  .catch((err) => {
    console.log("errr==>>", err);
  });
