// GAME START FUNCTION DECIDING HOW WE WILL PRESS START AND GAME PLAY SCREEN WILL COME AFTER WHICH ONLY GRAVITY MOTION WILL START

const main = document.querySelector("main");
const section = document.querySelector("section");
const bird = document.querySelector("#bird-play-img");
const startBut = document.querySelector("#start-play-button");

let birdFromTop = 200;
let gravity = 3;

const allPipes = [];
const gap = 225;

const birdGravity = () => {
  setInterval(() => {
    birdFromTop += gravity;
    bird.style.top = birdFromTop + "px";
  }, 20);
};

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
  }
});

const genPipes = () => {
  allPipes.forEach((elem, index) => {
    const pipeTop = document.createElement("div");
    const pipeDown = document.createElement("div");

    pipeTop.className = "pipe upper-pipes";
    pipeDown.className = "pipe lower-pipes";

     // Here we never stored the DOM object if in future we need it we have to sotre fit in object

    elem.topElement = pipeTop;
    elem.bottomElement =  pipeDown;


    pipeTop.style.height = elem.topHeight + "px";
    pipeDown.style.height = elem.bottomHeight + "px";

    pipeTop.style.left = elem.position + "px";
    pipeDown.style.left = elem.position + "px";

    pipeTop.style.top = 0;
    pipeDown.style.bottom = 0;

    section.append(pipeTop, pipeDown);

        let gameForward = setInterval(()=>{
            elem.position -= 2;
            pipeTop.style.left = elem.position + "px";
            pipeDown.style.left = elem.position + "px";

            let lastPos = allPipes[0].position;
            if(elem.position < -385){
                for(const pipe of allPipes){
                    if(pipe.position > lastPos){
                        lastPos = pipe.position;
                    }
                }

                elem.position = lastPos + 300 + 85;
                
                pipeTop.style.left =  elem.position +  "px";
                pipeDown.style.left = elem.position + "px";

                
                
                elem.topHeight = Math.random() * (section.clientHeight - gap - 50) + 50;
                elem.bottomHeight = section.clientHeight - elem.topHeight - gap;

                pipeTop.style.height = elem.topHeight + "px";
                pipeDown.style.height = elem.bottomHeight + "px";
                
            }

        }, 5)
    });
    };


