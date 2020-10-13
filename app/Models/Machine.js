export default class Machine {
  constructor() {
    this.coins = {
      dollar: 100,
      quarter: 25,
      dime: 10,
      nickel: 5,
    }
    this.item = {
      doritos: "doritos",
      fritos: "fritos",
      lays: "lays",
      skittles: "skittles",
      snickers: "snickers",
      cookies: "cookies",
      crackers: "crackers",
      mints: "mints",
      gum: "gum"
    }
    this.currentValue = 0
  }
}