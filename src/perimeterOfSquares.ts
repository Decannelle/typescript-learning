function* makeFibonacciIterator() {
    let f1 = 0;
    let f2 = 1;
    yield f1;
    yield f2;
    while (true) {
        let f3 = f1 + f2;
        yield f3;
        f1 = f2;
        f2 = f3;
    }
}

function* take(generator: Generator<number, void, unknown>, n: number) {
    for (let item of generator) {
        if (n == 0) {
            return;
        } else {
            n--;
        }
        yield item;
    }
}

export const perimeter = (n: number): number => { 
    // the task is wrong because F1 is 0, thus we have to make it n + 2
    const squares = Array.from(take(makeFibonacciIterator(), n + 2));
    return 4 * squares.reduce((a, b) => a + b);
}

console.log(perimeter(5));