class gameCard{
    constructor(newName,newDesc,newImage,newLink,newId,newOrder){
        this.name = newName
        this.image = newImage
        this.desc = newDesc
        this.link = newLink
        this.id = newId
        this.order = newOrder
    }
    name = "TEMPNAME"
    image = "Images/Misc/guh.png"
    desc = "TEMPDESC aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    link = "Projects/Template.html"
    id = "Test"
    order = -1
}

//English Translation
const translationEn = {

    // -- Every page
    navHome: "Home",
    navProj: "Projects",
    navMe: "About Me",
    languageSelectEn: "English",
    languageSelectNl: "Dutch",
    VideoNotSupported: "Your browser does not support the video tag.",

    // -- Home page
    Title1: "Welcome to the ",
    Title2: "Portfolio",
    Title3: "site of ",
    Title4: "Rudo Verschuren",
    Title5: "!",

    TitleDesc1: "I make games using the ",
    TitleDesc2: "Unity Engine",
    TitleDesc3: ", and have also used a bit of ",
    TitleDesc4: "Godot",
    TitleDesc5: "",

    HomeRecentProj: "Recent Projects",
    SeeProjects: "See all projects",

    // -- Projects Page
    proTitle: "All Projects (A-Z)",
    ItchPage: "Itch.io page",

    // -- Game Cards
    MoreInfo: "More info",

    //Pong
    PongTitle: "Pong Remake",
    PongDesc: "The first game I ever made. It's simple pong but was updated to a smoother version 2 on December 15th 2023",

    //Tank Game
    TankTitle: "Tank Game",
    TankDesc: "The Tank Game was the second game we made at school. It is a one device turn based pvp game with multiple type of bullets.",

    //Race Game
    RaceGameTitle: "Race Game",
    RaceGameDesc: "The Race Game was the third game I made in school. It had a shop , achievements , upgrades and much more.",

    //MineSweeper
    MineTitle: "Minesweeper But Bad",
    MineDesc: "Minesweeper is a remake of the original minesweeper, made since we werent allowed to play minesweeper in class.",

    //Code Armada: Crash Guardians
    CACGTitle: "Code Armada: Crash Guardians",
    CACGDesc: "Code Armada: Crash Guardians is a Tower Defense Game, where the main objective is to survive as many waves as you can!",

    //Lighten Up
    LightenTitle: "Lighten Up!",
    LightenDesc: "A Global Game Jam game with the theme: \"Make me laugh\".",
    
    //StoryFixer
    StoryTitle: "StoryFixer",
    StoryDesc: "\"Once upon a time\" was the theme for the Noorderpoort Game Jam of 2024.",

    // -- Project Pages

    //Pong
    PongName: "Pong",
    PongChapter1: "V1",
    PongText1: "\"Pong is a two-dimensional sports game that simulates table tennis\"\n but I'm sure everyone knows that. One of the great qualities of this is that Pong is one of the easiest games to make. That is why Pong was the first project I ever made at school. The project only lasted a few weeks so there wasnt a lot of time to make the project better.",
    PongText2: "Since I was new to programming I really avoided coding a bit for Pong. Most of the V1 code is made by school or by classmates. I mostly focussed on the art and left the programming for the second project we had: the Tank Game. Altho I wasn't focussing on it, I did get to know the basics of unity with this project.",

    PongChapter2: "V2",
    PongText3: "Almost 250 days after the full completion of Pong I started to work on V2. V2 was finished in around 150 days and included a full code rework, redone art (as seen in the image) and it finally added options. Although the update didnt add much in gameplay I do really like what it did add in gameplay.",
    PongText4: "The update allowed you to customize most things in the game. These settings allow the game to still be fun even if its basic. Playing with less pedal speed can really make the game a challenge and playing with a snail ball that goes twice as fast every time it hits something can be fun. There is also an option to add more balls into the game, allowing up to 10 pong balls in a game at once which can very quickly get chaotic.",
    PongText5: "A main part of the update was the complete art rework. I don't think any V1 art still exists in V2. The art was remade to be consistant in size, and to just look smoother. This update also added particles to the game, making it feel more responsive if you score or if the ball bounces. It also added the ball waiting for a few seconds before moving at the start or on a score. A \"Christmas\" setting was also added, which changes all the art to be Christmas themed.",

    //Tank
    TankName: "Tank Game",
    TankText1: "ee",
    TankText2: "eea",
}


