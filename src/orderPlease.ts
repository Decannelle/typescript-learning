const getNumber = (numberWord: string): number => {
    const digits = numberWord.split("").filter((char) => Number(char));
    return Number(digits[0]);
};


export const order = (words: string): string =>
    words
        .split(" ")
        .sort((word1, word2) => getNumber(word1) - getNumber(word2))
        .join(" ");


console.log(getNumber("is2"));
console.log(order("is2 Thi1s T4est 3a"));
console.log(order(""));