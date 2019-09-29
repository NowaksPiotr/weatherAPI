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
        // FOR loop for creating tiles with forecast.
        for (let i = 1; i <= data.cnt; i++) {
            let 
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