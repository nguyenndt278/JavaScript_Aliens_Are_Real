var jon= d3.select("#jon");
var charles= d3.select("#charles");
var none= d3.select("#none");

function welcome_jon() {
    alert ("Hello Jon! How is it going? Welcome to our awesome UFO web!");
    d3.select(".giphy-me").html("<p>Click on <strong>'Filter by one factor'</strong> to filter UFO sighting report by either Date, City, State, Country, or Shape.</p><p>Click on <strong>'Filter by multiple factors'</strong> to check out reports that meet all five filters.</p><div class='container'><h2>Ready? Set, Go!</h2><div class='row'><div class='col-sm-6 bg-success center'><h2><a href='filter_single.html'>Filter by one factor</a></h2></div><div class='col-sm-6 bg-warning center'><h2><a href='filter_multiple.html'>Filter by multiple factors</a></h2></div></div></div>");
}

function welcome_charles() {
    alert ("Hi Charles! How is it going? Welcome to our awesome UFO web!");
    d3.select(".giphy-me").html("<p>Click on <strong>'Filter by one factor'</strong> to filter UFO sighting report by either Date, City, State, Country, or Shape.</p><p>Click on <strong>'Filter by multiple factors'</strong> to check out reports that meet all five filters.</p><div class='container'><h2>Ready? Set, Go!</h2><div class='row'><div class='col-sm-6 bg-success center'><h2><a href='filter_single.html'>Filter by one factor</a></h2></div><div class='col-sm-6 bg-warning center'><h2><a href='filter_multiple.html'>Filter by multiple factors</a></h2></div></div></div>");
}

function welcome_none() {
    alert ("Hello stranger!");
    d3.select(".giphy-me").html("<img src='construction.png' alt 'Under construction'>");
}

jon.on("click", welcome_jon);
charles.on("click", welcome_charles);
none.on("click", welcome_none);