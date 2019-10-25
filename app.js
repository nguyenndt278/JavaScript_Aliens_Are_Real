var ufos = data;
var tbody= d3.select("tbody");
var button = d3.select("#button");

button.on("click", function() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);

  d3.event.preventDefault();

  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);
    });
  });

  var inputCity= d3.select("#city-input").property("value");
  var filteredCity= ufos.filter(ufo => ufo.city === inputCity);

  filteredCity.forEach((city) => {
    var row1=tbody.append("tr");
    Object.entries(city).forEach(([key, value]) => {
      var cell1=row1.append("td");
      cell1.text(value);
    });
  });


});

var date_only=d3.select("#choose_date");
date_only.on("click", function() {
  var inputValue = d3.select("#date-input").property("value");
  var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);

  d3.event.preventDefault();

  filteredData.forEach((data) => {
    var row=tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell=row.append("td");
      cell.text(value);
    });
  });


});