//Nederlandse vertaling
const translationNl = {

    // -- Elke pagina
    navHome: "Huis",
    navProj: "Projecten",
    navMe: "Over Mij",
    languageSelectEn: "Engels",
    languageSelectNl: "Nederlands",
    VideoNotSupported: "Kan video niet afspelen.",

    // -- Voorpagina
    Title1: "Welkom op de ",
    Title2: "Portfolio",
    Title3: "site van ",
    Title4: "Rudo Verschuren",
    Title5: "!",

    TitleDesc1: "Ik maak games met de ",
    TitleDesc2: "Unity Engine",
    TitleDesc3: ", en heb een beetje ",
    TitleDesc4: "Godot",
    TitleDesc5: " gebruikt",

    HomeRecentProj: "Recente projecten",
    SeeProjects: "Bekijk alle projecten",

    // -- Projects Page
    proTitle: "All Projects (A-Z)",
    ItchPage: "Itch.io pagina",

    // -- Game Cards
    MoreInfo: "Meer info",

    //Pong
    PongTitle: "Pong hermaakt",
    PongDesc: "De eerste game die ik ooit heb gemaakt. Het is een simpele pong maar kreeg een v2 update op 15 december 2023",

    //Tank Game
    TankTitle: "Tank Game",
    TankDesc: "De Tank Game was de tweede game die ik heb gemaakt. Het is een pvp game met meerdere soorten kogels dat je speelt op een device.",

    //Race Game
    RaceGameTitle: "Race Game",
    RaceGameDesc: "De Race Game was de derde game die ik heb gemaakt. Het heeft achievements, Upgrades en een winkel.",
    
    //MineSweeper
    MineTitle: "Minesweeper Maar Slecht",
    MineDesc: "Minesweeper is net als de orginele Minesweeper, en was gemaakt omdat we geen Minesweeper mochten spelen in de klas.",

    //Code Armada: Crash Guardians
    CACGTitle: "Code Armada: Crash Guardians",
    CACGDesc: "Code Armada: Crash Guardians is een Tower Defense Game, waarbij het doel is om zo veel mogelijk waves te overleven!",

    //Lighten Up!
    LightenTitle: "Lighten Up!",
    LightenDesc: "Een Global Game Jam game met een thema van: \"Maak mij aan het lachen\".",

    //StoryFixer
    StoryTitle: "StoryFixer",
    StoryDesc: "\"Once upon a time\" was de thema van de Noorderpoort Game Jam van 2024.",

    // -- Project Paginas

    //Pong
    PongName: "Pong",
    PongChapter1: "V1",
    PongText1: "Pong is cool fr",
    PongText2: "Real",

    PongChapter2: "V2",
    PongText3: "Still Pong",
    PongText4: "I agree idk",
    PongText5: "Ye",
}


