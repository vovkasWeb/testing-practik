const square = (number) => {
    if (number < 0 || number > 100) {
        return null;
    }
    if (number === 1) {
        return 1;
    }
    return Math.pow(number, 2);
};

module.exports = square;