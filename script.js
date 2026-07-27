/* ==========================================
   DOM ELEMENTS SELECTIONS
============================================= */

const main = document.querySelector("main");
const section = document.querySelector("section");
const bird = document.querySelector("#bird-play-img");
const startBut = document.querySelector("#start-play-button");
const gameLost = document.querySelector("dialog");
const scoreValue = document.querySelector("#current-score")
const liveScore = document.querySelector("#live-score-display")
const homeBut = document.querySelector("#home-button")
const tryBut = document.querySelector("#try-button")
const maxScoreDisplay = document.querySelector("#best-score")

/* ==========================================
   GAME VARIABLES
============================================= */

let birdFromTop = 200;
let gravity = 3;
let gravityInterval;
let score = 0;
let allPipes = [];
const GAP = 225;
const PIPE_MIN_HEIGHT = 50;
const PIPE_SPACING = 300;
const PIPE_WIDTH = 85;

/* ==========================================
   GAME AUDIO
============================================= */

const BIRD_WING_VOICE = new Audio("sfx_wing.mp3");
const BIRD_DIE_VOICE = new Audio("sfx_die.mp3");
const birdPoint = new Audio("sfx_point.mp3");

/* ==========================================
   GAME INITIALIZATION
============================================= */

main.style.display = "flex";
section.style.display = "none";
gameLost.style.display = "none";

scoreValue.textContent = score;
liveScore.textContent = score;

let gameRunning = false;

let gameForward;


const gameStart = () => {
  main.style.display = "none";
  section.style.display = "flex";
  gameLost.style.display = "none";
  gameRunning = true;
  for (let i = 0; i <= 7; i++) {
    const topHeight = Math.random() * (section.clientHeight - GAP - PIPE_MIN_HEIGHT) + PIPE_MIN_HEIGHT;
    let pipe = {
      pipe: i,
      position: section.clientWidth + (PIPE_SPACING + PIPE_WIDTH) * i,
      topHeight,
      bottomHeight: section.clientHeight - topHeight - GAP,
      isScore: false,
    };
    allPipes.push(pipe);
  }
  genPipes();
};

/* ==========================================
   BIRD FUNCTIONS
============================================= */

const birdGravity = () => {
  gravityInterval = setInterval(() => {
    birdFromTop += gravity;
    bird.style.top = birdFromTop + "px";
  }, 20);
}; 

let checkBirdStatus = setInterval(() => {
  BirdCollide();
  scoreCount();
}, 5);

let BirdCollide = () => {
  for (const pipe of allPipes) {
    if (pipe.position < bird.clientWidth && pipe.position > -85) {
      if (
        birdFromTop < pipe.topHeight ||
        birdFromTop + bird.clientHeight > pipe.topHeight + GAP
      ) {
        gameOver();
      }
    }
  }
  if (birdFromTop < 0 || birdFromTop > document.body.clientHeight - 50) {
    gameOver();
  }
};

/* ==========================================
   PIPE FUNCTIONS
============================================= */

const genPipes = () => {
  allPipes.forEach((elem, index) => {
    const pipeTop = document.createElement("div");
    const pipeDown = document.createElement("div");

    pipeTop.className = "pipe upper-pipes";
    pipeDown.className = "pipe lower-pipes";

    // Here we never stored the DOM object if in future we need it we have to sotre fit in object

    elem.topElement = pipeTop;
    elem.bottomElement = pipeDown;

    // THREE PEICE PIPE WORKING

    const capOfUp = document.createElement("div");
    const capOfDown = document.createElement("div");
    const tunnelBody1 = document.createElement("div");
    const tunnelBody2 = document.createElement("div");

    capOfUp.className += "cap-of-up cap";
    capOfDown.className += "cap-of-down cap";
    tunnelBody1.className = "tunnel-body-img";
    tunnelBody2.className = "tunnel-body-img";

    pipeTop.append(capOfUp, tunnelBody1);
    pipeDown.append(capOfDown, tunnelBody2);

    // THREE PEICE PIPE ENDING

    pipeTop.style.height = elem.topHeight + "px";
    pipeDown.style.height = elem.bottomHeight + "px";

    pipeTop.style.left = elem.position + "px";
    pipeDown.style.left = elem.position + "px";

    pipeTop.style.top = 0;
    pipeDown.style.bottom = 0;

    section.append(pipeTop, pipeDown);

    elem.gameForward = setInterval(() => {
      elem.position -= 2;
      pipeTop.style.left = elem.position + "px";
      pipeDown.style.left = elem.position + "px";

      let lastPos = allPipes[0].position;
      if (elem.position < -(PIPE_SPACING + PIPE_WIDTH)) {
        for (const pipe of allPipes) {
          if (pipe.position > lastPos) {
            lastPos = pipe.position;
          }
        }

        elem.isScore = false;
        elem.position = lastPos + PIPE_SPACING + PIPE_WIDTH;


        pipeTop.style.left = elem.position + "px";
        pipeDown.style.left = elem.position + "px";

        elem.topHeight = Math.random() * (section.clientHeight - GAP - PIPE_MIN_HEIGHT) + PIPE_MIN_HEIGHT;
        elem.bottomHeight = section.clientHeight - elem.topHeight - GAP;

        pipeTop.style.height = elem.topHeight + "px";
        pipeDown.style.height = elem.bottomHeight + "px";
      }
    }, 10);
  });
};

/* ==========================================
   SCORE FUNCTIONS
============================================= */

let storedMaxScore = JSON.parse(localStorage.getItem("maxScore")) ?? 0;
maxScoreDisplay.textContent = storedMaxScore;

const scoreCount = () => {
    for(const pipe of allPipes){
        if(pipe.position < -PIPE_WIDTH){
            if(!pipe.isScore){
                pipe.isScore = !pipe.isScore;
                score++;
                scoreValue.textContent = score;
                liveScore.textContent = score;
                birdPoint.play();
                if(score> storedMaxScore){
                    localStorage.setItem("maxScore", JSON.stringify(score));
                    maxScoreDisplay.textContent = score;
                }
            }
        }
    }
};

/* ==========================================
   GAME OVER FUNCTIONS
============================================= */

const gameOver = () => {
  BIRD_DIE_VOICE.play();
  gameRunning = false;
  for (const pipe of allPipes) {
    clearInterval(pipe.gameForward);
  }
  clearInterval(gravityInterval);
  clearInterval(checkBirdStatus);
  main.style.display = "none";
  section.style.display = "none";
  gameLost.style.display = "flex";
  birdFromTop = 200;
};

/* ==========================================
   EVENT LISTENERS
============================================= */


startBut.addEventListener("click", () => {
  gameStart();
  birdGravity();
});

document.addEventListener("keydown", (e) => {
  // e.code gives Space and e.key gives {space}
  if(!gameRunning) return;
    if (e.code == "Space") {
      birdFromTop -= 60;
      bird.style.top = birdFromTop + "px";
      BIRD_WING_VOICE.cloneNode(true).play();
    }
});


homeBut.addEventListener('click', ()=>{
    window.location.reload();
})
