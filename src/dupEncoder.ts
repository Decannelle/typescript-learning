const getHistogram = (word: string): Record<string, number> => {
    const charHistogram: Record<string, number> = {};
    word.split("").forEach(char => {
        if (charHistogram[char] === undefined) {
            charHistogram[char] = 1;
        } else {
            charHistogram[char] += 1;
        }
    });
    return charHistogram;
};


export const duplicateEncode = (word: string) => {
    const flatWord = word.toLocaleLowerCase();
    const charHistogram = getHistogram(flatWord);
    
    return flatWord
        .split("")
        .map((char) => charHistogram[char] == 1 ? "(" : ")")
        .join("");
};

console.log(duplicateEncode("recede"));