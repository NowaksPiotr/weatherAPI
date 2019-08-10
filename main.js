const key = '174be33436b5ac8a0340d573ab8f6d96';

const check_btn = document.getElementById('check_btn');

check_btn.addEventListener('click', function(e){
    let chosenCity = document.querySelector('.city__name__input').value ? document.querySelector('.city__name__input').value : 'Dziala';
})
// let url = 'https://api.openweathermap.org/data/2.5/forecast?q=Poznan&lang=pl&cnt=5&units=metric&appid=' + key; // test url


// check_btn.onclick = function () {
//     fetch(url).then(response => {
//         return response.json();
//     })
//         .then(response => {
//             console.log(response);
//         })
//         .catch(error => {
//             console.log('error');
//         });
// }