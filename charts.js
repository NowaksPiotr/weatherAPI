window.addEventListener('load', function (params) {

    // In local storage there is url with current search. Key is 'url' 
    const localStorageUrl = localStorage.getItem('url');
    const key = '174be33436b5ac8a0340d573ab8f6d96';
    const check_btn = document.getElementById('check_btn');
    const forecastCount = 40;

    check_btn.addEventListener('click', function (e) {
        let chosenCity = document.querySelector('.city__name__input').value ? document.querySelector('.city__name__input')
            .value : 'Poznań';
        let degrees = document.getElementById('temperature').value;
        let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + chosenCity + '&lang=pl&cnt=' +
            forecastCount + '&units=' + degrees + '&appid=' + key;
        fetchForecast(url, degrees);
    });

    function degreeUnit(degrees) {
        switch (degrees) {
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
                console.log(fetchdata);
            })
            .catch(error => {
                alert('Something went wrong :( Hope that it is sunny!');
                console.log(error);
            });
    }



    if (localStorage.length != 0) {
        fetchForecast(localStorageUrl);
    }
    // CHARTS.JS below **************************************************************//


    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ['Chujary', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // Configuration options go here
        options: {}
    });
})