const searchElement = document.querySelector('#info-input')
const submitEl = document.querySelector('#submit')
const apiKey = "7ff58370abe33390e3138197fc8cbbc9";

function showResponse(event) {
    event.preventDefault();
    console.log(event);
  }

submitEl.addEventListener("click", () => {
    console.log("Search button clicked!");
});

function getApi() {
    const requestUrl = 'https://api.openweathermap.org';

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        });
            
        for(const reop of data) {
            const createTableRow = document.createElement('tr');
            const tableData = document.createElement('td');
            const link = document.createElement('a');

        link.textContent = repo.html_url;
        link.href = repo.html_url;

        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
        })
    }
    

    function updateSearchHistory() {
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        searchHistory.push();
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory)); 
        displaySearchHistory();
    }

    function displaySearchHistory() {
        const searchHistoryContainer = document.getElementById('search-history');
        let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
        
        searchHistoryContainer.innerHTML = '<h2>Search For A City:</h2>';
        searchHistoryContainer.innerHTML += '<ul>' + searchHistory.map( weather=> `<li>${cities}</li>`).join('') + '</ul>';
    }

    submitEl.addEventListener("click", function (event) {
        event.preventDefault();
        const weather = document.querySelector("#info-input").value;
        searchElement();
    });

   
    displaySearchHistory();
