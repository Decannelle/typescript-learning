const getHistogram = (word: string): {[key: string]: number} => {
    const histogram: Record <string, number> = {};
    word.split("").forEach(char => {
        if (histogram[char] === undefined) {
            histogram[char] = 1;
        } else {
            histogram[char] += 1;
        }
    });
    return histogram;
};

export const duplicateCount = (text: string): number => {
    const textHistogram = getHistogram(text.toLocaleLowerCase());
    return Object.values(textHistogram)
        .filter(inclusionCount => inclusionCount > 1)
        .length;
};

console.log(duplicateCount("ABba"));