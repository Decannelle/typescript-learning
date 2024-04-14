export const longestConsec = (strarr: string[], k: number): string => {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return "";
    } else {
        const mergedStrings: string[] = [];
        strarr.forEach((_: string, idx: number) => {
            mergedStrings.push(
                strarr.slice(idx, idx + k).join("")
            );
        });
        return mergedStrings.reduce(
            (acc, val) => val.length > acc.length ? val : acc
        );
    }
}


console.log(longestConsec(["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], 2));