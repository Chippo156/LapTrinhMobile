// Step 1: 
let players1 = ['Neuer',
'Pavard',
'Martinez',
'Alaba',
'Davies',
'Kimmich',
'Goretzka',
'Coman',
'Muller',
'Gnarby',
'Lewandowski',];
let players2 = ['Burki',
'Schulz',
'Hummels',
'Akanji',
'Hakimi',
'Weigl',
'Witsel',
'Hazard',
'Brandt',
'Sancho',
'Gotze',];

// Step 2: 
let gk = players1[0];
let fieldPlayers = players1.slice(1);

// Step 3:
let allPlayers = players1.concat(players2);

// Step 4: 
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// 
let game = {
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5
    },
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels']
};

// Step 5: 
let { team1, draw, team2 } = game.odds;

// Step 6: 
function printGoals(...players) {
    console.log(`${players.length} goals were scored`);
    for (let i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
}

//
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Step 7:
console.log(team1 < team2 && 'Team 1 is more likely to win' || 'Team 2 is more likely to win');