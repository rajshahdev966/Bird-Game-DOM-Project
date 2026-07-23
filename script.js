// GAME START FUNCTION DECIDING HOW WE WILL PRESS START AND GAME PLAY SCREEN WILL COME AFTER WHICH ONLY GRAVITY MOTION WILL START

const main = document.querySelector("main");
const section = document.querySelector("section");
const bird = document.querySelector("#bird-play-img");
const startBut = document.querySelector("#start-play-button");
const gameLost = document.querySelector(".game-lost-screen");

main.style.display = "flex";
section.style.display = "none";
gameLost.style.display = "none";

let birdFromTop = 200;
let gravity = 3;
let gravityInterval;

const allPipes = [];
const gap = 225;

const birdGravity = () => {
  gravityInterval = setInterval(() => {
    birdFromTop += gravity;
    bird.style.top = birdFromTop + "px";
  }, 20);
};

const birdWings = new Audio("sfx_wing.mp3");
const GameLoss = new Audio("sfx_die.mp3");

const gameStart = () => {
  main.style.display = "none";
  section.style.display = "flex";
  for (let i = 0; i <= 7; i++) {
    const topHeight = Math.random() * (section.clientHeight - gap - 50) + 50;
    let pipe = {
      pipe: i,
      position: section.clientWidth + (300 + 85) * i,
      topHeight,
      bottomHeight: section.clientHeight - topHeight - gap,
    };
    allPipes.push(pipe);
  }
  genPipes();
};

startBut.addEventListener("click", () => {
  gameStart();
  birdGravity();
});

document.addEventListener("keydown", (e) => {
  // e.code gives Space and e.key gives {space}
  if (e.code == "Space") {
    birdFromTop -= 60;
    bird.style.top = birdFromTop + "px";
    birdWings.cloneNode(true).play();
  }
});

let gameForward;

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

    capOfUp.className = "cap-of-up";
    capOfDown.className = "cap-of-down";
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
      if (elem.position < -385) {
        for (const pipe of allPipes) {
          if (pipe.position > lastPos) {
            lastPos = pipe.position;
          }
        }

        elem.position = lastPos + 300 + 85;

        pipeTop.style.left = elem.position + "px";
        pipeDown.style.left = elem.position + "px";

        elem.topHeight = Math.random() * (section.clientHeight - gap - 50) + 50;
        elem.bottomHeight = section.clientHeight - elem.topHeight - gap;

        pipeTop.style.height = elem.topHeight + "px";
        pipeDown.style.height = elem.bottomHeight + "px";
      }
    }, 10);
    
  });
};

let checkBirdLost = setInterval(() => {
  birdLost();
}, 5);

let checkBirdCollide = setInterval(() => {
  for (const pipe of allPipes) {
    if(pipe.position < 100 && pipe.position > -85){
        if(birdFromTop < pipe.topHeight || birdFromTop + bird.clientHeight > pipe.topHeight + gap){
            console.log("Bird collided");
            
        }
    }
};
}, 5)

const birdLost = () => {
  if (birdFromTop < 0 || birdFromTop > document.body.clientHeight - 50) {
    GameLoss.play();
    for(const pipe of allPipes){
        clearInterval(pipe.gameForward);
        
    }
    clearInterval(gravityInterval);
    clearInterval(checkBirdLost);
    main.style.display = "none";
    section.style.display = "none";
    gameLost.style.display = "flex";
    birdFromTop = 200;
  }
};

const pipeCollision = () => {
  if (elem.position < 100 && elem.position > -85) {
    if (
      birdFromTop < elem.topHeight ||
      birdFromTop + 100 > elem.topHeight + gap
    ) {
      console.log("Bird collided");
    }
  }
};
