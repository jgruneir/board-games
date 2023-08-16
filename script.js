const boardGames = [
  { name: "Eldritch Horror", description: "A cooperative game of mystery and terror.", bggLink: "https://boardgamegeek.com/boardgame/146021/eldritch-horror", complexity: 9 },
  { name: "Arkham Horror: Final Hour", description: "A fast-paced, cooperative dice-driven game set in the Lovecraftian universe.", bggLink: "https://boardgamegeek.com/boardgame/285773/arkham-horror-final-hour", complexity: 6 },
  { name: "Betrayal at House on the Hill", description: "A game that builds a new, unique haunted house every time you play.", bggLink: "https://boardgamegeek.com/boardgame/10547/betrayal-house-hill", complexity: 4 },
  { name: "Betrayal at Baldur's Gate", description: "Explore the dark corners of the city of Baldur's Gate and uncover its secrets.", bggLink: "https://boardgamegeek.com/boardgame/228660/betrayal-baldurs-gate", complexity: 4 },
  { name: "5-Minute Dungeon", description: "A chaotic, real-time, cooperative card game.", bggLink: "https://boardgamegeek.com/boardgame/207830/5-minute-dungeon", complexity: 3 },
  { name: "Gloomhaven", description: "A cooperative campaign-driven dungeon crawl board game.", bggLink: "https://boardgamegeek.com/boardgame/174430/gloomhaven", complexity: 10 },
  { name: "Gloomhaven: Forgotten Circles", description: "An expansion for the Gloomhaven base game.", bggLink: "https://boardgamegeek.com/boardgameexpansion/250337/gloomhaven-forgotten-circles", complexity: 10 },
  { name: "Scythe", description: "An asymmetric board game set in an alternate-history 1920s period.", bggLink: "https://boardgamegeek.com/boardgame/169786/scythe", complexity: 8 },
  { name: "Terraforming Mars", description: "A game where players work together to terraform the planet Mars.", bggLink: "https://boardgamegeek.com/boardgame/167791/terraforming-mars", complexity: 7 },
  { name: "Dominion", description: "A deck-building card game with multiple expansions.", bggLink: "https://boardgamegeek.com/boardgame/36218/dominion", complexity: 4 },
  { name: "Citadels", description: "A game of city-building and intrigue.", bggLink: "https://boardgamegeek.com/boardgame/205398/citadels", complexity: 3 },
  { name: "Citadels Classic", description: "A new edition of the classic city-building card game.", bggLink: "https://boardgamegeek.com/boardgame/478/game-citadels", complexity: 3 },
  { name: "Dice Forge", description: "Craft your own dice to gain resources and victory points.", bggLink: "https://boardgamegeek.com/boardgame/194594/dice-forge", complexity: 5 },
  { name: "Stardew Valley", description: "Inspired by the popular farming simulation video game.", bggLink: "https://boardgamegeek.com/boardgame/332290/stardew-valley-board-game", complexity: 5 },
  { name: "Blokus", description: "A strategy board game that promotes spatial thinking.", bggLink: "https://boardgamegeek.com/boardgame/2453/blokus", complexity: 1 },
  { name: "Ticket to Ride: Europe", description: "A railway-themed board game set in Europe.", bggLink: "https://boardgamegeek.com/boardgame/14996/ticket-ride-europe", complexity: 4 },
  { name: "Santorini", description: "A game of abstract strategy set in the beautiful Greek islands.", bggLink: "https://boardgamegeek.com/boardgame/194655/santorini", complexity: 4 },
  { name: "Mysterium", description: "A cooperative deduction game with a ghostly twist.", bggLink: "https://boardgamegeek.com/boardgame/181304/mysterium", complexity: 3 },
  { name: "Azul", description: "A game of tile-drafting and pattern-building.", bggLink: "https://boardgamegeek.com/boardgame/230802/azul", complexity: 3 },
  { name: "Azul: Crystal Mosaic", description: "An expansion for the Azul base game.", bggLink: "https://boardgamegeek.com/boardgameexpansion/294345/azul-crystal-mosaic", complexity: 3 },
  { name: "Catan", description: "The classic game of trading and building.", bggLink: "https://boardgamegeek.com/boardgame/13/catan", complexity: 3 },
  { name: "Catan 5-6 Player Pack", description: "An expansion to increase the player count of Catan.", bggLink: "https://boardgamegeek.com/boardgameexpansion/2807/catan-5-6-player-extension", complexity: 3 },
  { name: "Tsuro", description: "A serene game of path-making and strategy.", bggLink: "https://boardgamegeek.com/boardgame/16992/tsuro", complexity: 2 },
  { name: "Fox Matters", description: "A family-friendly game of forest creatures and their quests.", bggLink: "https://boardgamegeek.com/boardgame/314893/fox-matters", complexity: 5 },
  { name: "Anomia", description: "A fast-paced word game that will make you think on your feet.", bggLink: "https://boardgamegeek.com/boardgame/67877/anomia", complexity: 1 },
  { name: "Dice Throne Season 2 #3", description: "A game of dice-based combat and strategy.", bggLink: "https://boardgamegeek.com/boardgame/266967/dice-throne-season-two-cursed-pirate-v-artificer", complexity: 4 },
  { name: "Dice Throne Season 2 #4", description: "Another set in the Dice Throne Season 2 series.", bggLink: "https://boardgamegeek.com/boardgame/266964/dice-throne-season-two-seraph-v-vampire-lord", complexity: 4 },
  { name: "Mini Rogue", description: "A compact dungeon-crawling adventure game.", bggLink: "https://boardgamegeek.com/boardgame/311715/mini-rogue", complexity: 5 },
  { name: "Jaipur", description: "A fast-paced trading card game set in the markets of India.", bggLink: "https://boardgamegeek.com/boardgame/54043/jaipur", complexity: 3 },
  { name: "Agatha Christie's Death on the Cards", description: "A murder mystery card game based on Agatha Christie's works.", bggLink: "https://boardgamegeek.com/boardgame/281206/agatha-christie-death-cards", complexity: 3 },
  { name: "Llamas Unleashed", description: "A card game about collecting llamas and stopping your opponents.", bggLink: "https://boardgamegeek.com/boardgame/268936/llamas-unleashed", complexity: 2 },
  { name: "Exploding Kittens", description: "A card game that involves kittens and a bit of controlled chaos.", bggLink: "https://boardgamegeek.com/boardgame/172225/exploding-kittens", complexity: 1 },
  { name: "Here to Slay", description: "A card game about assembling a party of adventurers and slaying monsters.", bggLink: "https://boardgamegeek.com/boardgame/299252/here-slay", complexity: 4 },
  { name: "Boss Monster", description: "A retro-inspired card game where you build dungeons to lure and defeat heroes.", bggLink: "https://boardgamegeek.com/boardgame/131835/boss-monster-dungeon-building-card-game", complexity: 4 },
  { name: "Targi", description: "A two-player game set in the desert, where you trade and collect goods.", bggLink: "https://boardgamegeek.com/boardgame/118048/targi", complexity: 5 },
  { name: "Team3", description: "A cooperative party game that involves building with blocks while following specific rules.", bggLink: "https://boardgamegeek.com/boardgame/247694/team3-pink", complexity: 1 },
  { name: "Codenames Duet", description: "A cooperative version of the popular word game Codenames.", bggLink: "https://boardgamegeek.com/boardgame/224037/codenames-duet", complexity: 2 },
  { name: "Patchwork", description: "A two-player game about creating a quilt by strategically placing fabric pieces.", bggLink: "https://boardgamegeek.com/boardgame/163412/patchwork", complexity: 2 },
  { name: "Forbidden Island", description: "A cooperative game of treasure hunting and escaping from a sinking island.", bggLink: "https://boardgamegeek.com/boardgame/65244/forbidden-island", complexity: 2 },
  { name: "Roam", description: "A pattern-building card game set in the ancient world of Arzium.", bggLink: "https://boardgamegeek.com/boardgame/267319/roam", complexity: 4 },
  { name: "Arboretum", description: "A card game about cultivating beautiful tree paths.", bggLink: "https://boardgamegeek.com/boardgame/140934/arboretum", complexity: 3 },
  { name: "The Crew", description: "A cooperative trick-taking game set in space.", bggLink: "https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine", complexity: 2 },
  { name: "Guillotine", description: "A card game about executing nobles during the French Revolution.", bggLink: "https://boardgamegeek.com/boardgame/116/guillotine", complexity: 1 },
  { name: "Mille Bornes", description: "A classic card game about racing to a thousand miles.", bggLink: "https://boardgamegeek.com/boardgame/590/mille-bornes", complexity: 1 },
  { name: "Pentago", description: "A two-player abstract strategy game with a twist.", bggLink: "https://boardgamegeek.com/boardgame/19841/pentago", complexity: 1 },
  { name: "Cribbage", description: "A classic card game involving pegs and a wooden board.", bggLink: "https://boardgamegeek.com/boardgame/2398/cribbage", complexity: 1 },
  { name: "Set", description: "A card game that challenges your pattern recognition skills.", bggLink: "https://boardgamegeek.com/boardgame/1198/set", complexity: 1 },
];

