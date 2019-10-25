var ufos = data;
var tbody= d3.select("tbody");
var button = d3.select("#button");

function allFilter() {
  var dateInput = d3.select("#date-input").property("value");
  var cityInput = d3.select("#city-input").property("value");
  var stateInput = d3.select("#state-input").property("value");
  var countryInput = d3.select("#country-input").property("value");
  var shapeInput = d3.select("#shape-input").property("value");
  var filteredData = ufos.filter(ufo => 
    ufo.datetime === dateInput && 
    ufo.city === cityInput &&
    ufo.state === stateInput &&
    ufo.country === countryInput &&
    ufo.shape === shapeInput);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

button.on("click", allFilter);

