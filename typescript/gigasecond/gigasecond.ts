const gigamillisecond = 1000000000 * 1000
class Gigasecond {
  constructor(private readonly start: Date) {}

  date(): Date {
    return new Date(this.start.getTime() + 10 ** 12);
  }
}
export default Gigasecond;