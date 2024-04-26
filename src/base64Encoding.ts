export const toBase64 = (str: string): string => btoa(str);

export const fromBase64 = (str: string): string => atob(str);



console.log(btoa("this is a string!!"));