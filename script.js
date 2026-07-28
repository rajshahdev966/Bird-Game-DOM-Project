/* ==========================================
   DOM ELEMENTS SELECTIONS
============================================= */

const main = document.querySelector("main");
const section = document.querySelector("section");
const bird = document.querySelector("#bird-play-img");
const startBut = document.querySelector("#start-play-button");
const gameLost = document.querySelector("dialog");
const scoreValue = document.querySelector("#current-score");
const liveScore = document.querySelector("#live-score-display");
const homeBut = document.querySelector("#home-button");
const tryBut = document.querySelector("#try-button");
const maxScoreDisplay = document.querySelector("#best-score");

/* ==========================================
   GAME VARIABLES
============================================= */

let birdFromTop = 200;
let gravity = 2;
let gravityInterval;
let score = 0;
let allPipes = [];
const GAP = 225;
const PIPE_MIN_HEIGHT = 50;
const PIPE_SPACING = 300;
const PIPE_WIDTH = 85;
const PIPE_AT_A_TIME = 7;
const PIPE_MOVE_RATE = 2.2;

/* ==========================================
   GAME AUDIO
============================================= */

const BIRD_WING_VOICE = new Audio("sfx_wing.mp3");
const BIRD_DIE_VOICE = new Audio("sfx_die.mp3");
const BIRD_SCORE_VOICE = new Audio("sfx_point.mp3");

/* ==========================================
   GAME INITIALIZATION
============================================= */

scoreValue.textContent = score;
liveScore.textContent = score;

let gameRunning = false;

let gameForward;

const displayUpdate = (forMain, forSection, forGameLost)=>{
  main.style.display = forMain;
  section.style.display = forSection;
  gameLost.style.display = forGameLost;
}

displayUpdate("flex", "none", "none")

const pipeArrGen = () => {
  for (let i = 0; i < PIPE_AT_A_TIME; i++) {
    const topHeight =
      Math.random() * (section.clientHeight - GAP - PIPE_MIN_HEIGHT) +
      PIPE_MIN_HEIGHT;
    let pipe = {
      pipe: i,
      position: section.clientWidth + (PIPE_SPACING + PIPE_WIDTH) * i,
      topHeight,
      bottomHeight: section.clientHeight - topHeight - GAP,
      isScore: false,
    };
    allPipes.push(pipe);
  }
};

const gameStart = () => {
  displayUpdate("none", "flex", "none")
  gameRunning = true;
  pipeArrGen();
  genPipes();
};

/* ==========================================
   BIRD FUNCTIONS
============================================= */

const birdGravity = () => {
    birdFromTop += gravity;
    bird.style.top = birdFromTop + "px";
};

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

const pipePosUpdate = (elem, pipeTop, pipeDown) => {
  pipeTop.style.left = elem.position + "px";
  pipeDown.style.left = elem.position + "px";
};
const pipeHeightUpdate = (elem, pipeTop, pipeDown) => {
  pipeTop.style.height = elem.topHeight + "px";
  pipeDown.style.height = elem.bottomHeight + "px";
};

const threePeiceGen = (elem, pipeTop, pipeDown) => {
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
  pipePosUpdate(elem, pipeTop, pipeDown);
  pipeHeightUpdate(elem,pipeTop, pipeDown)
  pipeTop.style.top = 0;
  pipeDown.style.bottom = 0;

  section.append(pipeTop, pipeDown);
};

const genPipes = () => {
  allPipes.forEach((elem, index) => {
    const pipeTop = document.createElement("div");
    const pipeDown = document.createElement("div");

    pipeTop.className = "pipe upper-pipes";
    pipeDown.className = "pipe lower-pipes";

    elem.topElement = pipeTop;
    elem.bottomElement = pipeDown;

    // THREE PEICE PIPE WORKING
    threePeiceGen(elem, pipeTop, pipeDown);
  });
};

const updatePipes = ()=>{
  allPipes.forEach((elem, index)=>{
    elem.position -= PIPE_MOVE_RATE;
    pipePosUpdate(elem, elem.topElement, elem.bottomElement);

    let lastPos = allPipes[0].position;
    if (elem.position < -(PIPE_SPACING + PIPE_WIDTH)) {
        for (const pipe of allPipes) {
          if (pipe.position > lastPos) {
            lastPos = pipe.position;
          }
        }

        elem.isScore = false;
        elem.position = lastPos + PIPE_SPACING + PIPE_WIDTH;

        elem.topHeight =
          Math.random() * (section.clientHeight - GAP - PIPE_MIN_HEIGHT) +
          PIPE_MIN_HEIGHT;
        elem.bottomHeight = section.clientHeight - elem.topHeight - GAP;

        pipePosUpdate(elem, elem.topElement, elem.bottomElement);
        pipeHeightUpdate(elem, elem.topElement, elem.bottomElement);
      }
  })
}

let gameRunInt;

const gameLoop = ()=>{
  birdGravity()
  updatePipes();
  BirdCollide();
  scoreCount();
}

gameRunInt = setInterval(gameLoop, 10)

/* ==========================================
   SCORE FUNCTIONS
============================================= */

let storedMaxScore = JSON.parse(localStorage.getItem("maxScore")) ?? 0;
maxScoreDisplay.textContent = storedMaxScore;

const scoreCount = () => {
  for (const pipe of allPipes) {
    if (pipe.position < -PIPE_WIDTH) {
      if (!pipe.isScore) {
        pipe.isScore = !pipe.isScore;
        score++;
        scoreValue.textContent = score;
        liveScore.textContent = score;
        BIRD_SCORE_VOICE.play();
        if (score > storedMaxScore) {
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
  clearInterval(gameRunInt)
  displayUpdate("none", "none", "flex")
  birdFromTop = 200;
};

/* ==========================================
   EVENT LISTENERS
============================================= */

startBut.addEventListener("click", () => {
  gameStart();
  gameLoop();
});

document.addEventListener("keydown", (e) => {
  // e.code gives Space and e.key gives {space}
  if (!gameRunning) return;
  if (e.code == "Space") {
    birdFromTop -= 60;
    bird.style.top = birdFromTop + "px";
    BIRD_WING_VOICE.cloneNode(true).play();
  }
});

homeBut.addEventListener("click", () => {
  window.location.reload();
});
