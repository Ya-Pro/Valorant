let paragraphLinks = document.querySelectorAll("header nav li p ");
let ul = document.querySelectorAll("ul");
let languages = document.querySelector(".languages");
let langDropDown = document.querySelector(".lang-drop-down");
paragraphLinks.forEach((item) => {
  item.parentElement.addEventListener("mouseover", () => {
    item.nextElementSibling.classList.add("active");
  });
  item.parentNode.addEventListener("mouseout", () => {
    item.nextElementSibling.classList.remove("active");
  });
});
languages.addEventListener("mouseover", () => {
  langDropDown.classList.add("active");
});
languages.addEventListener("mouseout", () => {
  langDropDown.classList.remove("active");
});
// the part of the showing videos
let overlay = document.querySelector(".overlay");
let playVideos = document.querySelectorAll(".play");
let reviewVideos = document.querySelectorAll(".review-video");
let videos = document.querySelectorAll(" .review-video video");
let closeVideos = document.querySelectorAll(".review-video .close");
for (let i = 0; i < playVideos.length; i++) {
  playVideos[i].addEventListener("click", () => {
    overlay.classList.add("active");
    reviewVideos[i].classList.add("active");
    videos[i].currentTime = 0;
    videos[i].play();
    videos[i].autoplay = true;
    videos[i].muted = false;
    videos[i].controls = true;
    closeVideos[i].addEventListener("click", () => {
      overlay.classList.remove("active");
      reviewVideos[i].classList.remove("active");
      videos[i].muted = true;
      videos[i].controls = false;
    });
  });
}

const search = document.querySelector("header .search");
const xMark = document.querySelector(".fa-xmark");
const magnifyingGlass = document.querySelector(".fa-magnifying-glass");
let elementAdded = false;

const putMore = () => {
  if (elementAdded) return;

  const headerLi = document.createElement("li");
  headerLi.classList.add("newEl");
  headerLi.innerHTML = `
    <span>المزيد</span>
    <div class="more-container">    
    <p>إجتماعي <i class="fa-solid fa-caret-down"></i></p>
    <div class="newUl">
      <a href="https://www.youtube.com/" target="_blank">يوتيوب</a>
      <a href="https://www.facebook.com/" target="_blank">فيسبوك</a>
      <a href="https://www.twitter.com/" target="_blank">تويتر</a>
      <a href="https://www.instagram.com/" target="_blank">إنستجرام</a>
      <a href="https://www.discord.com/" target="_blank">دسكور</a>
    </div>
    <li class="e-sport">
            <a href="https://www.facebook.com/" target="_blank">إي إسبورتس</a>
     </li>
    </div>

  `;

  const socialLi = document.querySelector(".social-contact");
  const eSport = document.querySelector(".e-sport");
  socialLi.style.display = "none";
  eSport.style.display = "none";

  search.parentNode.insertBefore(headerLi, search);
  elementAdded = true;
};

magnifyingGlass.addEventListener("click", () => {
  search.classList.add("active");
  putMore();
  getNewEl();
});

xMark.addEventListener("click", () => {
  search.classList.remove("active");
});
function getNewEl() {
  let newElement = document.querySelector(".newEl");
  newElement.addEventListener("mouseover", () => {
    newElement.classList.add("active");
  });
  newElement.addEventListener("mouseout", () => {
    newElement.classList.remove("active");
  });
  newUlElement();
}
function newUlElement() {
  let socialElement = document.querySelector(".more-container p");
  let newUl = document.querySelector(".newUl");
  socialElement.addEventListener("click", () => {
    newUl.classList.toggle("active");
  });
}
// the part of the playing now of the game
let playGame = document.querySelectorAll(".play-now");
let playContainer = document.querySelector(".play-container");
let closePC = document.querySelector(".close-play");
playGame.forEach((item) => {
  item.addEventListener("click", () => {
    playContainer.classList.add("active");
  });
});
closePC.addEventListener("click", () => {
  playContainer.classList.remove("active");
});
let beReady = document.querySelector(".be-ready");