//Pirates speech
const translationPi = {

    // -- All sails
    navHome: "Back to Ship",
    navProj: "Booty",
    navMe: "'Bout Captain",
    languageSelectEn: "Land speech",
    languageSelectNl: "Other land speech",
    VideoNotSupported: "Ye ship be too weak for these waters!",

    // -- Ship's paper
    Title1: "Welcome aboard",
    Title2: "Rudo Verschuren's",
    Title3: "vessel",
    Title4: "",
    Title5: "!",

    TitleDesc1: "I make games using the ",
    TitleDesc2: "Unity Engine",
    TitleDesc3: ", and have also used a bit of ",
    TitleDesc4: "Godot",
    TitleDesc5: "",

    HomeRecentProj: "Newly plundered booty",
    SeeProjects: "Check all the booty",

    // -- All Booty!
    proTitle: "All Booty (A-Z)",
    ItchPage: "Map to booty",

    // -- Booty!
    MoreInfo: "Fire in the hole!",

    //Boucin' shots fired again!
    PongTitle: "Boucin' shots fired again!",
    PongDesc: "Captain's first loot! It may be cheap but it has been polished to be worth gold!",

    //Cannon Game
    TankTitle: "Cannon Game",
    TankDesc: "Ye Cannon Game be 'bout sinkin other ships wit' ye guns! All happen on ye same ship.",

    //Ship's Chase
    RaceGameTitle: "Ship's Chase",
    RaceGameDesc: "Ship's Chase was ye captain's third attack. T' has a shop, loot and upgradin' among other booty.",
    
    //Sweepin' explosives
    MineTitle: "Sweepin' explosives",
    MineDesc: "Sweepin' explosives is a pirated minesweeper, plundered after Captain's Training didn't allow it to be used.",

    //Defend Ye Vessel!
    CACGTitle: "Defend Ye Vessel!",
    CACGDesc: "Defend Ye Vessel be a defendin game, where ye gotta stay afloat till ye end!",

    //Light 'em up!
    LightenTitle: "Light 'em up!",
    LightenDesc: "A Global Lootin' Race wit' laughter being the target!",

    //Fixin' tales
    StoryTitle: "Fixin' Tales",
    StoryDesc: "\"Once upon a time\" was the ships target durin' the Captain's Training's Lootin' Race of 2024.",

    // -- Full booty!

    //Boucin' shots fired again!
    PongName: "Boucin' shots fired again!",
    PongChapter1: "V1",
    PongText1: "Pong is cool fr",
    PongText2: "Real",

    PongChapter2: "V2",
    PongText3: "Still Pong",
    PongText4: "I agree idk",
    PongText5: "Ye",
}


function createCard(cardInfo) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style="max-width:25%;"

    const cardImg = document.createElement('img');
    cardImg.setAttribute('class','card-img-top')
    if(document.URL.includes("Projects.html")){
        cardImg.src = "../" + cardInfo.image;
    }else{
        cardImg.src = cardInfo.image;
    }

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body')

    const cardTitleBody = document.createElement('div');
    cardTitleBody.setAttribute('class','card-title')

    const cardTitle = document.createElement('h2');
    cardTitle.id = cardInfo.id + "Title"
    cardTitle.textContent = cardInfo.name;
    cardTitle.setAttribute('class','cardTitle')

    const cardDescBody = document.createElement('div');
    cardDescBody.setAttribute('class','card-text')

    const cardDesc = document.createElement('p');
    cardDesc.textContent = cardInfo.desc;
    cardDesc.id = cardInfo.id + "Desc"
    cardTitleBody.setAttribute('class','cardText')

    const cardDescName = document.createElement('span');
    cardDescName.setAttribute('class','importantText')

    const cardButton = document.createElement('a');
    cardButton.setAttribute('class','btn btn-info')
    if(document.URL.includes("Projects.html")){
        cardButton.href = "../" + cardInfo.link;
    }else{
        cardButton.href = cardInfo.link;
    }
    cardButton.textContent = "More Info";
    cardButton.id = "MoreInfo"

    card.appendChild(cardImg);
    card.appendChild(cardBody)
    cardBody.appendChild(cardTitleBody);
    cardTitleBody.appendChild(cardTitle);
    cardBody.appendChild(cardDescBody);
    cardDescBody.appendChild(cardDescName);
    cardDescBody.appendChild(cardDesc);
    cardBody.appendChild(cardButton);

    return card;
}
let allCards = [
    new gameCard("Pong Remake",
    "Pong was the first game we made at school. It is simple , with most of the code not being written by me.",
    "Images/2022/Pong/PongV2_Title.png",
    "Projects/2022/Pong.html",
    "Pong",
    0
),
    new gameCard("Tank Game",
    "The Tank Game was the second game we made at school. It is a one device turn based pvp game with multiple type of bullets.",
    "Images/2022/Tank/Tank_3B.png",
    "Projects/2022/Tank.html",
    "Tank",
    1
),
    new gameCard("Race Game",
    "The Race Game was the third game I made in school. It had a shop , achievements , upgrades and much more.",
    "Images/2023/Race/RaceGame.png",
    "Projects/2023/Race.html",
    "RaceGame",
    2
),
    new gameCard("Minesweeper but Bad",
    "Minesweeper is a remake of the original minesweeper, made since we werent allowed to play minesweeper in class.",
    "Images/2023/Mine/Mine_1.png",
    "Projects/2023/Mine.html",
    "Mine",
    3
),
    new gameCard("Code Armada: Crash Guardians",
    "Code Armada: Crash Guardians is a Tower Defense Game, where the main objective is to survive as many waves as you can!",
    "Images/2023/Code_Armada/CA-Main.png",
    "Projects/2023/CodeArmada.html",
    "CACG",
    4
),
    new gameCard("Virus Runner",
    "The first game jam I ever did: An infinite runner. Theme: \"To infinity and beyond\"",
    "Images/2023/VirusRunner/Vi-CardImage.png",
    "Projects/Template.html",
    "Virus",
    5
),
    new gameCard("Lighten Up!",
    "A global game jam game with the theme: \"Make me laugh\".",
    "Images/2024/LightenUp/LU-CardImage.png",
    "Projects/Template.html",
    "Lighten",
    6
),
    new gameCard("StoryFixer",
    "\"Once upon a time\" was the theme for the second school game jam.",
    "Images/2024/StoryFixer/SF-1.png",
    "Projects/Template.html",
    "Story",
    7
),
    new gameCard("Real Time",
    "A multiplayer Real Time Strategy game, made as a group project for school. ",
    "Images/2024/RTS/RTS1.png",
    "Projects/Template.html",
    "Real",
    8
),
new gameCard("Zandvoort Turbo Tour",
    "A racing game made for a Deep Dive.",
    "Images/2024/ZTT/ZTT-CardImage.png",
    "Projects/Template.html",
    "ZTT",
    9
),
];

