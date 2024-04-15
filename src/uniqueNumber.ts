export const findUniq = (arr: number[]): number => {

    const first = arr[0];
    const last = arr[arr.length-1];

    for (let item of arr) {
        if (item === first && item != last) {
            return last;
        } else if (item === last && item != first) {
            return first;
        } else if (item != first && item != last) {
            return item;
        }
    }

    throw new Error("Couldnt find it!");
};

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));