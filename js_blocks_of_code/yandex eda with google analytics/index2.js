const showACharacterDiv = (char) => {
    let char1 = "Ameli";
    let char2 = "Fibi";
    let char3 = "Sheldon";
    let char4 = "Toni";
    let char5 = "Vincent";

    let allCharacters = document.querySelectorAll(".character-wrapper");

    console.log('char ', char);

    let charDiv = document.createElement("div");
    if (char1 === char) charDiv = document.querySelector("#character-1");
    if (char2 === char) charDiv = document.querySelector("#character-2");
    if (char3 === char) charDiv = document.querySelector("#character-3");
    if (char4 === char) charDiv = document.querySelector("#character-4");
    if (char5 === char) charDiv = document.querySelector("#character-5");

    console.log("allCharacters.length ", allCharacters.length)

    for (let i = 0; i < allCharacters.length; i++) {
        allCharacters[i].style.display = "none";
    }

    console.log(charDiv)

    if(typeof charDiv !== "undefined") charDiv.style.display = "flex";
}

let url = window.location.href;
const character = url.split('char=').pop();

showACharacterDiv(character.toString());

