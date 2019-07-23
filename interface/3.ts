interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    // ...
    config.color = '11';
    return {color:'11',area:1}
}

let mySquare = createSquare({ colour: "red", width: 100 });