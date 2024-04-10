export const likes = (a : string[]) : string => {
    if (a.length === 0) {
        return "no one likes this";
    }
    if (a.length === 1) {
        return `${a[0]} likes this`;
    }
    if (a.length === 2) {
        return `${a.join(" and ")} like this`;
    }
    if (a.length === 3) {
        return `${a[0]}, ${a[1]} and ${a[2]} like this`
    }

    return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
};


const list = ["Mark", "Alex", "Jacob", "Max"];
console.log(likes(list));