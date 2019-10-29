var jon= d3.select("#jon");
var charles= d3.select("#charles");
var none= d3.select("#none");
var security_pass=d3.select("#security_pass");
var submit= d3.select("#security_check");


function welcome_jon() {
    alert ("Hi Jon! How is it going? Welcome to our awesome UFO web!");
    d3.select("#security_pass").attr("type","password");
    d3.select("#security_check").attr("type","submit");
    d3.select(".text1").attr("style","display: incline");
    d3.select(".giphy-me").html("");
    submit.on("click", password_jon);
}

function welcome_charles() {
    alert ("Hello Charles! How is it going? Welcome to our awesome UFO web!");
    d3.select("#security_pass").attr("type","password");
    d3.select("#security_check").attr("type","submit");
    d3.select(".text1").attr("style","display: incline");
    d3.select(".giphy-me").html("");
    submit.on("click", password_charles);
}

function welcome_none() {
    alert ("Hello stranger!");
    d3.select(".giphy-me").html("<div class='container'><div class='row'><div class='col-md-12'><nav class='navbar navbar-expand-md bg-info navbar-dark'><a class='navbar-brand' href='index.html'>Home</a></nav></div></div></div><img class = 'img img-fluid' src='img_construction.png' alt 'Under construction'>");
}

function password_jon() {
    var pass_input=security_pass.property("value");
    var pass_jon= "coding";
    if (pass_input===pass_jon) {
        alert("Access granted!")
        d3.select("#security_pass").attr("type","hidden");
        d3.select("#security_check").attr("type","hidden");
        d3.select(".text1").attr("style","display: none");
        d3.select(".giphy-me").html("<div class='container aligns'><p>Click on <strong>'Filter by one factor'</strong> to filter UFO sighting report by either Date, City, State, Country, or Shape.</p><p>Click on <strong>'Filter by multiple factors'</strong> to check out reports that meet all five filters.</p><div class='container'><h2>Ready? Set, Go!</h2><div class='row'><div class='col-sm-6 bg-success center'><h2><a href='filter_single.html'>Filter by one factor</a></h2></div><div class='col-sm-6 bg-warning center'><h2><a href='filter_multiple.html'>Filter by multiple factors</a></h2></div></div></div></div>");}
    else {
        alert ("Opps! Wrong password. Hint: Fill in the blank: Jonathan is my name and ... is my game.");
        d3.select("#security_pass").property("value","");
    }
    }

function password_charles() {
    var pass_input=security_pass.property("value");
    var pass_charles= "dixon";
    if (pass_input===pass_charles) {
        alert("Access granted!")
        d3.select("#security_pass").attr("type","hidden");
        d3.select("#security_check").attr("type","hidden");
        d3.select(".text1").attr("style","display: none");
        d3.select(".giphy-me").html("<div class='container aligns'><p>Click on <strong>'Filter by one factor'</strong> to filter UFO sighting report by either Date, City, State, Country, or Shape.</p><p>Click on <strong>'Filter by multiple factors'</strong> to check out reports that meet all five filters.</p><div class='container'><h2>Ready? Set, Go!</h2><div class='row'><div class='col-sm-6 bg-success center'><h2><a href='filter_single.html'>Filter by one factor</a></h2></div><div class='col-sm-6 bg-warning center'><h2><a href='filter_multiple.html'>Filter by multiple factors</a></h2></div></div></div></div>");}
    else {
        alert ("Opps! Wrong password. Hint: This is your last name");
        d3.select("#security_pass").property("value","");
    }
    }
// function sendEmail () {
//     window.open('mailto:thaonguyenagribank@gmail.com?subject=subject&body=body');
// }

function e() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thaonguyenagribank@gmail.com",
        Password : "c143563f-201d-43fc-a909-7538b7877c0f",
        To : 'ndnguyenfdgs',
        From : "thaonguyenagribank@gmail.com",
        Subject : "subject text",
        Body : "body text"
    }).then(
    message => alert(message)
);}


jon.on("click", e);
charles.on("click", welcome_charles);
none.on("click", welcome_none);
// none.on("click", e);