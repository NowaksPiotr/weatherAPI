window.addEventListener('load', function (params) {
    // In local storage there is url with current search. Key is 'url' 
    const localStorageUrl = localStorage.getItem('url');
    const tilesContainer = document.querySelector('.forecast__tiles');

    function showForecast(fetchdata) {
        const resultsSection = document.querySelector('.forecast__tiles');
        let data = fetchdata;

        while (resultsSection.firstChild) {
            resultsSection.removeChild(resultsSection.firstChild);
        }
        // Creating city name bar
        let cityNameWrapperElement = document.createElement('div');
        cityNameWrapperElement.setAttribute('class', 'city__name__wrapper');

        let chosenCityElement = document.createElement('h2');
        chosenCityElement.setAttribute('class', 'chosen__city');

        let cityName = data.city.name;

        chosenCityElement.innerHTML = cityName;

        resultsSection.append(cityNameWrapperElement);
        cityNameWrapperElement.append(chosenCityElement);


        if (data.cod === '200') {
            // FOR loop for creating tiles with forecast.
            for (let i = 1; i <= data.cnt; i++) {

            }

        }
    }

    function fetchForecast(url) {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(function (fetchdata) {
                showForecast(fetchdata)
            })
            .catch(error => {
                alert('Something went wrong :( Hope that it is sunny!');
                console.log(error);
            });
    }
    fetchForecast(localStorageUrl);
})