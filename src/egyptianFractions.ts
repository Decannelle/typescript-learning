type Fract = [n: number, d: number];

const gcd = (a: number, b: number): number => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

const reduce = ([n, d]: Fract): Fract => {
  const divider = gcd(n, d);
  return [Math.round(n / divider), Math.round(d / divider)];
}

const minus = ([n1, d1]: Fract, [n2, d2]: Fract): Fract =>
  reduce([ n1 * d2 - n2 * d1, d1 * d2 ]);

const parse = (s: string): Fract => {
  if (s.indexOf("/") !== -1) {
    const split = s.split("/");
    return reduce([parseInt(split[0]), parseInt(split[1])]);
  } else if (s.indexOf(".") !== -1) {
    const split = s.split(".");
    const [whole, decimal] = split;
    const denom = Math.pow(10, (decimal.length));
    return reduce([parseInt(decimal) + parseInt(whole) * denom, denom])
  } else {
    return reduce([parseInt(s), 1]);
  }
}

export const decompose = (n: string): string[] => {
  let fraction = parse(n);
  const result: string[] = [];
  const [numer, denom] = fraction;
  
  if (numer >= denom) {
    const fullInt = Math.floor(numer/denom);
    result.push(`${fullInt}`);
    if (numer - fullInt * denom !== 0) {
      fraction[0] = numer - fullInt * denom;
    } else {
      return result;
    }
  }

  for (let i = 2;; i++) {
    const [numer, denom] = fraction;
    if (numer === 1) {
      result.push(`1/${denom}`);
      return result;
    } else if ((numer / denom) > 1/i) {
      result.push(`1/${i}`);
      fraction = minus(fraction, [1, i]);

    }
  }
}

console.log(decompose("4/5"));