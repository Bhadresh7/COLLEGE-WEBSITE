var myLine = document.querySelectorAll(".reveal");

function roundedAni() {
  myLine.forEach((li) => {
    li.style.width = `${100}%`;

    var myLine = li.childNodes[3];
    var myData = myLine.getAttribute("data-width");
    myLine.style.width = `${myData}%`;
    var container = li.childNodes[1];
    container.innerText = `${myData}%`;

    function generateKeyframes(animationName, width) {
      return `
      @keyframes ${animationName} {
        0% {
        opacity:0;
          width: 0;
        }
        100% {
          width: ${width}%;
          opacity:1;
        }
      }
    `;
    }
    let keyframes = generateKeyframes("progress", myLine);

    let styleElement = document.createElement("style");
    styleElement.textContent = keyframes;
    document.head.appendChild(styleElement);

    var start = 0;
    var increment = setInterval(() => {
      if (start < myData) {
        start++;
        container.innerText = `${start}%`;
      } else {
        clearInterval(increment);
      }
    }, 1);
  });
}

//dropdown script
document.querySelectorAll(".dropdowns").forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const content = dropdown.querySelector(".dropdown-content");
    content.classList.toggle("active");
  });
});

//script to run the aniamtion only once
let animationExecuted = false;

document.onscroll = () => {
  let sc = window.scrollY;
  if (sc > 200 && !animationExecuted) {
    roundedAni();
    animationExecuted = true;
  }
};

//circular loader

let circularLoader = document.querySelectorAll(".circular-progress");

console.log(circularLoader);
circularLoader.forEach((node) => {
  var progressValue = node.childNodes[1];

  var progressTextElement = progressValue.lastChild.previousSibling;

  var data = parseInt(progressTextElement.innerText);

  var start = 0;
  var increment = setInterval(() => {
    if (start < data) {
      start++;

      progressTextElement.textContent = `${start}%`;
      // console.log(start);
    } else {
      clearInterval(increment);
    }
  }, 12);

  var data = node.getAttribute("data-width");

  var degree = parseInt(data) * 3.6;

  var conic = `background:conic-gradient(#ffb606 ${degree}deg, #fff 0deg);}`;

  node.setAttribute("style", conic);
});

// Milestone Counter

var data = document.querySelectorAll(".overlay-content");
console.log(data);

data.forEach((e) => {
  var count = e.childNodes[3];
  console.log(count);
  var countData = count.getAttribute("data-width");

  var start = 0;
  var end = parseInt(countData);
  console.log(end);
  var counter = setInterval(() => {
    start++;
    count.innerText = `${start}`;
    if (start == end) {
      clearInterval(counter);
    }
  }, 10);
});
