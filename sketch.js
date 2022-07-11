let word;
let guesses = [["", "", ""], ["", "", ""], ["", "", ""], ["", "", ""]];
let tiles = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
let pos = [0, 0];
let guessed = false;
let wrong = false;
let letters = [];

function setup() {
    const cnv = createCanvas(975, 600);
    cnv.center('horizontal')
    background(235);
    textSize(32);
    text("THIRDLE", 417, 50);

    const num = Math.floor(Math.random()*words.length);
    word = words[num];

    for (let i = 0; i < 26; i++) {
        letters.push(0);
    }
}

function draw() {
    reform();
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 3; c++) {
            switch (tiles[r][c]) {
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
            rect(400 + c * 60, 100 + r * 60, 55, 55);

            fill(215, 215, 215);
            stroke(200, 200, 200);
            rect(440, 460, 100, 60);
            color_stroke(0, 0, 0);

            text(guesses[r][c], 415 + c * 60, 140 + r * 60);
            if (wrong || guessed) {
                text(word, 460, 500)
            }
        }
    }
    draw_letters();
}

