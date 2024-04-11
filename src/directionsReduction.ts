type Direction = "WEST" | "SOUTH" | "NORTH" | "EAST";

const oppositeDir: Record<Direction, Direction> = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "WEST": "EAST",
    "EAST": "WEST"
};

const areOpposite = (d1: Direction, d2: Direction): boolean =>
    oppositeDir[d1] === d2;

export const dirReduc = (arr: Direction[]): Direction[] => {
    const correctDirections: Direction[] = [];
    arr.forEach((dir) => {
        if (areOpposite(dir, correctDirections[correctDirections.length - 1])) {
            correctDirections.pop();
        } else {
            correctDirections.push(dir);
        }
    });
    return correctDirections;
};

const listDirections: Direction[] = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
console.log(dirReduc(listDirections));