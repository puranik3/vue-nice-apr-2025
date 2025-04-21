import type { NS } from "./04-type-alias";

// const chequeAmounts1: (number | string)[] = [
const chequeAmounts1: NS[] = [1000, "Two thousand", "Three thousand"];

// error as if it an array, it can have only strings
// const chequeAmounts2: number | string[] = [
//     1000,
//     "Two thousand",
//     "Three thousand",
// ]; // 1000 is ok

export {}
