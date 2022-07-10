const url = "https://api.covid19api.com/summary";
var data;
fetchData();
function fetchData() {
    fetch(url).then((res) => res.json()).then((data) => { this.data = data; list(); getData() }).catch((error) => console.log(error.message));
}

function list() {
    var c = 0;
    var l = document.getElementById("country");
    for (let i of data.Countries) {
        var a = document.createElement("option");
        a.value = c++;
        a.textContent = i.Country;
        l.appendChild(a);
        if (a.textContent == "India") {
            a.selected = true;
        }
    }
}

function getData() {
    var s = data.Countries[document.getElementById("country").value];
    document.getElementById("country-name").textContent = s.Country;
    document.getElementById("date").textContent = new Date().toDateString();
    document.getElementById("totalCases").textContent = s.TotalConfirmed;
    document.getElementById("totalDeaths").textContent = s.TotalDeaths;
    document.getElementById("newCase").textContent = s.NewConfirmed;
    document.getElementById("newDeaths").textContent = s.NewDeaths;
    document.getElementById("today").textContent = new Date().toDateString();
}