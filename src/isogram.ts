export const isIsogram = (str: string): boolean =>
    new Set(str.toLocaleLowerCase()).size === str.length;



console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("moOse"));
