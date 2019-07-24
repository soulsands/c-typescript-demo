enum Color {
  Red,
  Green,
  Blue
}
let c: string = Color[2];
console.log(c);
enum Color1 {
  Red = 1,
  Green,
  Blue
}
let d: Color1 = Color1.Green;
enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4
}
let e: Color2 = Color2.Green;
