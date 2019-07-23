class Person {
    hobby: string;
    constructor(hobby: string) {
        this.hobby = hobby;
    }
    echo() {
        return '我就喜欢：' + this.hobby;
    }
}
let person = new Person('抽烟，喝酒11111，烫头');
let hobby = person.echo();
console.log(hobby);

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
console.log(Color.Green);  // 显示'Green'因为上面代码里它的值是2