const container = document.querySelector('.container');

// Fetch ratings for all games
Promise.all(boardGames.map(game => getRating(game)))
  .then(() => {
    // Once all ratings are fetched, sort and render the board games
    sortBoardGames();
  })
  .catch(error => {
    console.error('Error fetching game ratings:', error);
  });


let sortOption = 'rating'; // Default sort option

// Sort the board games based on the initial option
sortBoardGames();


document.getElementById('sortToggle').addEventListener('change', () => {
  sortOption = document.getElementById('sortToggle').value;
  sortBoardGames();
});

async function sortBoardGames() {
  container.innerHTML = ''; // Clear the container before re-rendering

  if (sortOption === 'rating') {
    boardGames.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortOption === 'complexity') {
    boardGames.sort((a, b) => b.complexity - a.complexity);
  }

  for (const game of boardGames) {
    const box = document.createElement('div');
    box.className = 'box';

    const name = document.createElement('h2');
    name.textContent = game.name;

    const detailsContainer = document.createElement('div');
    detailsContainer.className = 'details-container';
    detailsContainer.style.display = 'none'; // Initially hidden

    const description = document.createElement('p');
    description.textContent = game.description;

    const link = document.createElement('a');
    link.href = game.bggLink;
    link.textContent = 'Learn More';

    const complexityColor = getComplexityColor(game.complexity);

    const complexitySymbol = document.createElement('span');
    complexitySymbol.classList.add('game-complexity');
    complexitySymbol.textContent = getComplexitySymbol(game.complexity);
    complexitySymbol.style.color = complexityColor;

    const difficultyText = document.createElement('p');
    difficultyText.classList.add('difficulty-row');
    difficultyText.className = 'difficulty-text';
    difficultyText.style.color = complexityColor;


    try {

      difficultyText.textContent = getDifficultyText(game.complexity);
      let ratingText = document.createElement('p');
      ratingText.style.color = 'black'; // Set the color to black
      ratingText.textContent = ' | Rating: ' + game.rating;
      ratingText.style.display = 'inline';
      difficultyText.appendChild(ratingText);
    } catch (error) {
      console.error('Error fetching game rating:', error);
    }

    name.addEventListener('click', () => {
      detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'block' : 'none';
    });

    // Adjust font size for longer game names
    if (game.name.length > 23) {
      name.style.fontSize = '1rem'; // Adjust this value as needed
    }

    detailsContainer.appendChild(description);
    detailsContainer.appendChild(link);

    box.appendChild(name);
    box.appendChild(difficultyText);
    box.appendChild(detailsContainer);

    container.appendChild(box);
  }
}

