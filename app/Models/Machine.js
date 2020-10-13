export default class Machine {
  constructor() {
    this.coins = {
      dollar: 1.00,
      quarter: .25,
      dime: .10,
      nickel: .5,
    }
    this.item = {
      doritos: {
        name: "doritos",
        cost: 1.50,
        button: 1
      },
      fritos: {
        name: "fritos",
        cost: 1.25,
        button: 2
      },

      lays: {
        name: "lays",
        cost: 1.25,
        button: 3
      },

      skittles: {
        name: "skittles",
        cost: 1.00,
        button: 4
      },

      snickers: {
        name: "snickers",
        cost: 1.00,
        button: 5
      },

      cookies: {
        name: "cookies",
        cost: 1.15,
        button: 6
      },

      crackers: {
        name: "crackers",
        cost: .50,
        button: 7
      },

      mints: {
        name: "mints",
        cost: .25,
        button: 8
      },

      gum: {
        name: "gum",
        cost: .25,
        button: 9
      }
    }
    this.currentValue = 0
    this.amountReturned = 0
  }
}