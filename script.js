console.log("hej med dig");

window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;
let showSettingsMusic = true;
let timeLeft = 60;

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

    document.querySelector("#s_knap1").addEventListener("click", toggleMusic);
    document.querySelector("#s_knap2").addEventListener("click", toggleEffects);





}

//klik på startknap
document.querySelector("#start_spil_knap").addEventListener("click", hideStart);

function hideStart() {
    console.log("hideStart");
    //stop animation på startknap


    //start musik

    document.querySelector("#musik").play();





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

    document.querySelector("#sprite").addEventListener("animationend", gameOver);


    //skjul startskærm

    document.querySelector("#start").classList.remove("show");
    document.querySelector("#start").classList.add("hide");


    //vis spilskærm

    document.querySelector("#game").classList.add("show");


    //Gode skruer
    document.querySelector("#skrue5").classList.add("godskruea");
    document.querySelector("#skrue1").classList.add("godskruea");
    document.querySelector("#skrue2").classList.add("godskruea");
    document.querySelector("#skrue3").classList.add("godskruea");
    document.querySelector("#skrue4").classList.add("godskruea");

    //Daarlige skruer
    document.querySelector("#daarlig_skrue4").classList.add("daarligskruea");
    document.querySelector("#daarlig_skrue1").classList.add("daarligskruea");
    document.querySelector("#daarlig_skrue2").classList.add("daarligskruea");
    document.querySelector("#daarlig_skrue3").classList.add("daarligskruea");

    //Iltflaske
    document.querySelector("#iltflaske").classList.add("iltflaske");

    document.querySelector("#sprite").classList.add("energy_sprite");

    tidenGaar();

}

let points = 0;
document.querySelector("#skrue5").addEventListener("click", clickGodSkrue);
document.querySelector("#skrue1").addEventListener("click", clickGodSkrue);
document.querySelector("#skrue2").addEventListener("click", clickGodSkrue);
document.querySelector("#skrue3").addEventListener("click", clickGodSkrue);
document.querySelector("#skrue4").addEventListener("click", clickGodSkrue);



function clickGodSkrue() {
    console.log("click god skrue");
    console.log(this);


    points++;
    console.log(points);
    document.querySelector("#points p").textContent = points;


    //this.classList.add("paused");
    this.classList.add("fade_out");

    document.querySelector("#skrue5").addEventListener("animationend", nyGodSkrue);
    document.querySelector("#skrue1").addEventListener("animationend", nyGodSkrue);
    document.querySelector("#skrue2").addEventListener("animationend", nyGodSkrue);
    document.querySelector("#skrue3").addEventListener("animationend", nyGodSkrue);
    document.querySelector("#skrue4").addEventListener("animationend", nyGodSkrue);


    document.querySelector("#godlyd").play();
    document.querySelector("#godlyd").currentTime = 0;


    gameStatus();

}



function nyGodSkrue() {
    console.log(points);
    document.querySelector("#points p").innerHTML = points;
    let myNumber = Math.floor((Math.random() * 5) + 1);
    console.log("tilfældigt tal: " + myNumber);
    this.classList = "godskruea skrue" + myNumber;


    //this.classList.remove("paused");
    this.classList.remove("fade_out");

}



document.querySelector("#daarlig_skrue4").addEventListener("click", clickDaarligSkrue);
document.querySelector("#daarlig_skrue1").addEventListener("click", clickDaarligSkrue);
document.querySelector("#daarlig_skrue2").addEventListener("click", clickDaarligSkrue);
document.querySelector("#daarlig_skrue3").addEventListener("click", clickDaarligSkrue);





