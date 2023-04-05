let elapsedTime = document.querySelector('#elapsed');
let homeTeamLogo = document.querySelector('#homeLogo');
let homeTeamName = document.querySelector('#homeName');
let awayTeamLogo = document.querySelector('#awayLogo');
let awayTeamName = document.querySelector('#awayName');
let lastMatchGoals = document.querySelector('#goals');
let matchTable = document.querySelector('#matchTable');

let countryFlag = document.querySelector('#country-flag');
let countryName = document.querySelector('#country-name');
let leagueLogo = document.querySelector('#league-logo');
let leagueName = document.querySelector("#league-name");
let seasonNo = document.querySelector("#season-no");
let roundInfo = document.querySelector("#round-info");

function addMatchTile(data){
    var matchtile = document.createElement('div');
    matchtile.classList.add("match-tile");

    var homeTeam = document.createElement('div');
    homeTeam.classList.add("team");

    var homeTileTeamName = document.createElement('p');
    homeTileTeamName.innerHTML = data['teams']['home']['name'];
    var homeTileTeamLogo = document.createElement('img');
    homeTileTeamLogo.src=data['teams']['home']['logo'];
    homeTeam.appendChild(homeTileTeamLogo);
    homeTeam.appendChild(homeTileTeamName);

    var awayTeam = document.createElement('div');
    awayTeam.classList.add("team");

    var awayTileTeamName = document.createElement('p');
    awayTileTeamName.innerHTML = data['teams']['away']['name'];
    var awayTileTeamLogo = document.createElement('img');
    awayTileTeamLogo.src=data['teams']['away']['logo'];
    awayTeam.appendChild(awayTileTeamLogo);
    awayTeam.appendChild(awayTileTeamName);

    var score = document.createElement('p');
    score.innerHTML = data['goals']['home'] + " - " + data['goals']['away'];

    matchtile.appendChild(homeTeam);
    matchtile.appendChild(score);
    matchtile.appendChild(awayTeam);

    matchTable.appendChild(matchtile);
}

fetch("https://v3.football.api-sports.io/fixtures?live=all", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "ee006e13d4212ec608933d9d288e672d"
    }
})
.then(response => response.json().then(data => {
    var matchesList = data['response'];
    console.log(matchesList[0]);
    var fixture = matchesList[0]['fixture'];
    var goals = matchesList[0]['goals'];
    var teams = matchesList[0]['teams'];
    var league = matchesList[0]['league'];

    countryFlag.src = league['flag'];
    countryName.innerHTML=league['country'];
    leagueLogo.src = league['logo'];
    leagueName.innerHTML = league['name'];
    seasonNo.innerHTML = league['season'];
    roundInfo.innerHTML = league['round'];

    elapsedTime.innerHTML = fixture['status']['long'] + " " + fixture['status']['elapsed'] + "'";
    homeTeamLogo.src = teams['home']['logo'];
    homeTeamName.innerHTML = teams['home']['name'];
    awayTeamLogo.src = teams['away']['logo'];
    awayTeamName.innerHTML = teams['away']['name'];
    lastMatchGoals.innerHTML = goals['home']+ " - " + goals['away'];

   for(var i = 1; i<matchesList.length;i++){
       addMatchTile(matchesList[i]);
   }

}))
.catch(err => {
    console.log(err);
});

