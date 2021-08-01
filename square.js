module.exports = class Square {
    constructor(width) {
        this.width = width;
    }

    area () {
        return this.width **2 ;
    }

    diameter() {
        return this.width *4;
    }
}