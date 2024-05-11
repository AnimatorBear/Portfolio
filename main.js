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
    image = "img/Misc/guh.png"
    desc = "TEMPDESC aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    link = "Projects/Template.html"
    id = "Test"
    order = -1
}


//English Translation
const translationEn = {

    //Every page
    navHome: "Home",
    navProj: "Projects",
    navMe: "About Me",
    languageSelectEn: "English",
    languageSelectNl: "Dutch",

    //Home page
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
}


//Nederlandse vertaling
const translationNl = {

    //Elke pagina
    navHome: "Huis",
    navProj: "Projecten",
    navMe: "Over Mij",
    languageSelectEn: "Engels",
    languageSelectNl: "Nederlands",

    //Voorpagina
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
}


//Pirates speech
const translationPi = {

    //All sails
    navHome: "Back to Ship",
    navProj: "Booty",
    navMe: "'Bout Captain",
    languageSelectEn: "Land speech",
    languageSelectNl: "Other land speech",

    //Ship's paper
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
}


function createCard(cardInfo) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style="max-width:25%;"

    const cardImg = document.createElement('img');
    cardImg.setAttribute('class','card-img-top')
    cardImg.src = cardInfo.image;

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
    cardButton.href = cardInfo.link;
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
    "img/2022/pong/Pong_2.png",
    "Projects/2022/Pong.html",
    "Pong",
    0
),
    new gameCard("Tank Game",
    "The Tank Game was the second game we made at school. It is a one device turn based pvp game with multiple type of bullets.",
    "img/2022/tank/Tank_3B.png",
    "Projects/2022/Tank.html",
    "Tank",
    1
),
    new gameCard("Race Game",
    "The Race Game was the third game I made in school. It had a shop , achievements , upgrades and much more.",
    "img/2023/race/RaceGame.png",
    "Projects/2023/Race.html",
    "RaceGame",
    2
),
    new gameCard("Minesweeper but Bad",
    "Minesweeper is a remake of the original minesweeper, made since we werent allowed to play minesweeper in class.",
    "img/2023/minesweeper/Mine_1.png",
    "Projects/2023/Mine.html",
    "Mine",
    3
),
    new gameCard("Code Armada: Crash Guardians",
    "Code Armada: Crash Guardians is a Tower Defense Game, where the main objective is to survive as many waves as you can!",
    "img/2023/code_armada/CA-Main.png",
    "Projects/2023/CodeArmada.html",
    "CACG",
    4
),
];
console.log(allCards);

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
    console.log(currentCards)
    
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
                if(order == "Recent"){
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
            console.log(i+ (down * 4))
        }
    
    }
    
}

placeCards(document.getElementById('RecentProj'),"Recent");
placeCards(document.getElementById('AbcProj'),"Abc");

//Checks if the select got changed
const languageSelectOp = document.getElementById("select");
    languageSelectOp.addEventListener("change",(event) => {
        localStorage.setItem('language',event.target.value)
        setLanguageButBetter(event.target.value)
    });

const setLanguageButBetter = (language) => {
    let allText = document.querySelectorAll('p,span,div,a,option,h1,h2,h3,h4,h5');
    let lang = translationEn;
    if(language == "Nl"){
        lang = translationNl
    }else if(language == "Pi"){
        lang = translationPi
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
    setLanguageButBetter(lan)
    //Sets specifically the select to be the language
    languageSelectOp.value = lan;

}