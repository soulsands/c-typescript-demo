class Person {
    constructor(hobby) {
        this.hobby = hobby;
    }
    echo() {
        return '我就喜欢：' + this.hobby;
    }
}
let person = new Person('抽烟，喝酒11111，烫头');
let hobby = person.echo();
console.log(hobby);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let colorName = Color[2];
console.log(colorName); // 显示'Green'因为上面代码里它的值是2
console.log(Color.Green); // 显示'Green'因为上面代码里它的值是2