async function getRating(game) {
        const gameId = extractGameId(game.bggLink);
    const apiUrl = `https://boardgamegeek.com/xmlapi2/thing?id=${gameId}&stats=1`;

      const response = await fetch(apiUrl);
      const xmlData = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, 'text/xml');
      const averageRating = xmlDoc.querySelector('average').getAttribute('value').substring(0, 4);

      game.rating = averageRating;
      console.log(averageRating);
}

function extractGameId(url) {
  const idMatch = url.match(/(?:boardgame|boardgameexpansion)\/(\d+)/);
  return idMatch ? idMatch[1] : null;
}

function getComplexitySymbol(complexity) {
  if (complexity >= 1 && complexity <= 3) {
    return "●";
  } else if (complexity >= 4 && complexity <= 6) {
    return "■";
  } else if (complexity >= 7 && complexity <= 8) {
    return "♦";
  } else {
    return "♦♦";
  }
}

function getDifficultyText(complexity) {
  if (complexity >= 1 && complexity <= 3) {
    return "Easy";
  } else if (complexity >= 4 && complexity <= 6) {
    return "Medium";
  } else if (complexity >= 7 && complexity <= 8) {
    return "Complex";
  } else {
    return "Highly Complex";
  }
}

function getComplexityColor(complexity) {
  if (complexity >= 1 && complexity <= 3) {
    return "green";
  } else if (complexity >= 4 && complexity <= 6) {
    return "blue";
  } else if (complexity >= 7 && complexity <= 8) {
    return "orange";
  } else {
    return "red";
  }
}