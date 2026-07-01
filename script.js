const typingText =
`Happy Birthday, My Dearest Gopzz ❤️

Every day with you feels magical.

You are my happiness,
my peace,
my biggest blessing.

May this birthday bring you endless smiles,
good health,
beautiful memories,
and every dream you wish for.

I will always be cheering for you.

Happy Birthday once again, my Frozen Princess. ❄️❤️`;

const typingElement = document.getElementById("typing");

let index = 0;

function typeWriter() {

    if (index < typingText.length) {

        typingElement.innerHTML += typingText.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

typeWriter();

const giftBtn = document.getElementById("giftBtn");
const popup = document.getElementById("giftPopup");
const closePopup = document.getElementById("closePopup");

giftBtn.onclick = () => {

    popup.style.display = "flex";

    confetti({
        particleCount:250,
        spread:120,
        origin:{y:0.6}
    });

}

closePopup.onclick = () => {

    popup.style.display="none";

}

window.onclick=(e)=>{

    if(e.target==popup){

        popup.style.display="none";

    }

}

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.onclick=()=>{

    if(!playing){

        music.play();

        musicBtn.innerHTML="⏸ Pause Music";

        playing=true;

    }else{

        music.pause();

        musicBtn.innerHTML="🎵 Play Music";

        playing=false;

    }

}

const birthday = new Date("July 3, 2026 00:00:00").getTime();

const countdown=document.getElementById("countdown");

setInterval(()=>{

    const now=new Date().getTime();

    const distance=birthday-now;

    if(distance<0){

        countdown.innerHTML="🎉 Happy Birthday Gopzz ❤️";

        return;

    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    countdown.innerHTML=
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

},1000);
/* ---------------- SNOW ANIMATION ---------------- */

function createSnow() {

    const snow = document.createElement("div");

    snow.classList.add("snowflake");

    snow.innerHTML = "❄";

    snow.style.left = Math.random() * window.innerWidth + "px";

    snow.style.fontSize = (10 + Math.random() * 20) + "px";

    snow.style.animationDuration = (5 + Math.random() * 6) + "s";

    document.getElementById("snow").appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 11000);

}

setInterval(createSnow, 180);


/* ---------------- FLOATING HEARTS ---------------- */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💙";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (18 + Math.random() * 22) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);

}

setInterval(createHeart, 700);


/* ---------------- AUTO FIREWORKS ---------------- */

function launchFireworks() {

    confetti({
        particleCount: 120,
        spread: 100,
        origin: {
            x: Math.random(),
            y: Math.random() * 0.6
        }
    });

}

setInterval(launchFireworks, 6000);


/* ---------------- PAGE LOAD EFFECT ---------------- */

window.addEventListener("load", () => {

    confetti({
        particleCount: 200,
        spread: 140,
        origin: {
            y: 0.6
        }
    });

});


/* ---------------- GLOW EFFECT ---------------- */

const card = document.querySelector(".glass");

setInterval(() => {

    card.style.boxShadow =
        `0 0 ${25 + Math.random() * 30}px rgba(0,210,255,0.8)`;

}, 1200);
