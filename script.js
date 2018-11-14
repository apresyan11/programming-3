var xotArr = [];
var xotakerArr = [];
var gishatichArr = [];
var amenakerArr = [];
var mahArr = [];
var side = 22;
var matrix = [
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 6, 6, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 6, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 1, 3, 1, 1, 1, 1, 1, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 4],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 3, 1, 4],
    [5, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 4],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 5, 1, 1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 1, 1, 1, 1, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 6, 3, 3, 3, 3, 0, 1, 1, 1, 1, 1, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 5, 3, 3, 0, 1, 1, 1, 1, 1, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 0, 1, 1, 1, 1, 1, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 3, 3, 0, 1, 1, 1, 1, 1, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 1, 1, 1, 1, 1, 4, 4, 4, 4],
    [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 1, 1, 1, 1, 1, 4, 4, 4, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6],
    [5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 6, 6, 6],
    [1, 1, 1, 2, 2, 5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 6, 6, 6],
    [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 6, 6],
    [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 3, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 3, 3],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 2, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3],
    [1, 1, 6, 6, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3],
    [1, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 5, 3],
    [1, 6, 6, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 1, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 3],
    [1, 1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 0, 0, 0, 0, 0, 3, 3, 6],
    [1, 1, 3, 1, 1, 1, 1, 1, 5, 1, 1, 1, 3, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 0, 0, 0, 0, 0, 3, 6, 6],
    [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 0, 5, 0, 0, 0, 6, 6, 6],
];
var exanak = "garun";
myVar = setInterval(function () {
    if (exanak == "garun") {
        exanak = "amar"
    }
    else if (exanak == "amar") {
        exanak = "ashun"
    }
    else if (exanak == "ashun") {
        exanak = "dsmer"
    }
    else if (exanak == "dsmer") {
        exanak = "garun"
    }

}, 10000);

function setup() {
    noStroke();
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Xot(x, y, 1);
                xotArr.push(gr);

            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y, 2);
                xotakerArr.push(xt);
            }

            else if (matrix[y][x] == 3) {
                var gt = new Gishatich(x, y, 3);
                gishatichArr.push(gt);
            }
            else if (matrix[y][x] == 4) {
                var am = new Amenaker(x, y, 4);
                amenakerArr.push(am);
            }
            else if (matrix[y][x] == 5) {
                var ma = new Mah(x, y, 5);
                mahArr.push(ma);
            }
        }
    }
}

function draw() {
    if (frameCount % 1 == 0) {
        var x = Math.floor(random(1, 31));
        var y = Math.floor(random(1, 30));
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (exanak == "garun") {
                    fill("#125122");
                }
                else if (exanak == "amar") {
                    fill("green");
                }
                else if (exanak == "ashun") {
                    fill("#c18a00");
                }
                else if (exanak == "dsmer") {
                    fill("#bcffb7");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                if (exanak == "garun") {
                    fill("yellow");
                }
                else if (exanak == "amar") {
                    fill("yellow");
                }
                else if (exanak == "ashun") {
                    fill("yellow");
                }
                else if (exanak == "dsmer") {
                    fill("#f9f463");
                }
                rect(x * side, y * side, side, side);
            }

            else if (matrix[y][x] == 3) {
                if (exanak == "garun") {
                    fill("red");
                }
                else if (exanak == "amar") {
                    fill("red");
                }
                else if (exanak == "ashun") {
                    fill("red");
                }
                else if (exanak == "dsmer") {
                    fill("#ef5b5b");
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                if (exanak == "garun") {
                    fill("blue");
                }
                else if (exanak == "amar") {
                    fill("blue");
                }
                else if (exanak == "ashun") {
                    fill("blue");
                }
                else if (exanak == "dsmer") {
                    fill("#5f94ef");
                }

                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                if (exanak == "garun") {
                    fill("black");

                }
                else if (exanak == "amar") {
                    fill("black");

                }
                else if (exanak == "ashun") {
                    fill("black");

                }
                else if (exanak == "dsmer") {
                    fill("black");

                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
               if (exanak == ("dsmer")) {
                    fill("white")
                }
                else {
                    fill("#332817")
                }
                rect(x * side, y * side, side, side);
            }
            else {
                fill("#8a8c8e");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in xotArr) {
        xotArr[i].bazmanal();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].utel();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].utel1();
    }
    for (var i in amenakerArr) {
        amenakerArr[i].utel2();
    }
    for (var i in mahArr) {
        mahArr[i].utel3();
    }
}