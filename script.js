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

const BIRD_INITIAL_FROM_TOP = 200;
let birdFromTop = BIRD_INITIAL_FROM_TOP;
let gravity = 0.1;
let gravityInterval;
let score = 0;
let allPipes = [];
const GAP = 225;
const PIPE_MIN_HEIGHT = 50;
const PIPE_SPACING = 300;
const PIPE_WIDTH = 85;
const PIPE_AT_A_TIME = 7;
const PIPE_MOVE_RATE = 2.2;
let birdVelocity = 0;



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
} // Used for changing the display property 

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
}; // Used for generating the intial array of pipes and give them approptiate height

const gameStart = () => {
  displayUpdate("none", "flex", "none")
  gameRunning = true;
  pipeArrGen();
  genPipes();
  const BIRD_X_POS = section.clientWidth * 0.3;
bird.style.left = `${BIRD_X_POS}px`;
}; //Called at the start of the game and used to change display property, call pipe generation and call genPipes

/* ==========================================
   BIRD FUNCTIONS
============================================= */

const birdGravity = () => {
    birdVelocity += gravity;
   // bird.style.top = birdFromTop + "px";

  }; //Manipulate the gravity for bird 

let BirdCollide = () => {
  for (const pipe of allPipes) {
    if (pipe.position < (section.clientWidth * 0.3) + bird.clientWidth && pipe.position > section.clientWidth * 0.3) {///////////////////////////////////////////////////////
      if (
        birdFromTop < pipe.topHeight ||
        birdFromTop + bird.clientHeight > pipe.topHeight + GAP
      ) {
        gameOver();
      }
    }
  }
  if (birdFromTop < 0 || birdFromTop > document.body.clientHeight - 50) {//////////////////////////////////////////
    gameOver();
  }
}; //Check whether the bird collide or not and also change the props like wise

/* ==========================================
   PIPE FUNCTIONS
============================================= */

const pipePosUpdate = (elem, pipeTop, pipeDown) => {
  pipeTop.style.left = elem.position + "px";
  pipeDown.style.left = elem.position + "px";
}; //Updates the position of pipe using left property
const pipeHeightUpdate = (elem, pipeTop, pipeDown) => {
  pipeTop.style.height = elem.topHeight + "px";
  pipeDown.style.height = elem.bottomHeight + "px";
}; // Updates the height of the pipe so, used when we randomize the height 

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

  pipePosUpdate(elem, pipeTop, pipeDown);
  pipeHeightUpdate(elem,pipeTop, pipeDown)
  pipeTop.style.top = 0;
  pipeDown.style.bottom = 0;

  section.append(pipeTop, pipeDown);
}; // Generate three parts for the pipe and append it in pipe

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
}; // Generate all the pipes that are in array of allPipes

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
} //Updates the position by calling other functions and randomise the height

let gameRunInt;

const gameLoop = ()=>{
  if(!gameRunning) return;
  birdGravity()
  updatePipes();
  BirdCollide();
  scoreCount();
  birdFromTop += birdVelocity;
  bird.style.top = birdFromTop + "px";
} //A single loop that runs to check and maintian the state of the game

gameRunInt = setInterval(gameLoop, 10)
// requestAnimationFrame(gameLoop);

/* ==========================================
   SCORE FUNCTIONS
============================================= */

let storedMaxScore = JSON.parse(localStorage.getItem("maxScore")) ?? 0;
maxScoreDisplay.textContent = storedMaxScore;

const scoreCount = () => {
  for (const pipe of allPipes) {
    if (pipe.position < (section.clientWidth * 0.3) + (bird.clientWidth)) {////////////////////////////////////////////////////////////
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
}; //Check that pipe is not scored twice and then increase the score accordingly

/* ==========================================
   GAME OVER FUNCTIONS
============================================= */

const gameOver = () => {
  BIRD_DIE_VOICE.play();
  gameRunning = false;
  clearInterval(gameRunInt)
  displayUpdate("none", "none", "flex")
  birdFromTop = BIRD_INITIAL_FROM_TOP;
}; //Changes gameRunning state, clear interval and change the display, adjust the bird height

/* ==========================================
   EVENT LISTENERS
============================================= */

startBut.addEventListener("click", () => {
  gameStart();
  gameLoop();
});

document.addEventListener("keydown", (e) => {
  if (!gameRunning) return;
  if (e.code == "Space") {
    birdVelocity -= 5;
    // bird.style.top = birdFromTop + "px";
    BIRD_WING_VOICE.cloneNode(true).play();
  }
});

homeBut.addEventListener("click", () => {
  window.location.reload();
});
