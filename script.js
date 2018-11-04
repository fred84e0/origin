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
    document.querySelector("#start").classList.remove("hide");
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

    startGame();
}


//klik på settingsknap

document.querySelector("#settings_knap").addEventListener("click", showSettings);

function showSettings() {

    console.log("showSettings");

    document.querySelector("#settings").classList.remove("hide");

}

document.querySelector("#s_knap3").addEventListener("click", hideSettings);



function hideSettings() {

    console.log("hideSettings");

    document.querySelector("#settings").classList.add("hide");


}


function startGame() {
    console.log("startGame");
    //skjul startskærm

    document.querySelector("#start").classList.remove("show");
    document.querySelector("#start").classList.add("hide");


    //vis spilskærm

    document.querySelector("#game").classList.add("show");


    //Gode skruer
    document.querySelector("#skrue0").classList.add("godskruea");
    document.querySelector("#skrue1").classList.add("godskruea");
    document.querySelector("#skrue2").classList.add("godskruea");
    document.querySelector("#skrue3").classList.add("godskruea");
    document.querySelector("#skrue4").classList.add("godskruea");

    //Daarlige skruer
    document.querySelector("#daarlig_skrue0").classList.add("daarligskruea");
    document.querySelector("#daarlig_skrue1").classList.add("daarligskruea");
    document.querySelector("#daarlig_skrue2").classList.add("daarligskruea");
    document.querySelector("#daarlig_skrue3").classList.add("daarligskruea");

    //Iltflaske
    document.querySelector("#iltflaske").classList.add("iltflaske0");




}

let points = 0;
document.querySelector("#skrue0").addEventListener("click", clickGodSkrue);
document.querySelector("#skrue1").addEventListener("click", clickGodSkrue);
document.querySelector("#skrue2").addEventListener("click", clickGodSkrue);
document.querySelector("#skrue3").addEventListener("click", clickGodSkrue);
document.querySelector("#skrue4").addEventListener("click", clickGodSkrue);

function clickGodSkrue() {
    console.log("click god skrue");
    console.log(this);



    points++;
    console.log(points);
    document.querySelector("#points").textContent = points;

    this.classList.add("paused");
    this.classList.add("hide");


    console.log(points);
    document.querySelector("#points").innerHTML = points;
    let myNumber = Math.floor((Math.random() * 5) + 1);
    console.log("tilfældigt tal: " + myNumber);
    this.classList = "godskruea skrue" + myNumber;



    //this.classList.remove("godskruea");

    gameStatus();




}

document.querySelector("#daarlig_skrue0").addEventListener("click", clickDaarligSkrue);
document.querySelector("#daarlig_skrue1").addEventListener("click", clickDaarligSkrue);
document.querySelector("#daarlig_skrue2").addEventListener("click", clickDaarligSkrue);
document.querySelector("#daarlig_skrue3").addEventListener("click", clickDaarligSkrue);

function clickDaarligSkrue() {
    console.log("click daarlig skrue");
    console.log(this);

    points--;
    points--;
    console.log(points);
    document.querySelector("#points").textContent = points;


    this.classList.add("paused");
    this.classList.add("hide");



    console.log(points);
    document.querySelector("#points").innerHTML = points;
    let myNumber1 = Math.floor((Math.random() * 4) + 1);
    console.log("tilfældigt tal: " + myNumber1);
    this.classList = "daarligskruea daarlig_skrue" + myNumber1;




}



document.querySelector("#iltflaske").addEventListener("click", clickIltflaske);

function clickIltflaske() {
    console.log("click iltflaske");

    document.querySelector("#iltflaske").classList.add("hide");


}

function gameStatus() {

    if (points == 4) {
        levelComplete();
    }




}


function levelComplete() {
    console.log("level complete");


    document.querySelector("#levelcomplete").classList.add("show");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#game").classList.add("hide");


}
