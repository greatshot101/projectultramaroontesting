function showIframe(event, src, gameName) {
  event.stopPropagation();
  var overlay = document.getElementById("overlay");
  var iframeContainer = document.getElementById("iframe-container");
  var iframeContent = document.getElementById("iframe-content");
  var topText = document.querySelector(".top-text");



  iframeContent.src = 'https://raw.githack.com/3kh0/3kh0-Assets/main/' + src + '/index.html';


  topText.innerText = gameName;

  iframeContainer.style.display = "block";
}

function hideIframe() {
  var iframeContainer = document.getElementById('iframe-container');
  var iframeContent = document.getElementById('iframe-content');

  iframeContent.src = '';

  iframeContainer.style.display = 'none';
}

function searchGames() {
      const searchTerm = document.querySelector('.search-bar').value.toLowerCase();

      const gameButtons = document.querySelectorAll('.game-btn');

      gameButtons.forEach((button) => {
        const gameTitle = button.querySelector('span').textContent.toLowerCase();

        if (gameTitle.includes(searchTerm)) {
          button.classList.remove('hidden');
        } else {
          button.classList.add('hidden');
        }
      });
    }
function local(event, src, gameName) {
  event.stopPropagation();
  var overlay = document.getElementById("overlay");
  var iframeContainer = document.getElementById("iframe-container");
  var iframeContent = document.getElementById("iframe-content");
  var topText = document.querySelector(".top-text");



  iframeContent.src = '/' + src + '/index.html';


  topText.innerText = gameName;

  iframeContainer.style.display = "block";
}

function proxy(event, src, gameName) {
  event.stopPropagation();
  var overlay = document.getElementById("overlay");
  var iframeContainer = document.getElementById("iframe-container");
  var iframeContent = document.getElementById("iframe-content");
  var topText = document.querySelector(".top-text");



  iframeContent.src = 'https://jacksonherr.university';


  topText.innerText = gameName;

  iframeContainer.style.display = "block";
}

function hidegame() {
  const gamecont = document.getElementById('game-btn')
    gamecont.style.display = "none"


}



function hidegames() {
      const gameButtons = document.querySelectorAll('.game-btn');
      const proxyButtons = document.querySelectorAll('.proxy-btn')
      gameButtons.forEach((button) => {
        const gameTitle = button.querySelector('span').textContent.toLowerCase();

        if (gameTitle.includes("jjjjjjjjjjjjjjjjjjjjjjjj")) {
          button.classList.remove('hidden');
        } else {
          button.classList.add('hidden');
        }
      });

      proxyButtons.forEach((button) => {
        button.classList.remove('hidden');
      })
    }




onload(load())


function load() {
      const gameButtons = document.querySelectorAll('.game-btn');
      const proxyButtons = document.querySelectorAll('.proxy-btn')
      gameButtons.forEach((button) => {
        const gameTitle = button.querySelector('span').textContent.toLowerCase();

        button.classList.add('hidden');
      });

      proxyButtons.forEach((button) => {
        button.classList.remove('hidden')
      })
    }
