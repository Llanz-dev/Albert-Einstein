// Night mode Variables
let stateMode = "click";
const nightMode = document.getElementById("night-mode");

//Check for the status the moment the site will load
window.onload = () => {
  if(getModeStatus() == 'lightMode'){
    light_mode()
  }else if(getModeStatus() == 'nightMode') {
    night_mode()
  }
}

//Get the mode status in the localstorage
let getModeStatus = () => {
  return localStorage.getItem('modeStatus')
}

//Set the mode status in the localstorage
let setModeStatus = (status) => {
    localStorage.setItem('modeStatus', status)
}

// Night Mode Codes
let night_mode = () => {
    navHover("#fff", "#4b7bec");
    document.body.style.backgroundColor = "#232426";
    document.getElementById("navbar").style.backgroundColor = "#3d3e40";
    document.querySelectorAll("[orange]").forEach((colorOrange) => {
      colorOrange.style.color = "#ff8800";
    });
    document.querySelectorAll("[lightgreen]").forEach((colorlightGreen) => {
      colorlightGreen.style.color = "#3dff98";
    });
    document.querySelectorAll("[white]").forEach((colorWhite) => {
      colorWhite.style.color = "#ffffff";
    });
    document.querySelectorAll("[black]").forEach((colorBlack) => {
      colorBlack.style.color = "black";
    });
    document.getElementById("night-mode").style.borderColor = "white";
    document.getElementById("night-icon").style.color = "white";
    document.querySelector("p").style.color = "white";
    document.querySelectorAll("i").forEach((i_Tag) => {
      i_Tag.style.color = "white";
    });
    document.querySelectorAll("[icon]").forEach((icon) => {
      icon.style.color = "#575757";
    });
    document.querySelectorAll("[darkBlue]").forEach((darkBlue) => {
      darkBlue.style.color = "#4b7bec";
    });
    document.querySelectorAll("[whiteBorder]").forEach((border) => {
      border.style.borderColor = "white";
    });
    stateMode = "not";

}

// Light Mode Codes
let light_mode = () => {
    navHover("#4b7bec", "#4b7bec");
    document.body.style.backgroundColor = "#f8fbff";
    document.getElementById("navbar").style.backgroundColor = "#fffafa";
    document.querySelectorAll("[orange]").forEach((colorBlack) => {
      colorBlack.style.color = "black";
    });
    document.querySelectorAll("[lightgreen]").forEach((colorlightGreen) => {
      colorlightGreen.style.color = "black";
    });
    document.querySelectorAll("[white]").forEach((colorWhite) => {
      colorWhite.style.color = "black";
    });

    document.getElementById("night-mode").style.borderColor = "black";
    document.getElementById("night-icon").style.color = "black";
    document.querySelector("p").style.color = "black";
    document.querySelectorAll("i").forEach((i_Tag) => {
      i_Tag.style.color = "#575757";
    });
    document.querySelectorAll("a").forEach((a_Tag) => {
      a_Tag.style.color = "#4b7bce";
    });
    document.querySelectorAll("[whiteBorder]").forEach((border) => {
      border.style.borderColor = "black";
    });
    stateMode = "click";
}

nightMode.addEventListener("click", () => {
  if (stateMode === "click") {
    setModeStatus('nightMode')
    night_mode()
  } else {
    setModeStatus('lightMode')
    light_mode()
  }
});

let navHover = (firstColor, secondColor) => {
  document.querySelectorAll("[whiteBlue]").forEach((whiteBlue) => {
    whiteBlue.style.color = firstColor;
    whiteBlue.addEventListener("mouseover", () => {
      whiteBlue.style.color = secondColor;
      whiteBlue.addEventListener("mouseout", () => {
        whiteBlue.style.color = firstColor;
      });
    });
  });
};
// Qoute Generator
let albertEinstein_qoutes = [
  "Few are those who see with their own eyes and feel with their own hearts.",
  "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
  "Unthinking respect for authority is the greatest enemy of truth.",
  "Try not to become a man of success, but rather try to become a man of value.",
  "I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state1 or national entity whatsoever.",
  "Great spirits have always encountered violent opposition from mediocre minds.",
  "I would teach peace rather than war. I would inculcate love rather than hate.",
  "I believe in intuitions and inspirations. I sometimes feel that I am right. I do not know that I am.",
  "Look deep into nature, and then you will understand everything better.",
  "All religions, arts and sciences are branches of the same tree.",
];
document.getElementById("click").addEventListener("click", () => {
  let albertEinstein_words =
    albertEinstein_qoutes[
      Math.floor(Math.random() * albertEinstein_qoutes.length)
    ];
  document.getElementById("qouteText").textContent =
    '"' + albertEinstein_words + '"';
});
let number;
let state1 = "q";
document.getElementById("question1").addEventListener("click", () => {
  number = 1;
  if (state1 === "q") {
    changeClick(number);
    state1 = "w";
  } else {
    backClick(number);
    state1 = "q";
  }
});
let state2 = "e";
document.getElementById("question2").addEventListener("click", () => {
  number = 2;
  if (state2 === "e") {
    changeClick(number);
    state2 = "r";
  } else {
    backClick(number);
    state2 = "e";
  }
});

let state3 = "t";
document.getElementById("question3").addEventListener("click", () => {
  number = 3;
  if (state3 === "t") {
    changeClick(number);

    state3 = "y";
  } else {
    backClick(number);

    state3 = "t";
  }
});

let state4 = "u";
document.getElementById("question4").addEventListener("click", () => {
  number = 4;
  if (state4 === "u") {
    changeClick(number);
    state4 = "i";
  } else {
    backClick(number);
    state4 = "u";
  }
});

let state5 = "o";
document.getElementById("question5").addEventListener("click", () => {
  number = 5;
  if (state5 === "o") {
    changeClick(number);
    state5 = "p";
  } else {
    backClick(number);
    state5 = "o";
  }
});

let changeClick = (number) => {
  document.getElementById("question" + number).style.backgroundColor =
    "#4b6584";
  document.getElementById("p" + number).style.color = "white";
  document.getElementById("mouse" + number).style.color = "white";
  document.getElementById("answer" + number).style.display = "block";
};

let backClick = (number) => {
  document.getElementById("question" + number).style.backgroundColor =
    "rgb(221,221,221)";
  document.getElementById("p" + number).style.color = "#0040d6";
  document.getElementById("mouse" + number).style.color = "rgb(107, 107, 107)";
  document.getElementById("answer" + number).style.display = "none";
};
