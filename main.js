class gameCard{
    constructor(newName,newDesc,newImage,newLink,newId,newOrder,newTags){
        this.name = newName
        this.image = newImage
        this.desc = newDesc
        this.link = newLink
        this.id = newId
        this.order = newOrder
        this.tags = newTags
    }
    name = "TEMPNAME"
    image = "./Images/Misc/guh.png"
    desc = "TEMPDESC aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    link = "./Projects/Template.html"
    id = "Test"
    order = -1
    tags = ["Game","Unity"]
}

console.log("Site Version: 7")

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
    ItchPageUn: "Itch.io page unavailable!",
    NoDownload: "No download available",

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
    MineTitle: "Minesweeper Remade",
    MineDesc: "Minesweeper is a remake of the original minesweeper, made since we werent allowed to play minesweeper in class.",

    //Code Armada: Crash Guardians
    CACGTitle: "Code Armada: Crash Guardians",
    CACGDesc: "Code Armada: Crash Guardians is a Tower Defense Game, where the main objective is to survive as many waves as you can!",

    //Virus Runner
    VirusTitle: "Virus Runner",
    VirusDesc: "The first game jam I ever did: An infinite runner. Theme: \"To infinity and beyond\"",

    //Lighten Up
    LightenTitle: "Lighten Up!",
    LightenDesc: "A Global Game Jam game with the theme: \"Make me laugh\".",
    
    //StoryFixer
    StoryTitle: "StoryFixer",
    StoryDesc: "\"Once upon a time\" was the theme for the Noorderpoort Game Jam of 2024.",

    //RealTime
    RealTitle: "RealTime",
    RealDesc: "A multiplayer Real Time Strategy game, made as a group project for school.",

    //Zandvoort Turbo Tour
    ZTTTitle: "Zandvoort Turbo Tour",
    ZTTDesc: "A racing game made for a Deep Dive.",

    //Give me a promotion
    ProTitle: "Give me a promotion",
    ProDesc: "A government serious game about learning how to name and sort files",

    //Text Based RPG
    TBRTitle: "TBRPG",
    TBRDesc: "A text based RPG with ascii art",

    //Text Based Adventure
    TBATitle: "TextBased",
    TBADesc: "A text based adventure with multiple endings",

    //Misc CS
    CSTitle: "Misc C# Projects",
    CSDesc: "Other smaller C# projects",

    //Misc Unity
    UnityTitle: "Misc Unity Projects",
    UnityDesc: "Other smaller Unity projects",

    // -- Project Pages

    //Pong
    PongName: "Pong",
    PongChapter1: "V1",
    PongText1: "\"Pong is a two-dimensional sports game that simulates table tennis\"\n but I'm sure everyone knows that. One of the great qualities of this is that Pong is one of the easiest games to make. That is why Pong was the first project I ever made at school. The project only lasted a few weeks so there wasnt a lot of time to make the project better.",
    PongText2: "Since I was new to programming I really avoided coding a bit for Pong. Most of the V1 code is made by school or by classmates. I mostly focussed on the art and left the programming for the second project we had: the Tank Game. Although I wasn't focussing on it, I did get to know the basics of unity with this project.",

    PongChapter2: "V2",
    PongText3: "Almost 250 days after the full completion of Pong I started to work on V2. V2 was finished in around 150 days and included a full code rework, redone art (as seen in the image) and it finally added options. Although the update didnt add much in gameplay I do really like what it did add in gameplay.",
    PongText4: "The update allowed you to customize most things in the game. These settings allow the game to still be fun even if its basic. Playing with less pedal speed can really make the game a challenge and playing with a snail ball that goes twice as fast every time it hits something can be fun. There is also an option to add more balls into the game, allowing up to 10 pong balls in a game at once which can very quickly get chaotic.",
    PongText5: "A main part of the update was the complete art rework. I don't think any V1 art still exists in V2. The art was remade to be consistant in size, and to just look smoother. This update also added particles to the game, making it feel more responsive if you score or if the ball bounces. It also added the ball waiting for a few seconds before moving at the start or on a score. A \"Christmas\" setting was also added, which changes all the art to be Christmas themed.",

    //Tank
    TankName: "Tank Game",
    TankText1: "The tank game is a single device 2d pvp game in which you shoot at the enemies with different types of bullets. The different types of bullets do different amounts of damage and move different. The game also has a boss mode, where you and the other person face a boss that does attacks based on its health.",
    TankText2: "This was my second school project. Since Pong was full focus on art I made sure this one was focussed on code. The game is decently small and was made 5 weeks so it does not have a lot of content, but I do want to expand on it at some point. Boss mode was added after I finished all the requirements for the game.",

    //Race
    RaceName: "Race Game",
    RaceText1: "The race game is a pve racing game with multiple powerups and upgrades. It has an upgrades shop and a few achievements with skins. The upgrades are bought with coins, which you get after finishing the race or by using powerups. There are built in \"dev tools\" which the player can turn on with the press of a button, basically giving the player cheats if they know the buttons. The players progress also saves.",
    RaceText2: "I was not very interested in the racing part of the race game, so I focused on just about everything else. I made a shop for upgrades, added achievements, skins, settings and the list goes on and on. I made sure all the players progress was saved by using playerprefs so they could play again later. The race game was the 3rd school project and had double the time as Pong or the Tank Game.",

    //MineSweeper
    MineName: "MineSweeper",
    MineText1: "Minesweeper Remade is a small recreation of the classic Minesweeper that was made in 2 days. It does not guarantee a big area at the start of the game and was only made because me and a classmate were not allowed to play minesweeper during lessons unless we were making it. Their minesweeper is linked on the itch.io page.",

    //Code Armada: Crash Guardians
    CodeName: "Code Armada: Crash Guardians",
    CodeText1: "Code Armada: Crash Guardians is an endless tower defence game where you protect your CPU from enemies such as water, fire and electricity. You can do this by placing 3 different types of towers or a trap around the map. There are 2 different motherboards (maps) for you to choose from. Every 10 waves there will be a boss enemy: A stronger version of a normal enemy.",
    CodeText2: "Code Armada: Crash Guardians was the first school group project and we had twice as much time for it as the race game. We were a group of 6, but one of our teammembers quit the school at the start of this project. Although they quit they did come up with the main idea for the game. Most of the code was written by me and NiekMSoftware. Development video ->",
    CodeText3: "The main systems I personally worked on are: The wave spawning system and the tower attacking system. The tower attacking system is sadly not the best and often misses. I did however make sure that even if a bullet misses it still deals damage. The wave spawning system spawns small random groups of enemies. The amount of enemies increases per wave and different types of enemies also spawn later on, and become more common up to a certain amount the more waves the player completes.",

    //Virus Runner
    VirusName: "Virus Runner",
    VirusText1: "Virus Runner was a school game jam game. We had 5 days to make it and had a team of 6. Our team name was \"Team I'll be a bit later\" and as you could have probably guessed: A lot of our team was either later or not there a few days. I was mostly on the art of the game so I only did a few small amount of code. The theme was \"To infinity and beyond\". That is why the game is an endless runner.",

    //Lighten Up!
    LightenName: "Lighten Up!",
    LightenText1: "Lighten Up! is a global game jam game with the theme of \"Make me laugh\". You are the only happy monkey left in a town of sad monkeys. Laugh at them to make them feel better. You have 3 different laughs: A consistent single shot, an area laugh and a fast shot with a big cooldown because it hurts your voice. Once you make all the monkeys laugh you will get sent to a boss fight with a gorilla. After you make the gorilla laugh you win.",
    LightenText2: "This game was made in 2 days with a team of 7. Because this was a global game jam we were allowed to work on it 24/7, unlike the school game jams. Personally I still went home at the end of the days to sleep on my own bed and would return the next day to work on the game more. Due to us having such a big team one big struggle we had was well teamwork and just who was working on what. We also had the issue of going for a story game during a game jam. This is a bad idea since it is basically impossible to get everything you want done in a game jam.",

    //StoryFixer
    StoryName: "StoryFixer",
    StoryText1: "StoryFixer was a school game jam game. The jam was 5 days long and it's theme was \"Once upon a time\". The game has the player going through different stories to fix some problems. There are 3 different stories with their own goals and gameplay. This game ended up winning the \"Fits in theme\" catogory.",
    StoryText2: "The game was made with a group of 5, consisting of 3 first years and 2 second years. I mainly recorded the sounds in the games. This includes both sound effects and the music. I also coded in the dialoge system and most of the settings.",

    //RealTime
    RealName: "Real Time",
    RealText1: "Real Time is an RTS (Real Time Strategy) in which you make your own army, base and attack other people. The game supports multiplayer but also allows you to fight an AI. There are 2 types of resources that you need to collect to build buildings and spawn people.",
    RealText2: "Real Time was made as a school project with a group of 5 people. We were allowed to pick the group ourselves. We had half a school year for this project with grading in the middle and at the end. We really struggled making the multiplayer in the game and due to this the game is lacking in other areas. This was mainly due to only one of us knowing how multiplayer works and the many struggles that come with that. I personally mainly worked on the building in the game and some other small things.",

    //ZTT
    ZTTName: "Zandvoort Turbo Tour",
    ZTTText1: "Zandvoort Turbo Tour is a racing game made for a Deep Dive. You race against 1 other racer in the racetrack of Zandvoort. You have to switch gears and watch the health of your tires while you are driving. If your wheels break while driving you will get a huge debuff. You can fix your wheels in the pitstop.",
    ZTTText2: "ZTT was made for a teacher during a Deep Dive at school. We had 1 school week to make the game and the only requirements we had was to make it a racing game. This game was made with a group of 5 people. Personally I worked on controller/wheel support and wheel breaking/varients",
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
    ItchPageUn: "Kon geen Itch.io pagina vinden!",
    NoDownload: "Kan niet gedownload worden",

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
    MineTitle: "Minesweeper hermaakt",
    MineDesc: "Minesweeper is net als de orginele Minesweeper, en was gemaakt omdat we geen Minesweeper mochten spelen in de klas.",

    //Code Armada: Crash Guardians
    CACGTitle: "Code Armada: Crash Guardians",
    CACGDesc: "Code Armada: Crash Guardians is een Tower Defense Game, waarbij het doel is om zo veel mogelijk waves te overleven!",

    //Virus Runner
    VirusTitle: "Virus Runner",
    VirusDesc: "Mijn eerste Game Jam: een infinite runner. Thema: \"To infinity and beyond\"",
    
    //Lighten Up!
    LightenTitle: "Lighten Up!",
    LightenDesc: "Een Global Game Jam game met een thema van: \"Maak mij aan het lachen\".",

    //StoryFixer
    StoryTitle: "StoryFixer",
    StoryDesc: "\"Once upon a time\" was de thema van de Noorderpoort Game Jam van 2024.",

    //RealTime
    RealTitle: "RealTime",
    RealDesc: "Een multiplayer strategie game dat een groep project voor school was.",

    //Zandvoort Turbo Tour
    ZTTTitle: "Zandvoort Turbo Tour",
    ZTTDesc: "Een race game dat gemaakt is voor een Deep Dive.",

    //Give me a promotion
    ProTitle: "Gun me een promotion",
    ProDesc: "Een serious game over het leren van files een naam geven en te sorteren voor de overheid",

    //Text Based RPG
    TBRTitle: "TBRPG",
    TBRDesc: "Een text RPG met ascii art",

    //Text Based Adventure
    TBATitle: "TextBased",
    TBADesc: "Een text avontuur met meerdere eindes",

    //Misc CS
    CSTitle: "Andere C# Projecten",
    CSDesc: "Andere kleine C# projecten",

    //Misc Unity
    UnityTitle: "Andere Unity Projecten",
    UnityDesc: "Andere kleine Unity projecten",

    // -- Project Pages

    //Pong
    PongName: "Pong",
    PongChapter1: "V1",
    PongText1: "\"Pong is een twee-dimentionale sport spel dat tafel tennis simuleerd.\"\n maar ik denk dat iedereen dat wel weet. Een van de beste dingen aan Pong is dat het makkelijk is om na te maken. Dit is waarom Pong het eerste project dat ik gemaakt had op school. Het project duurde een paar weken dus was er niet veel tijd om het beter te maken.",
    PongText2: "Aangezien ik nieuw was bij programmeren probeerde ik weg te blijven van code schrijven. Daardoor is het meeste van de code geschreven door leraren of klasgenoten. Ik liet het programmeren voor de Tank Game en het meeste van mijn tijd ging dus naar het visuele deel van de game. Ookal keek ik er niet naar leerde ik wel veel van de basics van unity met dit project.",

    PongChapter2: "V2",
    PongText3: "Bijna 250 dagen nadat Pong v1 helemaal klaar was begon ik met V2. V2 was klaar in ongeveer 150 dagen en had alle code helemaal herschreven, alle art hertekend en eindelijk opties gemaakt. Ookal had de update niet veel nieuwe dingen in de game gezet had het wel de game in betere plek gezet.",
    PongText4: "Deze update liet de speler veel dingen kiezen. Pedalen slomer maken kan de game moeilijker maken en een bal dat twee keer zo snel word als het iets raakt is ook leuk. Er is ook een optie om meer pong ballen in een keer te hebben (Maximaal 10) en dat wordt snel chaos.",
    PongText5: "Een groot deel van de update was dat alle pixel art opnieuw was gemaakt. Geen van de V1 pixel art zit nog in V2. Het was opnieuw gemaakt zodat het allemaal dezelfde groote heeft en zodat het er gewoon beter uit ziet. In deze update zitten ook particles, waardoor de een punt scoren het meer waard voelt. Er zat ook bij dat de bal een paar seconden wacht aan het begin en nadat er een punt was gekomen. Er was ook een \"Kerst\" optie bij gekomen wat alle pixel art een kerst thema geeft.",

    //Tank
    TankName: "Tank Game",
    TankText1: "De Tank Game is een 2D pvp game dat je op een device speelt waarbij je op de andere speler schiet met verschillende soorten kogels. De kogels doen verschillende damage en bewegen anders. De game heeft ook een Boss mode, waar jij en een andere speler tegen een baas moeten vechten dat aanvallen doet op basis van zijn health.",
    TankText2: "Dit was mijn tweede project op school. Aangezien Pong helemaal op pixel art in ging zat ik bij dit project meer in op de code. De game is in 5 weken gemaakt en heeft niet veel, maar ik wil wel ooit een update maken. De baas was in de game gezet nadat ik alle dingen wat in de game moesten af had.",

    //Race
    RaceName: "Race Game",
    RaceText1: "De Race Game is een PVE race spel met meerdere powerups en upgrades. Er is een shop waar je de upgrades koopt en een paar achievements dat je skins geeft. Je kan de upgrades kopen met coins. Coins verdien je door een hele race te doen of door powerups te gebruiken. Er zijn built in \"Dev tools\" waarbij de speler een soort cheats heeft, als de optie aan staat. De spelers progressie wordt ook opgeslagen, waardoor de speler later terug kan komen.",
    RaceText2: "Ik vond het race gedeelte van de race game niet heel interessant en daardoor maakte ik veel wat niks met het racen te maken: Een shop, achievements, skins, opties en nog meer. Ik zorgde ervoor dat alle speler progressie word opgeslagen met PlayerPrefs, zodat de speler later weer kan spelen. De Race Game was mijn derde school project en had twee keer zoveel tijd als Pong of de Tank Game.",

    //MineSweeper
    MineName: "MineSweeper",
    MineText1: "Minesweeper hermaakt is een kleine recreatie van het klassieke spel Minesweeper dat in 2 dagen gemaakt is. Het garandeert geen groot vlak aan het begin en was alleen gemaakt omdat ik en een klasgenoot genaamd Mike alleen Minesweeper mochten spelen als we er een zaten te maken. Mike's Minesweeper staat gelinkt op de Itch.io pagina.",

    //Code Armada: Crash Guardians
    CodeName: "Code Armada: Crash Guardians",
    CodeText1: "Code Armada: Crash Guardians is een Tower Defence Game waarin jij je CPU beschermd van vijanden zoals water, vuur en stof. Je doet dit door torens of vallen rond de map neer te zetten. Er zijn 2 verschillende \"moederborden\" (Mappen) om uit te kiezen. Elke 10 waves komt er een boss. Bosses hebben meer HP.",
    CodeText2: "Code Armada: Crash Guardians was het eerste groep project op school en we hadden 2 blokken om het te maken. We waren met een groep van 6 maar een persoon van onze groep ging van de opleiding af. Ookal was dat persoon gestopt met de opleiding heeft hij wel het idee voor het spel verzonnen. Het meeste van de code was gemaakt door mij en NiekMSoftware.",
    CodeText3: "De systemen waar ik persoonlijk aan gewerkt had zijn: De wave, spawning en toren systemen. Ookal had ik moeite met de kogels van de torens accuraat te maken doen ze wel altijd damage, ookal raken ze soms niet. Het spawning systeem spawnt random groepen van enemies, dus 5 van dezelfde random enemy achter elkaar. Het aantal enemies gaat ook per wave omhoog, met verschillende soorten enemies die steeds vaker spawnen in de latere waves.",

    //Virus Runner
    VirusName: "Virus Runner",
    VirusText1: "Virus Runner was een school game jam game. We hadden 5 dagen om het te maken en we hadden een team van 6 mensen. Onze team naam was \"Team ik kom wat later\", en als je al kan raden van de naam: Veel dagen was iemand in ons team later of er helemaal niet. Elke dag veranderde wel wie het was. Ik was vooral bezig met de art voor de game, en deed daardoor weinig code. De game is een eindelose runner, en het thema van de Jam was \"To infinity and beyond\".",

    //Lighten Up!
    LightenName: "Lighten Up!",
    LightenText1: "Lighten Up! is een global game jam game met het thema \"Make me laugh\". Jij bent de enige vrolijke aap in een dorp van depressieve apen. Lach naar hun om ze beter te laten voelen. Je kan op 3 verschillende manieren lachen: Een sneller te vuren shot, een area lach en een snelle shot met een grote cooldown. Nadat je alle apen hebt laten lachen wordt je naar een eind baas gestuurd. De eind baas is een gorilla en als je die hebt laten lachen win je.",
    LightenText2: "Deze game was in 2 dagen gemaakt met een groep van 7. Aangezien dit een Global Game Jam was konden we er 24/7 aan werken. Dit kon niet met de school game jams. Persoonlijk ging ik wel naar huis in de avond om gewoon thuis te slapen en in de ochtend kwam ik weer terug. Aangezien we een grote groep hadden was samen werken en wie waar aan werkt. We hadden ook problemen met een verhaal maken voor een game jam. Dit is een slecht idee omdat je bijna nooit alles af krijgt in een game jam.",

    //StoryFixer
    StoryName: "StoryFixer",
    StoryText1: "-missing",
    StoryText2: "-missing",

    //RealTime
    RealName: "Real Time",
    RealText1: "-missing",
    RealText2: "-missing",

    //ZTT
    ZTTName: "Zandvoort Turbo Tour",
    ZTTText1: "-missing",
    ZTTText2: "-missing",
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
    ItchPageUn: "Map to booty not found!",
    NoDownload: "Can't see booty!",

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

    //Abandon ship!
    VirusTitle: "Abandon ship!",
    VirusDesc: "Ye captain's first Lootin' Race wit' captain's target being: \"To infinity and beyond\"",

    //Light 'em up!
    LightenTitle: "Light 'em up!",
    LightenDesc: "A Global Lootin' Race wit' laughter being the target!",

    //Fixin' tales
    StoryTitle: "Fixin' Tales",
    StoryDesc: "\"Once upon a time\" was the ships target durin' the Captain's Training's Lootin' Race of 2024.",

    //Ye times' real
    RealTitle: "Ye times' real",
    RealDesc: "Ye fleet strategy game, made w ye captain's fleet durin' training.",

    //Zandvoort Turbo Tour
    ZTTTitle: "Lootin' in Zandvoort",
    ZTTDesc: "Lootin' Zandvoort for ye captains quest.",

    //Make me capt'n
    ProTitle: "Make me capt'n",
    ProDesc: "Work t' become the capt'n o' the government",

    //Text Based RPG
    TBRTitle: "Written sails",
    TBRDesc: "Written sails wit' scribbles",

    //Text Based Adventure
    TBATitle: "Written tales",
    TBADesc: "Written tales wit' numerous ends",

    //Misc CS
    CSTitle: "Ye Other C# Booty",
    CSDesc: "Ye smaller C# booty",

    //Misc Unity
    UnityTitle: "Ye Other Unity Booty",
    UnityDesc: "Ye smaller Unity booty",

    // -- Full Booty

    //Pong
    PongName: "Pong",
    PongChapter1: "V1",
    PongText1: "-missing",
    PongText2: "-missing",

    PongChapter2: "V2",
    PongText3: "-missing",
    PongText4: "-missing",
    PongText5: "-missing",

    //Tank
    TankName: "Tank Game",
    TankText1: "-missing",
    TankText2: "-missing",

    //Race
    RaceName: "Race Game",
    RaceText1: "-missing",
    RaceText2: "-missing",

    //MineSweeper
    MineName: "MineSweeper",
    MineText1: "-missing",

    //Code Armada: Crash Guardians
    CodeName: "Code Armada: Crash Guardians",
    CodeText1: "-missing",
    CodeText2: "-missing",
    CodeText3: "-missing",

    //Virus Runner
    VirusName: "Virus Runner",
    VirusText1: "-missing",

    //Lighten Up!
    LightenName: "Lighten Up!",
    LightenText1: "-missing",
    LightenText2: "-missing",

    //StoryFixer
    StoryName: "StoryFixer",
    StoryText1: "-missing",
    StoryText2: "-missing",

    //RealTime
    RealName: "Real Time",
    RealText1: "-missing",
    RealText2: "-missing",

    //ZTT
    ZTTName: "Zandvoort Turbo Tour",
    ZTTText1: "-missing",
    ZTTText2: "-missing",
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
    "./Images/2022/Pong/PongV2_CardImg.png",
    "./Projects/2022/Pong.html",
    "Pong",
    0,
    [
        "Unity",
        "2022",
        "School",
        "Solo",
        "English"
    ]
),
    new gameCard("Tank Game",
    "The Tank Game was the second game we made at school. It is a one device turn based pvp game with multiple type of bullets.",
    "./Images/2022/Tank/Tank_CardImg.png",
    "./Projects/2022/Tank.html",
    "Tank",
    1,
    [
        "Unity",
        "2022",
        "School",
        "Solo",
        "English"
    ]
),
    new gameCard("Race Game",
    "The Race Game was the third game I made in school. It had a shop , achievements , upgrades and much more.",
    "./Images/2023/Race/Race_CardImg.png",
    "./Projects/2023/Race.html",
    "RaceGame",
    2,
    [
        "Unity",
        "2023",
        "School",
        "Solo",
        "English"
    ]
),
    new gameCard("Minesweeper but Bad",
    "Minesweeper is a remake of the original minesweeper, made since we werent allowed to play minesweeper in class.",
    "./Images/2023/Mine/Mine_CardImg.png",
    "./Projects/2023/Mine.html",
    "Mine",
    3,
    [
        "Unity",
        "2023",
        "Home",
        "Solo",
        "English"
    ]
),
    new gameCard("Code Armada: Crash Guardians",
    "Code Armada: Crash Guardians is a Tower Defense Game, where the main objective is to survive as many waves as you can!",
    "./Images/2023/Code_Armada/CA_CardImg.png",
    "./Projects/2023/CodeArmada.html",
    "CACG",
    4,
    [
        "Unity",
        "2023",
        "School",
        "Team",
        "English"
    ]
),
    new gameCard("Virus Runner",
    "The first game jam I ever did: An infinite runner. Theme: \"To infinity and beyond\"",
    "./Images/2023/VirusRunner/Vi_CardImg.png",
    "./Projects/2023/VirusRunner.html",
    "Virus",
    5,
    [
        "Unity",
        "2023",
        "School",
        "GameJam",
        "Team",
        "English"
    ]
),
    new gameCard("Lighten Up!",
    "A global game jam game with the theme: \"Make me laugh\".",
    "./Images/2024/LightenUp/LU_CardImg.png",
    "./Projects/2024/LightenUp.html",
    "Lighten",
    6,
    [
        "Unity",
        "2024",
        "GameJam",
        "Team",
        "English"
    ]
),
new gameCard("StoryFixer",
    "\"Once upon a time\" was the theme for the second school game jam.",
    "./Images/2024/StoryFixer/SF_CardImg.png",
    "./Projects/2024/StoryFixer.html",
    "Story",
    7,
    [
        "Unity",
        "2024",
        "School",
        "GameJam",
        "Team",
        "English"
    ]
),
new gameCard("Real Time",
    "A multiplayer Real Time Strategy game, made as a group project for school. ",
    "./Images/2024/RTS/RTS_CardImg.png",
    "./Projects/2024/RealTime.html",
    "Real",
    8,
    [
        "Unity",
        "2024",
        "School",
        "Team",
        "English"
    ]
),
new gameCard("Zandvoort Turbo Tour",
    "A racing game made for a Deep Dive.",
    "./Images/2024/ZTT/ZTT_CardImg.png",
    "./Projects/2024/ZTT.html",
    "ZTT",
    9,
    [
        "Unity",
        "2024",
        "School",
        "GameJam",
        "Team",
        "English"
    ]
),
/*new gameCard("Give me a promotion!",
    "A government serious game about learning how to name and sort files",
    "./Images/2024/Promotion/Pro_CardImg.png",
    "./Projects/2024/Promotion.html",
    "Pro",
    10,
    [
        "Unity",
        "2024",
        "School",
        "GameJam",
        "Team",
        "Dutch"
    ]
),
new gameCard("TBRPG",
    "A text based RPG with ascii art",
    "./Images/UnknownTime/TBR_CardImg.png",
    "./Projects/UnknownTime/TBRPG.html",
    "TBR",
    11,
    [
        "School",
        "Solo",
        "Console",
        "English"
    ]
),
new gameCard("TextBased",
    "A text based adventure with multiple endings",
    "./Images/UnknownTime/TBA_CardImg.png",
    "./Projects/UnknownTime/TextBased.html",
    "TBA",
    12,
    [
        "School",
        "Solo",
        "Console",
        "English"
    ]
),
new gameCard("Misc C# Projects",
    "Other smaller C# projects",
    "./Images/UnknownTime/Rogue_CardImg.png",
    "./Projects/UnknownTime/MiscCS.html",
    "CS",
    13,
    [
        "School",
        "Home",
        "Solo",
        "Team",
        "Console",
        "English"
    ]
),
new gameCard("Misc Unity projects",
    "Other smaller Unity projects",
    "./Images/UnknownTime/Pirate_CardImg.png",
    "./Projects/UnknownTime/MiscUnity.html",
    "Unity",
    14,
    [
        "Unity",
        "School",
        "Solo"
    ]
),*/
];


