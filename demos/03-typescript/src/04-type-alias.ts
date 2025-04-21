type NS = number | string;

let chequeAmount: NS = 1000;
chequeAmount = "Two thousand";

// chequeAmount = true; // error

// export {
//     NS,
//     chequeAmount
// }

// export types
export type { NS };

// export values
export { chequeAmount };
