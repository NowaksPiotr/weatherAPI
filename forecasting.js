window.addEventListener('load', function (params) {
    // In local storage there is url with current search. Key is 'url' 
    const localStorageUrl = localStorage.getItem('url');
    const tilesContainer = document.querySelector('.forecast__tiles');

    function showForecast(fetchdata) {
        let data = fetchdata;

        while (tilesContainer.firstChild) {
            tilesContainer.removeChild(tilesContainer.firstChild);
        }
        // Creating city name bar
        let cityNameWrapperElement = document.createElement('div');
        cityNameWrapperElement.setAttribute('class', 'city__name__wrapper');

        let chosenCityElement = document.createElement('h2');
        chosenCityElement.setAttribute('class', 'chosen__city');

        let cityName = data.city.name;

        chosenCityElement.innerHTML = cityName;

        tilesContainer.append(cityNameWrapperElement);
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

                // Setting classes and attributes to the created elements

                tileWrapper.setAttribute('class', 'tile__wrappers');
                dateAndHourWrapperElement.setAttribute('class', 'dAh__wrappers');
                detailsWrapper.setAttribute('class', 'details__wrappers');
                dateAndHourElement.setAttribute('class', 'dAh__elements');
                iconImgElement.setAttribute('class', 'icon');
                tempElement.setAttribute('class', 'temp__elements');
                humidityElement.setAttribute('class', 'humidity__elements');
                pressureElement.setAttribute('class', 'pressure_elements');

                // Ceiling temperatures

                let tempCeiled = Math.ceil(data.list[i].main.temp);

                // Adding data to created elements

                dateAndHourElement.innerHTML = data.list[i].dt_txt;
                iconImgElement.setAttribute('src', 'assets/img/' + data.list[i].weather[0].icon + '.png');
                tempElement.innerHTML = tempCeiled;
                pressureElement.innerHTML = data.list[i].main.pressure + 'hPa';
                humidityElement.innerHTML = data.list[i].main.humidity + '%';

                // Printing data on screen

                tilesContainer.append(tileWrapper);
                tilesContainer.append(dateAndHourWrapperElement);
                tilesContainer.append(detailsWrapper);

                dateAndHourWrapperElement.append(dateAndHourElement);
                detailsWrapper.append(iconImgElement);
                detailsWrapper.append(tempElement);
                detailsWrapper.append(pressureElement);
                detailsWrapper.append(humidityElement);
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