// // 1
// const test1 = (Laptop1) => {
//     const result = [];
//     let temp = Laptop1.color.flatMap(d => Laptop1["screenSize"].map(v => {
//         return { "color": d, "screenSize": v };
//     }));
//     result.push(temp)
//     return result
// }
// const Laptop1 = {
//     "color": ["Red", "White", "Black"],
//     "screenSize": ["13", "14", "15.6"]
// }
// console.log(test1(Laptop1))
// //2
// const test2 = (Laptop2) => {
//     const result = [];
//     let temp = Laptop2.color.flatMap(d => Laptop2.screenSize.flatMap(e => Laptop2.chip.flatMap(f => Laptop2.ram.flatMap(g => {
//         return { color: d, screenSize: e, chip: f, ram: g }
//     }))))
//     result.push(temp)
//     return result
// }
// const Laptop2 = {
//     "color": ["Red", "White", "Black"],
//     "screenSize": ["13", "14", "15.6"],
//     "chip": ["core i3", "core i4", "core i5"],
//     "ram": ["4", "8", "12", "16"]
// }
// console.log(test2(Laptop2))










