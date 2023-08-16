const boardGames = [
  { name: "Eldritch Horror", description: "A cooperative game of mystery and terror.", bggLink: "https://boardgamegeek.com/boardgame/146021/eldritch-horror" },
  { name: "Arkham Horror: Final Hour", description: "A fast-paced, cooperative dice-driven game set in the Lovecraftian universe.", bggLink: "https://boardgamegeek.com/boardgame/285773/arkham-horror-final-hour" },
  { name: "Betrayal at House on the Hill", description: "A game that builds a new, unique haunted house every time you play.", bggLink: "https://boardgamegeek.com/boardgame/10547/betrayal-house-hill" },
  { name: "Betrayal at Baldur's Gate", description: "Explore the dark corners of the city of Baldur's Gate and uncover its secrets.", bggLink: "https://boardgamegeek.com/boardgame/228660/betrayal-baldurs-gate" },
  { name: "5-Minute Dungeon", description: "A chaotic, real-time, cooperative card game.", bggLink: "https://boardgamegeek.com/boardgame/207830/5-minute-dungeon" },
  { name: "Gloomhaven", description: "A cooperative campaign-driven dungeon crawl board game.", bggLink: "https://boardgamegeek.com/boardgame/174430/gloomhaven" },
  { name: "Gloomhaven: Forgotten Circles", description: "An expansion for the Gloomhaven base game.", bggLink: "https://boardgamegeek.com/boardgameexpansion/250337/gloomhaven-forgotten-circles" },
  { name: "Scythe", description: "An asymmetric board game set in an alternate-history 1920s period.", bggLink: "https://boardgamegeek.com/boardgame/169786/scythe" },
  { name: "Terraforming Mars", description: "A game where players work together to terraform the planet Mars.", bggLink: "https://boardgamegeek.com/boardgame/167791/terraforming-mars" },
  { name: "Dominion", description: "A deck-building card game with multiple expansions.", bggLink: "https://boardgamegeek.com/boardgame/36218/dominion" },
  { name: "Citadels", description: "A game of city-building and intrigue.", bggLink: "https://boardgamegeek.com/boardgame/205398/citadels" },
  { name: "Citadels Classic", description: "A new edition of the classic city-building card game.", bggLink: "https://boardgamegeek.com/boardgame/478/game-citadels" },
  { name: "Dice Forge", description: "Craft your own dice to gain resources and victory points.", bggLink: "https://boardgamegeek.com/boardgame/194594/dice-forge" },
  { name: "Stardew Valley", description: "Inspired by the popular farming simulation video game.", bggLink: "https://boardgamegeek.com/boardgame/332290/stardew-valley-board-game" },
  { name: "Blokus", description: "A strategy board game that promotes spatial thinking.", bggLink: "https://boardgamegeek.com/boardgame/2453/blokus" },
  { name: "Ticket to Ride: Europe", description: "A railway-themed board game set in Europe.", bggLink: "https://boardgamegeek.com/boardgame/14996/ticket-ride-europe" },
  { name: "Santorini", description: "A game of abstract strategy set in the beautiful Greek islands.", bggLink: "https://boardgamegeek.com/boardgame/194655/santorini" },
  { name: "Mysterium", description: "A cooperative deduction game with a ghostly twist.", bggLink: "https://boardgamegeek.com/boardgame/181304/mysterium" },
  { name: "Azul", description: "A game of tile-drafting and pattern-building.", bggLink: "https://boardgamegeek.com/boardgame/230802/azul" },
  { name: "Azul: Crystal Mosaic", description: "An expansion for the Azul base game.", bggLink: "https://boardgamegeek.com/boardgameexpansion/294345/azul-crystal-mosaic" },
  { name: "Catan", description: "The classic game of trading and building.", bggLink: "https://boardgamegeek.com/boardgame/13/catan" },
  { name: "Catan 5-6 Player Pack", description: "An expansion to increase the player count of Catan.", bggLink: "https://boardgamegeek.com/boardgameexpansion/2807/catan-5-6-player-extension" },
  { name: "Tsuro", description: "A serene game of path-making and strategy.", bggLink: "https://boardgamegeek.com/boardgame/16992/tsuro" },
  { name: "Fox Matters", description: "A family-friendly game of forest creatures and their quests.", bggLink: "https://boardgamegeek.com/boardgame/314893/fox-matters" },
  { name: "Anomia", description: "A fast-paced word game that will make you think on your feet.", bggLink: "https://boardgamegeek.com/boardgame/67877/anomia" },
  { name: "Dice Throne Season 2 #3", description: "A game of dice-based combat and strategy.", bggLink: "https://boardgamegeek.com/boardgame/266967/dice-throne-season-two-cursed-pirate-v-artificer" },
  { name: "Dice Throne Season 2 #4", description: "Another set in the Dice Throne Season 2 series.", bggLink: "https://boardgamegeek.com/boardgame/266964/dice-throne-season-two-seraph-v-vampire-lord" },
  { name: "Mini Rogue", description: "A compact dungeon-crawling adventure game.", bggLink: "https://boardgamegeek.com/boardgame/311715/mini-rogue" },
  { name: "Jaipur", description: "A fast-paced trading card game set in the markets of India.", bggLink: "https://boardgamegeek.com/boardgame/54043/jaipur" },
  { name: "Agatha Christie's Death on the Cards", description: "A murder mystery card game based on Agatha Christie's works.", bggLink: "https://boardgamegeek.com/boardgame/281206/agatha-christie-death-cards" },
  { name: "Llamas Unleashed", description: "A card game about collecting llamas and stopping your opponents.", bggLink: "https://boardgamegeek.com/boardgame/268936/llamas-unleashed" },
  { name: "Exploding Kittens", description: "A card game that involves kittens and a bit of controlled chaos.", bggLink: "https://boardgamegeek.com/boardgame/172225/exploding-kittens" },
  { name: "Here to Slay", description: "A card game about assembling a party of adventurers and slaying monsters.", bggLink: "https://boardgamegeek.com/boardgame/299252/here-slay" },
  { name: "Boss Monster", description: "A retro-inspired card game where you build dungeons to lure and defeat heroes.", bggLink: "https://boardgamegeek.com/boardgame/131835/boss-monster-dungeon-building-card-game" },
  { name: "Targi", description: "A two-player game set in the desert, where you trade and collect goods.", bggLink: "https://boardgamegeek.com/boardgame/115048/targi" },
  { name: "Team3", description: "A cooperative party game that involves building with blocks while following specific rules.", bggLink: "https://boardgamegeek.com/boardgame/247694/team3-pink" },
  { name: "Codenames Duet", description: "A cooperative version of the popular word game Codenames.", bggLink: "https://boardgamegeek.com/boardgame/224037/codenames-duet" },
  { name: "Patchwork", description: "A two-player game about creating a quilt by strategically placing fabric pieces.", bggLink: "https://boardgamegeek.com/boardgame/163412/patchwork" },
  { name: "Forbidden Island", description: "A cooperative game of treasure hunting and escaping from a sinking island.", bggLink: "https://boardgamegeek.com/boardgame/65244/forbidden-island" },
  { name: "Roam", description: "A pattern-building card game set in the ancient world of Arzium.", bggLink: "https://boardgamegeek.com/boardgame/267319/roam" },
  { name: "Arboretum", description: "A card game about cultivating beautiful tree paths.", bggLink: "https://boardgamegeek.com/boardgame/140934/arboretum" },
  { name: "The Crew", description: "A cooperative trick-taking game set in space.", bggLink: "https://boardgamegeek.com/boardgame/284083/crew-quest-planet-nine" },
  { name: "Guillotine", description: "A card game about executing nobles during the French Revolution.", bggLink: "https://boardgamegeek.com/boardgame/116/guillotine" },
  { name: "Mille Bornes", description: "A classic card game about racing to a thousand miles.", bggLink: "https://boardgamegeek.com/boardgame/590/mille-bornes" },
  { name: "Pentago", description: "A two-player abstract strategy game with a twist.", bggLink: "https://boardgamegeek.com/boardgame/19841/pentago" },
  { name: "Cribbage", description: "A classic card game involving pegs and a wooden board.", bggLink: "https://boardgamegeek.com/boardgame/2398/cribbage" },
  { name: "Set", description: "A card game that challenges your pattern recognition skills.", bggLink: "https://boardgamegeek.com/boardgame/1198/set" },
];

const container = document.querySelector('.container');

boardGames.forEach(game => {
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
  link.textContent = "Learn More";

  detailsContainer.appendChild(description);
  detailsContainer.appendChild(link);

  name.addEventListener('click', () => {
    detailsContainer.style.display = detailsContainer.style.display === 'none' ? 'block' : 'none';
  });

  box.appendChild(name);
  box.appendChild(detailsContainer);

  container.appendChild(box);
});