var ufos = data;
var tbody= d3.select("tbody");
var button = d3.select("#button");
var select_date=d3.select("#select-date");
var select_city=d3.select("#select-city");
var select_state=d3.select("#select-state");
var select_country=d3.select("#select-country");
var select_shape=d3.select("#select-shape");

function dateFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

function cityFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.city === inputValue);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

function stateFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.state === inputValue);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

function countryFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.country === inputValue);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

function shapeFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.shape === inputValue);
  d3.event.preventDefault();
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

// var a1= d3.select(".form-control").attr("placeholder");
// console.log(a1);

// var a2= d3.select("label").text();
// console.log(a2);


select_date.on("click", function(){
  button.on("click", dateFilter);
  d3.select("label").text("Filtered by Date");
  d3.select(".form-control").attr("placeholder", "1/10/2010");
});

select_city.on("click", function(){
  button.on("click", cityFilter);
  d3.select("label").text("Filtered by City");
  d3.select(".form-control").attr("placeholder", "benton");
});

select_state.on("click", function(){
  button.on("click", stateFilter);
  d3.select("label").text("Filtered by State");
  d3.select(".form-control").attr("placeholder", "ar");
});

select_country.on("click", function(){
  button.on("click", countryFilter);
  d3.select("label").text("Filtered by Country");
  d3.select(".form-control").attr("placeholder", "us");
});

select_shape.on("click", function(){
  button.on("click", shapeFilter);
  d3.select("label").text("Filtered by Shape");
  d3.select(".form-control").attr("placeholder", "circle");
});
