const translations = {
    En:[
        //Select language button
        "English",
        "Dutch",

        //Title
        "Welcome to the ",
        "Portfolio",
        "site of ",
        "Rudo Verschuren",
        "!",

        //Small Description
        "I make games using the ",
        "Unity Engine",
        ", and am currently learning ",
        "Godot",
        "",

        "Recent Projects"
    ],
    Nl:[
        //Select language button
        "Engels",
        "Nederlands",

        //Title
        "Welkom op de ",
        "Portfolio",
        "site van",
        "Rudo Verschuren",
        "!",

        //Small Description
        "Ik maak games met de ",
        "Unity Engine",
        ", en ben op dit moment ",
        "Godot",
        "aan het leren.",

        "Recente Projecten"
    ],
    Pi:[
        //Select language button
        "Land Speech",
        "Cursed Speech",

        //Title
        "Welcome aboard",
        "Rudo Verschuren's",
        "vessel",
        "",
        "!",

        //Small Description
        "I make games using the ",
        "Unity Engine",
        ", and am currently learning ",
        "Godot",
        "",

        "Yarr"
    ]
}

//All the ID's for the text
let sel1= document.getElementById("sel1")
let sel2 = document.getElementById("sel2")
let ti1 = document.getElementById("ti1")
let ti2 = document.getElementById("ti2")
let ti3 = document.getElementById("ti3")
let ti4p5 = document.getElementById("ti4.5")
let ti4 = document.getElementById("ti4")
let ti5 = document.getElementById("ti5")
let ti6 = document.getElementById("ti6")
let ti7 = document.getElementById("ti7")
let ti8 = document.getElementById("ti8")
let ti9 = document.getElementById("ti9")
let recProj = document.getElementById("RecProj1")
let img = document.getElementById("Img")

//Checks if the select got changed
const languageSelectOp = document.querySelector("select");
languageSelectOp.addEventListener("change",(event) => {
    setLanguage(event.target.value)
});

//Sets the language based on the language string
const setLanguage = (language) => {
    //All the texts
    let textAr = [sel1,sel2,ti1,ti2,ti3,ti4,ti4p5,ti5,ti6,ti7,ti8,ti9,recProj]
    localStorage.setItem('language', language)
    
    //Dutch
    if(language == "Nl"){
        console.log("Set language to " + language);
        for(i = 0; i < textAr.length; i++){
            if(textAr[i] != null){
                textAr[i].innerText = translations.Nl[i];
            }
        }
    }
    //English
    else if(language == "En"){
        console.log("Set language to " + language);
        for(i = 0; i < textAr.length; i++){
            if(textAr[i] != null){
                textAr[i].innerText = translations.En[i];
            }
        }
    }
    //Pirate
    else if(language == "Pi"){
        console.log("Yarrr");
        for(i = 0; i < textAr.length; i++){
            if(textAr[i] != null){
                textAr[i].innerText = translations.Pi[i];
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