function placeCards(place,order){
    let currentCards = allCards.slice();
    switch(order){
        case "Recent":
            currentCards.sort(function(first, second) {
            return second.order - first.order;
                });
            break;
        case "Abc":
            currentCards.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
            break;
    }
    //Recent
    //Alphabetical
    
    const cardContainer = place;
    if(cardContainer != null){
        let down = 0;
        const cont = document.createElement('div');
        cardContainer.appendChild(cont);
        cont.className = "card-group proCards";
        let currentContainer = cont;
        for(let i = 1; i + (down * 4) < currentCards.length + 1; i++){
            const card = createCard(currentCards[(i+ (down * 4)) - 1])
            currentContainer.appendChild(card);
            if(i == 4){
                if(order == "Recent" ){
                    
                    down = 99999;
                }else{
                    i = 0;
                    down++;
                    const cont = document.createElement('div');
                    cardContainer.appendChild(cont);
                    cont.className = "card-group proCards";
                    currentContainer = cont;
                }
            }
        }
    
    }
    
}

placeCards(document.getElementById('RecentProj'),"Recent");
placeCards(document.getElementById('AbcProj'),"Abc");

//Checks if the select got changed
const languageSelectOp = document.getElementById("select");
    languageSelectOp.addEventListener("change",(event) => {
        localStorage.setItem('language',event.target.value)
        setLanguage(event.target.value)
    });

const setLanguage = (language) => {
    let allText = document.querySelectorAll('p,span,div,a,option,h1,h2,h3,h4,h5,source');
    let lang = translationEn;
    if(language == "Nederlands"){
        console.log("I dare ye to turn ye speech to Pirate!")
        localStorage.setItem('language',"Nederlands")
        lang = translationNl
    }else if(language == "Pirate" || language == "Pi" || language == "Yarr" || language == "One Piece"){
        console.log("Yarr!")
        localStorage.setItem('language',"Pirate")
        lang = translationPi
    }else{
        console.log("I dare ye to turn ye speech to Pirate!")
        localStorage.setItem('language',"English")
    }
    for(let i = 0; i < allText.length; i++){
        for(let j = 0; j < Object.keys(lang).length; j++){
            if(Object.keys(lang).includes(allText[i].id)){
                allText[i].innerText = lang[allText[i].id]
            }
        }
    }
}
//Gets the language to set it after switching pages
lan = localStorage.getItem('language')
if(lan != null){
    setLanguage(lan)
    //Sets specifically the select to be the language
    languageSelectOp.value = lan;

}