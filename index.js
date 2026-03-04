const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "Vampire cat celebrates with cake.png";


const sprite_width = 512;
const sprite_height = 512;


const cols = 2;        // 1024 / 512
const totalFrames = 6; 

let frame = 0;


const staggerFrames = 12;
let gameFrame = 0;

playerImage.onload = () => {
  animate();
};

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

 
  if (gameFrame % staggerFrames === 0) {
    frame = (frame + 1) % totalFrames;
  }
  gameFrame++;

 
  const frameX = (frame % cols) * sprite_width;
  const frameY = Math.floor(frame / cols) * sprite_height;

  
  ctx.drawImage(
    playerImage,
    frameX, frameY,
    sprite_width, sprite_height,
    40, 40,
    sprite_width, sprite_height
  );

  requestAnimationFrame(animate);
}
const song = document.getElementById("song");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", async () => {
  if (song.paused) {
    try {
      await song.play();              
      playBtn.textContent = "⏸ Pause";
    } catch (e) {
      console.log("Autoplay blocked:", e);
    }
  } else {
    song.pause();
    playBtn.textContent = "▶ Play Hellfire";
  }
});