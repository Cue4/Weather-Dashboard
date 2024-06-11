
const submitEl = document.querySelector('#submit');
const weatherInfoDiv = document.getElementById("weather-info");
const apiKey = `7ff58370abe33390e3138197fc8cbbc9`;

function showResponse(event) {
    event.preventDefault();
    console.log(event);
  }

submitEl.addEventListener("click", () => {
    const searchElement = document.querySelector('#info-input').value;
    console.log("Search button clicked!");
    console.log(searchElement);
    getGeoData(searchElement)
});

function getGeoData(city) {
    const requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data[0])

        let lon = data[0].lon
        let lat = data[0].lat
        getWeatherData(lat, lon)
            // updateWeatherInfo(data);
            // updateSearchHistory(city);
        })
        .catch(function(error) {
            console.log(error);
        });
}      
function getWeatherData(lat, lon){
    const searchRequestUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`

    fetch(searchRequestUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error){
        console.log(error);
    })
}

// getWeatherData()

// const city = document.getElementById("weather-info");
// city.textContent = weatherInfoDiv.city;
// weatherInfoDiv.appendChild(searchElement);

// Loop through the weather forecast data and create elements for each forecast
// weatherInfoDiv.(forecast => {
//     const forecastDiv = document.getElementsByClassName('box box-daily');
//     forecastDiv.textContent = `Date: ${forecast.dt_txt}, Temperature: ${forecast.main.temp}`;
//     weatherInfoDiv.appendChild(forecastDiv);
// });

// function updateWeatherInfo(data) {
//     weatherInfoDiv.innerHTML = `
//         Weather in ${data.name}
//         Temperature: ${data.main.temp}°C
//         Conditions: ${data.weather[0].description}
//     `;

            
//         for(const weather of data) {
//             const createTableRow = document.createElement('tr');
//             const tableData = document.createElement('td');
//             const link = document.createElement('a');

//         // link.textContent = repo.html_url;
//         // link.href = repo.html_url;

//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//     }
        // getApi()
    
    

    // function updateSearchHistory(city) {
    //     let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    //     searchHistory.push(city);
    //     localStorage.setItem('searchHistory', JSON.stringify(searchHistory)); 
    //     // updateSearchHistory();
    //     displaySearchHistory();
    // }

    // function displaySearchHistory() {
    //     const searchHistoryContainer = document.getElementById('search-history');
    //     let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        
    //     // searchHistoryContainer.innerHTML = '<h2>RESULTS</h2>';
    //     // searchHistoryContainer.innerHTML = '<h3>5-Day Forcast'
    //     searchHistoryContainer.innerHTML += '<ul>' + searchHistory.map(city => `<li>${city}</li>`).join('') + '</ul>';
    // }
    // displaySearchHistory();

    // submitEl.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     const weather = document.querySelector("#info-input").value;
    //     searchElement();
    // });

