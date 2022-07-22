function get_keys() {
    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        //console.log(event.key);

        if (event.key.length > 1) {
            if (event.key === "Backspace") {
                guess(event.key);
            }
            if (event.key === "Enter") {
                guess(event.key);
            }
            if (event.key === "Control") {
                redo();
            }
            return;
        }

        let letter = event.key.codePointAt(0);

        if (letter >= 97 && letter <= 122) {
            guess(String.fromCharCode(letter - 32));
        }

    event.preventDefault();
    }, true);
}
  
function guess(guess) {
    if (guessed || wrong) {
        return;
    }
  
    if (guess === "Backspace") {
        if (pos[1] < 1) {
            return;
        }
        guesses[pos[0]][pos[1]-1] = "";
        pos[1] -= 1;
    }
  
    else if (guess === "Enter") {
        if (pos[1] !== cols) {
            return;
        }

        let done = 0;
        let ded = [];
        let ded2 = [];

        for (let i = 0; i < cols; i++) {
            ded.push(0);
            ded2.push(0);
        }
    
        for (let i = 0; i < cols; i++) {
            if (guesses[pos[0]][i] === word[i]) {
                tiles[pos[0]][i] = 3;
                done++;
                ded[i] = 1;
                letters[word.codePointAt(i)-65] = 3;
            }
        }
    
        for (let i = 0; i < cols; i++) {
            if (tiles[pos[0]][i] != 3) {
                tiles[pos[0]][i] = 1;
                letters[guesses[pos[0]][i].codePointAt(0)-65] = 1;
                for (let j = 0; j < cols; j++) {
                    if (ded[j] === 0) {
                        if (ded2[j] === 0) {
                            if (word[j] === guesses[pos[0]][i]) {
                                tiles[pos[0]][i] = 2;
                                letters[guesses[pos[0]][i].codePointAt(0)-65] = 2;
                                ded2[j]++;
                            }
                        }
                    }
                }
            }
        }
        pos[0]++;
        pos[1] = 0;
        if (done === cols) {
            guessed = true;
        }
        if (pos[0] === rows) {
            wrong = true;
        }
    }
    else {
        if (pos[1] === cols) {
            return;
        }
        guesses[pos[0]][pos[1]] = guess;
        pos[1]++;
    }
}
  
function redo() {
    create_arrays();
    pos = [0, 0];
    guessed = false;
    wrong = false;
    const num = Math.floor(Math.random()*words.length);
    word = words[num];
    letters = [];
    for (let i = 0; i < 26; i++) {
        letters.push(0);
    }
}
  
function color_stroke(r, g, b) {
    fill(r, g, b);
    stroke(r, g, b);
}
  
function draw_letters() {
    for (let n = 0; n < 26; n++) {
        switch (letters[n]) {
            case 0:
                fill(215, 215, 215);
                stroke(200, 200, 200);
                break;
            case 1:
                fill(100, 100, 100);
                stroke(128, 128, 128);
                break;
            case 2:
                fill(200, 200, 12);
                stroke(255, 255, 0);
                break;
            case 3:
                fill(12, 200, 12);
                stroke(0, 255, 0);
                break;
        }
        rect(45 * (n % 3) - 250, 100 + 45 * Math.floor(n / 3), 40, 40);
        color_stroke(0, 0, 0);
        text(String.fromCharCode(n + 65), 45 * (n % 3) - 250, 88 + 45 * Math.floor(n / 3));
    }
}

function create_arrays() {
    guesses = [];
    tiles = [];
    for (let i = 0; i < rows; i++) {
        guesses.push([]);
        tiles.push([]);
        for (let j = 0; j < cols; j++) {
            guesses[i].push("");
            tiles[i].push(0);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth - 125, windowHeight);
}