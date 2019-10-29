var ufos = data;
var tbody = d3.select("tbody");
var button = d3.select("#button_one");
var button_reset = d3.select("#button_reset");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterDate(date) {
  return date.datetime === d3.select("#date-input").property("value")
};

function filterCity(city) {
  return city.city === d3.select("#city-input").property("value");
}

function filterState(state) {
  return state.state === d3.select("#state-input").property("value");
}

function filterCountry(country) {
  return country.country === d3.select("#country-input").property("value");
}

function filterShape(shape) {
  return shape.shape === d3.select("#shape-input").property("value");
}

function allFilter() {
  var dateInput = d3.select("#date-input").property("value");
  var cityInput = d3.select("#city-input").property("value");
  var stateInput = d3.select("#state-input").property("value");
  var countryInput = d3.select("#country-input").property("value");
  var shapeInput = d3.select("#shape-input").property("value");
  var cityInput1 = cityInput.toString().toLowerCase();
  var stateInput1 = stateInput.toString().toLowerCase();
  var countryInput1 = countryInput.toString().toLowerCase();
  var shapeInput1 = shapeInput.toString().toLowerCase();
  let filteredData = ufos;
  if (dateInput!=="") {
    filteredData =  filteredData.filter(filterDate);
  }
  if (cityInput1 !== "") {
    filteredData =  filteredData.filter(filterCity);
  }
  if (stateInput1 !== "") {
    filteredData =  filteredData.filter(filterState);
  }
  if (countryInput1 !== "") {
    filteredData =  filteredData.filter(filterCountry);
  }
  if (shapeInput1 !== "") {
    filteredData =  filteredData.filter(filterShape);
  }
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    })
  })
};

function reset() {
  d3.select("#date-input").property("value", "");
  d3.select("#city-input").property("value", "");
  d3.select("#state-input").property("value", "");
  d3.select("#country-input").property("value", "");
  d3.select("#shape-input").property("value", "");
  d3.select(".summary").html("");
}

button.on("click", allFilter);
button_reset.on("click", reset);
