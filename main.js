window.addEventListener('load', function (params) {

    const key = '174be33436b5ac8a0340d573ab8f6d96';
    const check_btn = document.getElementById('check_btn');

    check_btn.addEventListener('click', function (e) {
        let chosenCity = document.querySelector('.city__name__input').value ? document.querySelector('.city__name__input')
            .value : 'Poznań';
        let degrees = document.getElementById('temperature').value;
        let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + chosenCity + '&lang=pl&cnt=40&units=' + degrees
            + '&appid=' + key;
        fetchForecast(url, degrees);
    });

    function showResults(data, degrees) {
        if (data.cod === "200") {
            console.log('Works fine!');
            const currentWeather = document.getElementById('current__weather');

            while (currentWeather.firstChild) {
                currentWeather.removeChild(currentWeather.firstChild);
            }

            let degreeUnits = degreeUnit(degrees);
            let cityName = data.city.name;

            // ***** Creating HTML elements and setting their attributes for styling **** //

            let chosenCityElement = document.createElement('h2');
            chosenCityElement.setAttribute('class', 'chosen__city');

            let cityNameWrapperElement = document.createElement('div');
            cityNameWrapperElement.setAttribute('class', 'city__name__wrapper');

            let tempAndIconWrapperElement = document.createElement('div');
            tempAndIconWrapperElement.setAttribute('class', 'temp_and_icon_wrapper');

            let tempElement = document.createElement('p');
            tempElement.setAttribute('class', 'temp');

            let iconWrapperElement = document.createElement('div');
            iconWrapperElement.setAttribute('class', 'icon_wrapper');

            let iconImgElement = document.createElement('img');
            iconImgElement.setAttribute('class', 'icon');

            let humidityWrapperElement = document.createElement('div');
            humidityWrapperElement.setAttribute('class', 'humidity_wrapper');

            let humidityElement = document.createElement('p');
            humidityElement.setAttribute('class', 'humidity');

            let pressureWrapperElement = document.createElement('div');
            pressureWrapperElement.setAttribute('class', 'pressure_wrapper');

            let pressureElement = document.createElement('p');
            pressureElement.setAttribute('class', 'pressure');

            let minMaxTempWrapperElement = document.createElement('div');
            minMaxTempWrapperElement.setAttribute('class', 'tmax_and_tmin_wrapper');

            let innerMinMaxTempEl = document.createElement('div');
            innerMinMaxTempEl.setAttribute('class', 'inner_tmin_tmax_wrapper');

            let tMinElement = document.createElement('p');
            tMinElement.setAttribute('class', 'tmin');

            let tMaxElement = document.createElement('p');
            tMaxElement.setAttribute('class', 'tmax');

            let windSpeedWrapperElement = document.createElement('div');
            windSpeedWrapperElement.setAttribute('class', 'wind_speed_wrapper');

            let windSpeedElement = document.createElement('p');
            windSpeedElement.setAttribute('class', 'wind_speed');

            // ************************************************************************** //

            // ************** Adding fetched data to created HTML elements ************** //

            iconImgElement.setAttribute('src', 'assets/img/' + data.list[0].weather[0].icon + '.png');
            tempElement.innerHTML = data.list[0].main.temp + degreeUnits;
            humidityElement.innerHTML = 'humidity' + '<br>' + data.list[0].main.humidity + '%';
            tMinElement.innerHTML = 'min. temperature' + '<br>' + data.list[0].main.temp_min + degreeUnits;
            tMaxElement.innerHTML = 'max. temperature ' + '<br>' + data.list[0].main.temp_max + degreeUnits;
            pressureElement.innerHTML = data.list[0].main.pressure + ' hPa';
            windSpeedElement.innerHTML = 'Wind speed:' + '<br>' + data.list[0].wind.speed + ' km/h';

            // ******************** Printing data on screen ***************************** //

            currentWeather.append(cityNameWrapperElement);
            currentWeather.append(tempAndIconWrapperElement);
            currentWeather.append(humidityWrapperElement);
            currentWeather.append(minMaxTempWrapperElement);
            currentWeather.append(pressureWrapperElement);
            currentWeather.append(windSpeedWrapperElement);

            cityNameWrapperElement.append(chosenCityElement);
            chosenCityElement.append(cityName);

            tempAndIconWrapperElement.append(iconWrapperElement);
            iconWrapperElement.append(iconImgElement);
            tempAndIconWrapperElement.append(tempElement);

            humidityWrapperElement.append(humidityElement);

            minMaxTempWrapperElement.append(innerMinMaxTempEl);
            innerMinMaxTempEl.append(tMinElement);
            innerMinMaxTempEl.append(tMaxElement);

            pressureWrapperElement.append(pressureElement);

            windSpeedWrapperElement.append(windSpeedElement);

            // ************************************************************************** //
        }

    }

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
                showResults(fetchdata, degrees)
            })
            .catch(error => {
                alert('Something went wrong :( Try again!');
                console.log(error);
            });
    }

})