module.exports = {
  getNextHeadingLevel(currentLevel) {
    return parseInt(currentLevel, 10) + 1;
  },
  getReadingTime(text) {
    const wordsPerSecond = 3.3;
    const numberOfWords = text.split(/\s/g).length;
    return Math.ceil(numberOfWords / wordsPerSecond);
  }
};
