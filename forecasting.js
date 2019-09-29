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

        // FOR loop for creating tiles with forecast.
        if (data.cod === '200') {
            for (let i = 1; i < data.cnt; i++) {
                // Creating HTML elements for forecast
                // Creating wrappers for elements

                let tileWrapper = document.createElement('div');
                let dateAndHourWrapperElement = document.createElement('div');
                let detailsWrapper = document.createElement('div');

                // Creating elements to put in wrapper elements

                let dateAndHourElement = document.createElement('p');
                let iconImgElement = document.createElement('img');
                let tempElement = document.createElement('p');
                let humidityElement = document.createElement('p');
                let pressureElement = document.createElement('p');

                // Setting classes to the created elements

                tileWrapper.setAttribute('class', 'tile__wrapper');
                dateAndHourWrapperElement.setAttribute('class', 'dAh__wrapper');
                detailsWrapper.setAttribute('class', 'details__wrapper');
                dateAndHourElement.setAttribute('class', 'dAh__element');
                iconImgElement.setAttribute('class', 'icon');
                console.log(data.list[i].weather[0].icon);
                // iconImgElement.setAttribute('src', 'assets/img/' + data.list[i].weather[0].icon + '.png');
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