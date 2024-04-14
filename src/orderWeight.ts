const getWeight = (weight: string): number => 
    weight
        .split("")
        .reduce((acc, value) => acc + Number(value), 0);


const sortOrder = (number1: string, number2: string): number => {
    const weightDiff = getWeight(number1) - getWeight(number2);
    if (getWeight(number1) === getWeight(number2)) {
        return number1.localeCompare(number2);
    }
    return weightDiff;
};

export const orderWeight = (str: string): string =>
    str
        .split(" ")
        .sort(sortOrder)
        .join(" ");


    


console.log(orderWeight("56 65 74 100 99 68 86 180 90"));