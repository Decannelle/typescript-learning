function getDigits(value: number): number[] {
    return Array.from(String(value), Number);
}

export function narcissistic(value: number): boolean {
    const digits = getDigits(value);
    const sum = digits.reduce((acc, val) => acc + Math.pow(val, digits.length), 0);

    return value === sum;
}


console.log(narcissistic(153));
