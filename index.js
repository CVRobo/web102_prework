/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
    
  // loop over each item in the data
  for (let i = 0; i < games.length; i++) {
    // create a new div element, which will become the game card
    const game = document.createElement("div");
    // add the class game-card to the list
    game.classList.add("game-card");
    // set the inner HTML using a template literal to display some info
    // about each game
    game.innerHTML = `
        <img src="${games[i].img}" class="game-img" alt="${games[i].name}"/>
        <br/>
        <br/>
        <h2>${games[i].name}</h2>
        <br/>
        <p>${games[i].description}</p>
        <br/>
        <p>Backers: ${games[i].backers}</p>
        `;

    // append the game to the games-container
    gamesContainer.append(game);
  }
  // TIP: if your images are not displaying, make sure there is space}
}
  // Step 5: Call the function with the variable holding all the games
  addGamesToPage(GAMES_JSON);
  
// later, we'll call this function using a different list of games


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const totalContributions = GAMES_JSON.reduce((acc, game) => acc + game.backers, 0);
contributionsCard.innerHTML = totalContributions.toLocaleString();

// set the inner HTML using a template literal and toLocaleString to get a number with commas


// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");
const totalRaised = GAMES_JSON.reduce((acc, game) => acc + game.pledged, 0);
raisedCard.innerHTML = `$${totalRaised.toLocaleString()}`;

// set inner HTML using template literal


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
gamesCard.innerHTML = GAMES_JSON.length;


/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);
    const unfunded = GAMES_JSON.filter(game => game.pledged < game.goal);
    console.log("Unfunded count →", unfunded.length);  // Secret Key component 1
    addGamesToPage(unfunded);
    
}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    const funded = GAMES_JSON.filter(game => game.pledged >= game.goal);
    console.log("Funded count →", funded.length);   
    addGamesToPage(funded);

    // use the function we previously created to add unfunded games to the DOM

}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);
    // add all games from the JSON data to the DOM
    console.log("Total games →", GAMES_JSON.length);
    addGamesToPage(GAMES_JSON);
}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener('click', filterUnfundedOnly);
fundedBtn  .addEventListener('click', filterFundedOnly);
allBtn     .addEventListener('click', showAllGames);
/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
const numUnfunded = GAMES_JSON.filter(game => game.pledged < game.goal).length;

// create a string that explains the number of unfunded games using the ternary operator
const totalRaisedUnfunded = GAMES_JSON.reduce((sum, game) => sum + game.pledged, 0);
const totalGames  = GAMES_JSON.length;
const unfundedText = numUnfunded === 1 ? "1 game remains unfunded" : `${numUnfunded} games remain unfunded`;

const summaryString = 
  `A total of $${totalRaisedUnfunded.toLocaleString()} has been raised for ${totalGames} games. ` +
  `Currently, ${unfundedText}.`;

// create a new DOM element containing the template string and append it to the description container
const p = document.createElement('p');
p.innerText = summaryString;
descriptionContainer.appendChild(p);

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [topGame, secondGame, ...rest] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
const topGameElement = document.createElement("p");
topGameElement.textContent = topGame.name;
firstGameContainer.appendChild(topGameElement);

// do the same for the runner up item

const secondGameElement = document.createElement("p");
secondGameElement.textContent = secondGame.name;
secondGameContainer.appendChild(secondGameElement);
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

//search button
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = GAMES_JSON.filter(game =>
        game.name.toLowerCase().includes(searchTerm)
    );
    
    deleteChildElements(gamesContainer);
    addGamesToPage(filteredGames);
});
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchButton.click();
    }
});
