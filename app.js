var ufos = data;
var tbody= d3.select("tbody");
var button = d3.select("#button_one");
var select_date=d3.select("#select-date");
var select_city=d3.select("#select-city");
var select_state=d3.select("#select-state");
var select_country=d3.select("#select-country");
var select_shape=d3.select("#select-shape");

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function dateFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      var value_date= capitalize(value)
      cell.text(value_date);})})};

function cityFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var inputValue1=inputValue.toString().toLowerCase();
  var filteredData = ufos.filter(ufo => ufo.city === inputValue1);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      var value_city= capitalize(value)
      cell.text(value_city);})})};

function stateFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var inputValue1=inputValue.toString().toLowerCase();
  var filteredData = ufos.filter(ufo => ufo.state === inputValue1);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      var value_state= capitalize(value)
      cell.text(value_state);})})};

function countryFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var inputValue1=inputValue.toString().toLowerCase();
  var filteredData = ufos.filter(ufo => ufo.country === inputValue1);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      var value_country= capitalize(value)
      cell.text(value_country);})})};

function shapeFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var inputValue1=inputValue.toString().toLowerCase();
  var filteredData = ufos.filter(ufo => ufo.shape === inputValue1);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      var value_shape= capitalize(value)
      cell.text(value_shape);})})};

// var a1= d3.select(".form-control").attr("placeholder");
// console.log(a1);

// var a2= d3.select("label").text();
// console.log(a2);


select_date.on("click", function(){
  button.on("click", dateFilter);
  d3.select("h5").text("Filter by Date");
  d3.select(".form-control").attr("placeholder", "1/10/2010");
});

select_city.on("click", function(){
  button.on("click", cityFilter);
  d3.select("h5").text("Filter by City");
  d3.select(".form-control").attr("placeholder", "benton");
});

select_state.on("click", function(){
  button.on("click", stateFilter);
  d3.select("h5").text("Filter by State");
  d3.select(".form-control").attr("placeholder", "ar");
});

select_country.on("click", function(){
  button.on("click", countryFilter);
  d3.select("h5").text("Filter by Country");
  d3.select(".form-control").attr("placeholder", "us");
});

select_shape.on("click", function(){
  button.on("click", shapeFilter);
  d3.select("h5").text("Filter by Shape");
  d3.select(".form-control").attr("placeholder", "circle");
});
