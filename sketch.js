var word;
//const words = ["RED", "POT", "HAM", "ZAP", "NEW", "MUM", "DAD","GUN","FAT","SUS","TUB"];
var guesses = [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]];
var tiles = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
var pos = [0, 0]
var guessed = false;
var wrong = false;


function setup() {
  var cnv = createCanvas(975, 600);
  cnv.center('horizontal')
  background(235);
  textSize(32);
  text("THIRDLE", 417, 50);

  const num = Math.floor(Math.random()*words.length);
  word = words[num];
  //console.log(words);
  //console.log(num);
  //console.log(word);
}

function draw() {
  reform();
  for (r=0; r<4; r++){
    for (c=0; c<3; c++){
      if (tiles[r][c] === 0){
        fill(215, 215, 215);
        stroke(200, 200, 200);
      }
      else if (tiles[r][c] === 1) {
        fill(100, 100, 100);
        stroke(128, 128, 128);
      }
      else if (tiles[r][c] === 2) {
        fill(200, 200, 12);
        stroke(255, 255, 0);
      }
      else if (tiles[r][c] === 3) {
        fill(12, 200, 12);
        stroke(0, 255, 0);
      }
      rect(400+c*60, 100+r*60, 55, 55);

      fill(215, 215, 215);
      stroke(200, 200, 200);
      rect(440, 460, 100, 60);

      fill(0, 0, 0);
      stroke(0, 0, 0);
      text(guesses[r][c], 415+c*60, 140+r*60);
      if (wrong) {
        text(word, 460, 500)
      }
    }
  }
}

function reform() {
  window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    if (guessed) {
      return;
    }
    //console.log(event.key);

    switch (event.key) {
      case "a":
        guess("A");
        break;
      case "b":
        guess("B");
        break;
      case "c":
        guess("C");
        break;
      case "d":
        guess("D");
        break;
      case "e":
        guess("E");
        break;
      case "f":
        guess("F");
        break;
      case "g":
        guess("G");
        break;
      case "h":
        guess("H");
        break;
      case "i":
        guess("I");
        break;
      case "j":
        guess("J");
        break;
      case "k":
        guess("K");
        break;
      case "l":
        guess("L");
        break;
      case "m":
        guess("M");
        break;
      case "n":
        guess("N");
        break;
      case "o":
        guess("O");
        break;
      case "p":
        guess("P");
        break;
      case "q":
        guess("Q");
        break;
      case "r":
        guess("R");
        break;
      case "s":
        guess("S");
        break;
      case "t":
        guess("T");
        break;
      case "u":
        guess("U");
        break;
      case "v":
        guess("V");
        break;
      case "w":
        guess("W");
        break;
      case "x":
        guess("X");
        break;
      case "y":
        guess("Y");
        break;
      case "z":
        guess("Z");
        break;
      case "Backspace":
        guess("Backspace");
        break;
      case "Enter":
        guess("Enter");
        break;
      case "Alt":
        redo();
        break;
      default:
        //console.log(event.key);
        return;
    }
    event.preventDefault();
    }, true);
  }

function guess(guess) {
  if (guess === "Backspace") {
    guesses[pos[0]][pos[1]-1] = "";
    pos[1] -= 1;
    if (pos[1] < 0) {
      pos[1] = 0;
    }
  }

  else if (guess === "Enter") {
    if (pos[1] === 3) {
      if (guesses[pos[0]][2] != "") {
        var done = 0;
      }
    }
		var ded = [0, 0, 0];
    var ded2 = [0, 0, 0];

    for (i=0; i<3; i++) {
      if (guesses[pos[0]][i] === word[i]) {
        tiles[pos[0]][i] = 3;
        done++;
        ded[i] = 1;
      }
    }

    for (i=0; i<3; i++) {
      if (tiles[pos[0]][i] != 3) {
        tiles[pos[0]][i] = 1;
        for (j=0; j<3; j++) {
          if (ded[j] === 0) {
            if (ded2[j] === 0) {
              if (word[j] === guesses[pos[0]][i]) {
                tiles[pos[0]][i] = 2;
                ded2[j]++;
              }
            }
          }
        }
      }
    }
    pos[0]++;
    pos[1] = 0;
    if (done === 3) {
      guessed = true;
    }
    if (pos[0] === 4) {
      wrong = true;
    }
  }
  else {
    if (guesses[3][2] === ""){
      guesses[pos[0]][pos[1]] = guess;
      pos[1]++;
      if (pos[1] > 3) {
        pos[1] -= 1;
      }
    }
  }
}

function redo() {
  //const words = ["RED", "POT", "HAM", "ZAP", "NEW", "MUM", "DAD","GUN","FAT","SUS","TUB"];
  guesses = [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]];
  tiles = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]
  pos = [0, 0]
  guessed = false;
  wrong = false;
  const num = Math.floor(Math.random()*words.length);
  word = words[num];
}
