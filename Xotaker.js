class Xotaker extends KendaniEak {
    sharjvel() {
        this.yntrelVandak();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 2;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (exanak == ("garun")) {
            if (this.energy == 6) {
                xotakerArr.push(new Xotaker(this.x, this.y));
                this.energy = 3;
            }
        }
        else if (exanak == ("amar")) {
            if (this.energy == 7) {
                xotakerArr.push(new Xotaker(this.x, this.y));
                this.energy = 3;
            }
        }
        else if (exanak == ("ashun")) {
            if (this.energy == 8) {
                xotakerArr.push(new Xotaker(this.x, this.y));
                this.energy = 3;
            }
        }
        else if (exanak == ("dsmer")) {
            if (this.energy == 9) {
                xotakerArr.push(new Xotaker(this.x, this.y));
                this.energy = 3;
            }
        }

        //Սա սեռն է ուղակի ինձ մոտ դրանով խաղը չի աշխատում այնպես ինչպես պլանավորած է

        /*var emptyCells = this.yntrelVandak(0);
        var grassEaterCells = random(this.yntrelVandak(2));
        var foundedObj;
        if (grassEaterCells) {
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == grassEaterCells[0] && xotakerArr[i].y == grassEaterCells[1]) {
                    foundedObj = xotakerArr[i];
                }
            }
        }
        if (foundedObj) {
            if (this.genus != foundedObj.genus) {
                if (this.energy >= 10) {
                    if (emptyCells.length != 0) {
                        var randomCell = random(emptyCells);
                        var x = randomCell[0];
                        var y = randomCell[1];

                        for (var i in xotArr) {
                            if (emptyCells[0] == xotArr[i].x && emptyCells[1] == xotArr[i].y) {
                                xotArr.splice(i, 1);
                                break;
                            }
                        }

                        var newxotaker = new Xotaker(x, y);
                        xotakerArr.push(newxotaker);

                        matrix[y][x] = 2;
                        this.energy = 6;
                    }
                }
            }
        }*/
    }
    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 2;
            this.energy++;
            this.bazmanal();
            for (var i in xotArr) {
                if (this.x == xotArr[i].x && this.y == xotArr[i].y) {
                    xotArr.splice(i, 1)
                    break;
                }
            }
        }
        else {
            this.sharjvel();
        }
    }
    mahanal() {
        if (this.energy <= 0) {
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)
                    matrix[this.y][this.x] = 0;
                }
            }
        }
    }
}
