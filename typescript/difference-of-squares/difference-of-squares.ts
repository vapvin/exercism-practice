class Squares {

    constructor(private readonly num: number){}
    get squareOfSum(): number{
        return (this.num*(1+this.num) / 2) ** 2;
    }

    get sumOfSquares():number {
        return this.num * (this.num + 1) * ((this.num * 2) + 1) / 6;
    }

    get difference():number {
        return this.squareOfSum - this.sumOfSquares;
    }
}

export default Squares;

