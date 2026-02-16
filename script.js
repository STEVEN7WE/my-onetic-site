function checkPassword() {
  var password = document.getElementById("password").value;
  if (password === "forever") {
    document.getElementById("secretMessage").style.display = "block";
  } else {
    alert("Wrong password ❤️");
  }
}
document.addEventListener("mousemove", function (e) {
  let rose = document.createElement("div");
  rose.innerHTML = "🌹";
  rose.style.position = "fixed";
  rose.style.left = e.clientX + "px";
  rose.style.top = e.clientY + "px";
  rose.style.pointerEvents = "none";
  rose.style.fontSize = "20px";
  rose.style.transition = "all 1s ease-out";
  rose.style.opacity = "1";
  document.body.appendChild(rose);

  setTimeout(() => {
    rose.style.transform = "translateY(-50px)";
    rose.style.opacity = "0";
  }, 10);

  setTimeout(() => {
    rose.remove();
  }, 1000);
});
// Show popup after 5 seconds
window.onload = function () {
  setTimeout(() => {
    document.getElementById("lovePopup").style.display = "block";
  }, 5000);
};

function closePopup() {
  document.getElementById("lovePopup").style.display = "none";
}

function specialMessage() {
  alert("Forever isn't long enough with you 💍❤️");
}
function checkPassword() {
  // Get the password the user entered
  const input = document.getElementById("password").value;

  // Set your secret password here
  const secretPassword = "foreverlove"; // <-- change this to whatever password you want

  // Get the paragraph element
  const message = document.getElementById("secretMessage");

  if (input === secretPassword) {
    // Show the secret message
    message.style.display = "block";
  } else {
    // Wrong password
    alert("Wrong password! Try again 💌");
    message.style.display = "none";
  }
}
// Music play/pause
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});

// Popup functions
function closePopup() {
  document.getElementById("lovePopup").style.display = "none";
}

function specialMessage() {
  alert("You make every day magical ❤️");
}

// Simple floating hearts
const heartsContainer = document.querySelector(".hearts");
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.fontSize = `${Math.random() * 20 + 10}px`;
  heart.style.left = `${Math.random() * window.innerWidth}px`;
  heart.style.top = `${window.innerHeight}px`;
  heart.style.opacity = Math.random();
  heartsContainer.appendChild(heart);

  let top = window.innerHeight;
  const interval = setInterval(() => {
    top -= 2 + Math.random() * 2;
    heart.style.top = top + "px";
    if (top < -50) {
      heart.remove();
      clearInterval(interval);
    }
  }, 30);
}

setInterval(createHeart, 300);