function placeCards(place,order,tag){
    if(place != null){
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
        case "Tags":
            while (place.firstChild) {
                console.log("Removed " + place.lastChild)
                place.removeChild(place.lastChild);
            }
            let tagCards = new Array;
            let number = 0;
            for(i = 0; i < currentCards.length; i++){
                for(j = 0; j < currentCards[i].tags.length; j++){
                    if(currentCards[i].tags[j].toLowerCase() == tag.toLowerCase()){
                        tagCards[number] = currentCards[i];
                        number++;
                        j = 999;
                    }
                }
            }

            for(i = 0; i < tagCards.length; i++){
                console.log(tagCards[i]);
            }
            currentCards = tagCards.slice();
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
    
}

placeCards(document.getElementById('RecentProj'),"Recent");
placeCards(document.getElementById('AbcProj'),"Abc");
placeCards(document.getElementById('TagsProj'),"Tags","2022");

//Checks if the select got changed
const languageSelectOp = document.getElementById("select");
    languageSelectOp.addEventListener("change",(event) => {
        localStorage.setItem('language',event.target.value)
        setLanguage(event.target.value)
    });

const tagSelect = document.getElementById("TagSelect");
if(tagSelect != null){
    tagSelect.addEventListener("change",(event) => {placeCards(document.getElementById('TagsProj'),"Tags",event.target.value)});
}

const setLanguage = (language) => {
    let allText = document.querySelectorAll('p,span,div,a,option,h1,h2,h3,h4,h5,source');
    let lang = translationEn;
    if(language == "Nederlands" || language == "Dutch" || language == "Nl"){
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
                if(lang[allText[i].id] == "-missing"){
                    allText[i].innerText = "Missing Translation!"
                }else{
                    allText[i].innerText = lang[allText[i].id]
                }
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

}else{
    setLanguage('En')
}