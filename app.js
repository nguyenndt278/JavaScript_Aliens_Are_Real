var ufos = data;
var tbody= d3.select("tbody");
var button = d3.select("#button_one");
var button_reset=d3.select("#button_reset");
var select_date=d3.select("#select-date");
var select_city=d3.select("#select-city");
var select_state=d3.select("#select-state");
var select_country=d3.select("#select-country");
var select_shape=d3.select("#select-shape");

function capitalize(string) {
  return charAt(0).toUpperCase() + string.slice(1);
}

function dateFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
  d3.event.preventDefault();
  var list = d3.select(".summary");
  list.html("");
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})}

function cityFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var inputValue1=inputValue.toString().toLowerCase();
  var filteredData = ufos.filter(ufo => ufo.city === inputValue1);
  d3.event.preventDefault();
  var list = d3.select(".summary");
  list.html("");
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

function stateFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var inputValue1=inputValue.toString().toLowerCase();
  var filteredData = ufos.filter(ufo => ufo.state === inputValue1);
  d3.event.preventDefault();
  var list = d3.select(".summary");
  list.html("");
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

function countryFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var inputValue1=inputValue.toString().toLowerCase();
  var filteredData = ufos.filter(ufo => ufo.country === inputValue1);
  d3.event.preventDefault();
  var list = d3.select(".summary");
  list.html("");
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

function shapeFilter() {
  var inputValue = d3.select("#date-input").property("value");
  var inputValue1=inputValue.toString().toLowerCase();
  var filteredData = ufos.filter(ufo => ufo.shape === inputValue1);
  d3.event.preventDefault();
  var list = d3.select(".summary");
  list.html("");
  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);})})};

function reset()  {
  d3.select("#date-input").property("value","");
  d3.select(".summary").html("");
};

select_date.on("click", function(){
  d3.select(".summary").html("");
  button.on("click", dateFilter);
  d3.select("h5").text("Filter by Date");
  d3.select(".form-control").attr("placeholder", "1/1/2010");
  d3.select("#date-input").property("value", "");
});

select_city.on("click", function(){
  d3.select(".summary").html("");
  button.on("click", cityFilter);
  d3.select("h5").text("Filter by City");
  d3.select(".form-control").attr("placeholder", "benton");
  d3.select("#date-input").property("value", "");
});

select_state.on("click", function(){
  d3.select(".summary").html("");
  button.on("click", stateFilter);
  d3.select("h5").text("Filter by State");
  d3.select(".form-control").attr("placeholder", "ar");
  d3.select("#date-input").property("value", "");
});

select_country.on("click", function(){
  d3.select(".summary").html("");
  button.on("click", countryFilter);
  d3.select("h5").text("Filter by Country");
  d3.select(".form-control").attr("placeholder", "us");
  d3.select("#date-input").property("value", "");
});

select_shape.on("click", function(){
  d3.select(".summary").html("");
  button.on("click", shapeFilter);
  d3.select("h5").text("Filter by Shape");
  d3.select(".form-control").attr("placeholder", "circle");
  d3.select("#date-input").property("value", "");
});

button_reset.on("click", reset);
