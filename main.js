const dogButton = document.querySelector('#random-dog');
const image = document.querySelector('#dog-image');
let imageSrc = null;

const dogGet = function (source) { image.src = source };

fetch('https://dog.ceo/api/breeds/image/random')

    .then(function (rawData) { return rawData.json(); })

    .then(function (data) { imageSrc = (data.message); })

    .then(function () { dogGet(imageSrc); });


dogButton.addEventListener("click", function () {

    fetch('https://dog.ceo/api/breeds/image/random')

        .then(function (rawData) { return rawData.json(); })


        .then(function (data) { imageSrc = (data.message); })


        .then(function () { dogGet(imageSrc); });

});

const city = document.querySelector('#city').value
const weatherButton = document.querySelector('#weather-button');
const tempText = document.querySelector('.temp');
const windText = document.querySelector('.wind');
const descText = document.querySelector('.description');


const tempFunction = function (info) { tempText.textContent = 'Temperature: ' + info };
const windFunction = function (info) { windText.textContent = 'Wind: ' + info };
const descFunction = function (info) { descText.textContent = 'Description: ' + info };

// const wind = 'Wind: '
// const description = 'Description: '


weatherButton.addEventListener("click", function () {

    fetch('https://goweather.herokuapp.com/weather/ ${city}')

        .then(function (rawData) { return rawData.json(); })

        .then(function (data) { 
            tempData = (data.temperature);
            windData = (data.wind);
            descData = (data.description);
            
        })

        .then(function () { tempFunction(tempData); })

        .then(function () { windFunction(windData); })

        .then(function () { descFunction(descData); });

});