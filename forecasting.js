window.addEventListener('load', function(params){
    const localStorageUrl = localStorage.getItem('url');
    console.log(localStorageUrl);


    function fetchForecast(url, degrees) {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(function (fetchdata) {
                showResults(fetchdata, degrees, url)
            })
            .catch(error => {
                alert('Something went wrong :( Hope that it is sunny!');
                console.log(error);
            });
    }
})