const findPrimeFactors = (n: number): Record<number, number> => {
    const factors: Record<number, number> = {};
    let divisor: number = 2;
    while (n > 2) {
        if (n % divisor === 0) {
            factors[divisor] = (factors[divisor] || 0) + 1;
            n = n / divisor;
        } else {
            divisor++;
        }
    }
    return factors;
}

export const primeFactors = (n: number): string => {
    const primeFactors = findPrimeFactors(n);
    return Object
        .keys(primeFactors)
        .sort((a, b) => Number(a) - Number(b))
        .map(factor => {
            if (primeFactors[Number(factor)] === 1) {
                return `(${factor})`;
            } else {
                return `(${factor}**${primeFactors[Number(factor)]})`;
            }
        })
        .join("");
}

console.log(primeFactors(90));
console.log(10%2);
console.log(Math.floor(5/2));
