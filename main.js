let key = '174be33436b5ac8a0340d573ab8f6d96';
let check_btn = document.getElementById('check_btn');
let url = 'https://api.openweathermap.org/data/2.5/forecast?q=Poznan&lang=pl&cnt=5&units=metric&appid=' + key; // test url


check_btn.onclick = function(){

console.log("test fetcha");
fetch(url).then(response => {
    return response.json();
})
.then(response => {
    console.log(response);
})
.catch(error => {
    console.log('error');
});
}