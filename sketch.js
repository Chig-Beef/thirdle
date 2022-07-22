let word, guesses, tiles, letters;
let pos = [0, 0];
let guessed = false;
let wrong = false;

const rows = 4;
const cols = 3;

function setup() {
    const cnv = createCanvas(600, 600);
    cnv.center('horizontal')
    translate(width/2, 0);
    background(235);
    textSize(32);

    textAlign(CENTER, TOP);
    rectMode(CENTER);

    text("THIRDLE", 0, 50);

    create_arrays();

    const num = Math.floor(Math.random()*words.length);
    word = words[num];

    letters = [];
    for (let i = 0; i < 26; i++) {
        letters.push(0);
    }
    get_keys();
}

function draw() {
    translate(width/2, 0);
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
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
            rect(c * 60 - 60, 130 + r * 60, 55, 55);

            color_stroke(0, 0, 0);
            text(guesses[r][c], c * 60 - 60, 118 + r * 60);
        }
    }

    fill(215, 215, 215);
    stroke(200, 200, 200);
    rect(0, 460, 100, 60);

    if (wrong || guessed) {
        color_stroke(0, 0, 0);
        text(word, 0, 447)
    }

    draw_letters();
}

