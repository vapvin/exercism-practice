export default class Squares {

    public squareOfSum: number = 0;
    public sumOfSquares: number = 0;
    public difference: number = 0;
  
    private reducer = (p: number, c: number) => p + c;
  
    constructor(input: number) {
      this.sumOfSquares = new Array(input).fill(0)
        .map((_v: any, i: number) => Math.pow(i + 1, 2))
        .reduce(this.reducer);
  
      this.squareOfSum = Math.pow(new Array(input).fill(0)
        .map((_v: any, i: number) => i + 1)
        .reduce(this.reducer), 2);
  
      this.difference = this.squareOfSum - this.sumOfSquares;
    }
  }