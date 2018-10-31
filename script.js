console.log("hej med dig");

//window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    //Nulstil alting



    //Den her er fucking vigtig - den gør at man kommer videre til næste "function" (stadie)    ----    den kalder på alle functions

    showStart();
}

function showStart() {
    console.log("showStart");
    //vis startskærm

    document.querySelector("#start").classList.add("show");

    //start animation på startknap

    document.querySelector("#start_spil_knap").classList.add("pulse");

}

//klik på startknap
document.querySelector("#start_spil_knap").addEventListener("click", hideStart);

function hideStart() {
    console.log("hideStart");
    //stop animation på startknap

    document.querySelector("#start_spil_knap").classList.remove("pulse");

    //fade startskærm ud

    document.querySelector("#start").classList.add("fade_out");


    //når fade animationen er færdig -> startGame
}

function startGame() {
    console.log("startGame");
    //skjul startskærm

    document.querySelector("#start").classList.remove("show");


    //vis spilskærm

    document.querySelector("#game").classList.add("show");

}
