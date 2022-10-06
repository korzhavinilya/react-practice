const sum = (a, b) => a + b;

const nativeNull = () => null;

// const expect = (value) => {
//     return {
//         toBe: exp => {
//             if (exp === value) {
//                 console.log("+");
//             } else {
//                 console.log("-");
//             }
//         }
//     }
// }

module.exports = { sum, nativeNull };