function clickDaarligSkrue() {
    console.log("click daarlig skrue");
    console.log(this);

    points--;
    points--;
    console.log(points);
    document.querySelector("#points p").textContent = points;


    document.querySelector("#prut").play();
    document.querySelector("#prut").currentTime = 0;


    //this.classList.add("paused");
    this.classList.add("fade_out");



    document.querySelector("#daarlig_skrue4").addEventListener("animationend", nyDaarligSkrue);
    document.querySelector("#daarlig_skrue1").addEventListener("animationend", nyDaarligSkrue);
    document.querySelector("#daarlig_skrue2").addEventListener("animationend", nyDaarligSkrue);
    document.querySelector("#daarlig_skrue3").addEventListener("animationend", nyDaarligSkrue);

}




function nyDaarligSkrue() {

    console.log(points);
    document.querySelector("#points p").innerHTML = points;
    let myNumber1 = Math.floor((Math.random() * 4) + 1);
    console.log("tilfældigt tal: " + myNumber1);
    this.classList = "daarligskruea daarlig_skrue" + myNumber1;


    this.classList.remove("fade_out");

}





document.querySelector("#iltflaske").addEventListener("click", clickIltflaske);

function clickIltflaske() {
    console.log("click iltflaske");

    document.querySelector("#iltflaske").classList.add("fade_out");
    document.querySelector("#sprite").classList.remove("energy_sprite");

    document.querySelector("#iltflaske").addEventListener("animationend", refillEnergy);
}



function refillEnergy() {
    console.log("nu er der fuld energi");

    document.querySelector("#sprite").classList.add("energy_sprite");


    document.querySelector("#iltflaske").classList.add("iltflaske");
    document.querySelector("#iltflaske").classList.remove("fade_out");


}





function gameStatus() {

    if (points == 15) {
        levelComplete();
    }

    if (points == -5) {
        gameOver();
    }


}

function tidenGaar() {
    console.log("funktionen tidenGaar");

    timeLeft--;


    if (timeLeft > 0) {

        setTimeout(tidenGaar, 1000);

    } else {
        gameOver();
    }


    console.log(timeLeft);
    document.querySelector("#time p").textContent = timeLeft;


}


function gameOver() {
    console.log("gameOver");

    document.querySelector("#gameover").classList.add("show");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#game").classList.add("hide");

    document.querySelector("#restart").addEventListener("click", restartGame);
}


function levelComplete() {
    console.log("level complete");


    document.querySelector("#levelcomplete").classList.add("show");
    document.querySelector("#levelcomplete").classList.remove("hide");
    document.querySelector("#game").classList.add("hide");

    document.querySelector("#restart1").addEventListener("click", restartGame);

}

function restartGame() {

    location.reload();
}



function toggleMusic() {

    if (showSettingsMusic == true) {

        showSettingsMusic = false;
        musicOff();
    } else {
        showSettingsMusic = true;
        musicOn();
    }


}


function musicOff() {
    console.log("nu fjerner du musikken");
    document.querySelector("#musik").muted = true;

    document.querySelector("#s_knap1").classList.remove("on");
    document.querySelector("#s_knap1").classList.add("off");


}

function musicOn() {
    console.log("musikken spiller");


    document.querySelector("#musik").muted = false;

    document.querySelector("#s_knap1").classList.remove("off");
    document.querySelector("#s_knap1").classList.add("on");

}


function toggleEffects() {

    if (showSettingsEffektSound == true) {

        showSettingsEffektSound = false;
        effectsOff();
    } else {
        showSettingsEffektSound = true;
        effectsOn();
    }
}


function effectsOff() {
    console.log("nu fjerner du lydeffekter");
    document.querySelector("#godlyd").muted = true;
    document.querySelector("#prut").muted = true;

    document.querySelector("#s_knap2").classList.remove("on");
    document.querySelector("#s_knap2").classList.add("off");


}



function effectsOn() {
    console.log("nu er der lydeffekter");
    document.querySelector("#godlyd").muted = false;
    document.querySelector("#prut").muted = false;

    document.querySelector("#s_knap2").classList.add("on");
    document.querySelector("#s_knap2").classList.remove("off");


}
