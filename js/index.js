
let info_football=[
    "Bundesliga imports in Premier League: Hits and Flops",
    "Ancelotti urges Madrid fans to give Bale good send off",
    "Juventus manager reacts to Paulo Dybala swap deal",
    "Premier League managers react to pitch invasion incidents",
    "How Mbappe is changing the rules of the football industry",
    "Manchester United 'agreed' a swap deal involving Juventus star Paulo Dybala",
    "How Mbappe is changing the rules of the football industry",
    "Manchester United 'agreed' a swap deal involving Juventus star Paulo Dybala",
    "Bundesliga imports in Premier League: Hits and Flops",
    "Ancelotti urges Madrid fans to give Bale good send off",
    "Juventus manager reacts to Paulo Dybala swap deal",
    "Premier League managers react to pitch invasion incidents",
]
let info_basketball =[
    "2022 NBA mock draft: Projecting all 58 picks after the NBA draft",
    '“That’s the way they play, he’s ball dominant” - NBA analyst',
    "Stephen Curry's defense continues to shine for the Warriors",
    "“He’s doing his part” - Amar’e Stoudemire",
    "2022 NBA mock draft: Projecting all 58 picks after the NBA draft",
    '“That’s the way they play, he’s ball dominant” - NBA analyst',
    "Stephen Curry's defense continues to shine for the Warriors",
    "“He’s doing his part” - Amar’e Stoudemire says Jimmy Butler"
]
for(let i=0;i<12;i++){
    let newspiece = document.createElement('div');
    newspiece.className="news-piece";

    let img = document.createElement('img');
    img.src = `images/news`+(i%6+1)+`-wide.jpg`;
    newspiece.appendChild(img);

    let p1 = document.createElement('p');
    p1.innerHTML=info_football[i];
    p1.className="news-piece-text";

    let p2 = document.createElement('p');
    p2.innerHTML='Utkarsh Bahuguna - May 18';
    p2.className="news-piece-author";

    let infodiv = document.createElement('div');
    infodiv.className = "new-piece-info";
    infodiv.appendChild(p1); infodiv.appendChild(p2);

    newspiece.appendChild(infodiv);
    let footballcol=document.getElementsByClassName('news-column football-column')[0];

    footballcol.appendChild(newspiece);


    let headlinecol = document.getElementsByClassName('news-column headline-column')[0];
    let newspiece2 = newspiece.cloneNode(true);
    headlinecol.appendChild(newspiece2);

    // console.log(footballcol);
}
for(let i=0;i<6;i++){
    let newspiece = document.createElement('div');
    newspiece.className="news-piece";

    let img = document.createElement('img');
    img.src = `images/news-2-`+(i%4+1)+`-wide.jpg`;
    newspiece.appendChild(img);

    let p1 = document.createElement('p');
    p1.innerHTML=info_basketball[i];
    p1.className="news-piece-text";

    let p2 = document.createElement('p');
    p2.innerHTML='Utkarsh Bahuguna - May 18';
    p2.className="news-piece-author";

    let infodiv = document.createElement('div');
    infodiv.className = "new-piece-info";
    infodiv.appendChild(p1); infodiv.appendChild(p2);

    newspiece.appendChild(infodiv);
    let basketballcol=document.getElementsByClassName('news-column basketball-column')[0];
    basketballcol.appendChild(newspiece);

    
    let headlinecol = document.getElementsByClassName('news-column headline-column')[0];
    let newspiece2 = newspiece.cloneNode(true);
    headlinecol.appendChild(newspiece2);

    // console.log(footballcol);
}