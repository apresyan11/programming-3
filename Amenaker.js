class Amenaker extends KendaniEak {
    sharjvel() {
        this.yntrelVandak();
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            this.x = norVandak[0];
            this.y = norVandak[1];
            matrix[this.y][this.x] = 4;
            this.energy--;
            this.mahanal();
        }
    }
    bazmanal() {
        if (exanak == ("garun")) {
            if(this.energy == 13){
            amenakerArr.push(new Amenaker(this.x, this.y));
            this.energy = 3;
          }
        }
        else if (exanak == ("amar")) {
            if(this.energy == 15){
            amenakerArr.push(new Amenaker(this.x, this.y));
            this.energy = 3;
          }
        }
        else if (exanak == ("ashun")) {
            if(this.energy == 15){
            amenakerArr.push(new Amenaker(this.x, this.y));
            this.energy = 3;
          }
        }
        else if (exanak == ("dsmer")) {
            if(this.energy == 17){
            amenakerArr.push(new Amenaker(this.x, this.y));
            this.energy = 3;
          }
        }
    }
    utel2() {
        this.stanalNorKordinatner();
        var gishatich = random(this.yntrelVandak(3));
        if (gishatich) {
            matrix[this.y][this.x] = 0;
            this.x = gishatich[0];
            this.y = gishatich[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1)

                }
            }
        }
        else if (matrix[this.y][this.x] = 2) {
            this.utel1();
        }
        else {
            this.utel();
        }
    }
    utel1() {
        this.stanalNorKordinatner();
        var xotaker = random(this.yntrelVandak(2));
        if (xotaker) {
            matrix[this.y][this.x] = 0;
            this.x = xotaker[0];
            this.y = xotaker[1];
            matrix[this.y][this.x] = 4;
            this.energy++;
            this.bazmanal();
            for (var i in xotakerArr) {
                if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                    xotakerArr.splice(i, 1)

                }
            }
        }
        else {
            this.utel();
        }
    }

    utel() {
        this.stanalNorKordinatner();
        var xot = random(this.yntrelVandak(1));
        if (xot) {
            matrix[this.y][this.x] = 0;
            this.x = xot[0];
            this.y = xot[1];
            matrix[this.y][this.x] = 4;
            for (var i in xotArr) {
                if (this.x == xotArr[i].x && this.y == xotArr[i].y) {
                    xotArr.splice(i, 1)

                }
            }
        }
        else {
            this.sharjvel();
        }
    }

    mahanal() {
        if (this.energy <= 0) {
            for (var i in amenakerArr) {
                if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                    amenakerArr.splice(i, 1)
                    matrix[this.y][this.x] = 0;

                }
            }
        }
    }
}