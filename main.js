const key = '174be33436b5ac8a0340d573ab8f6d96';
const check_btn = document.getElementById('check_btn');

check_btn.addEventListener('click', function (e) {
    let chosenCity = document.querySelector('.city__name__input').value ? document.querySelector('.city__name__input')
    .value : 'Poznań';
    let degrees = document.getElementById('temperature').value;
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + chosenCity + '&lang=pl&cnt=40&units=' + degrees 
    + '&appid=' + key;
    console.log(url);
    fetchForecast(url, degrees);
});

function showResults(data, degrees) {
    if (data.cod === "200") {
        console.log('Works fine!');
        let currentWeather = document.getElementById('current__weather');

        while(currentWeather.firstChild){
            currentWeather.removeChild(currentWeather.firstChild);
        }
        let degreeUnits = degreeUnit(degrees);
        let chosenCity = document.getElementById('chosen__city');
        let cityName = data.city.name;
        
        chosenCity.append(cityName);

    }

}

function degreeUnit(degrees){
    switch(degrees){
        case 'metric':
            return '°C';
            break;
        case 'imperial':
            return '°F';
            break;
    }
}


function fetchForecast(url, degrees) {
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(function (fetchdata) {
            showResults(fetchdata, degrees)
        })
        .catch(error => {
            alert('Something went wrong :( Try again!');
            console.log(error);
        });
}