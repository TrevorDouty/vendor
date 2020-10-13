import { ProxyState } from "../AppState.js";
import { MachineService } from "../Service/MachineService.js";
import { machineService } from "../Services/MachineService.js";

function _draw() {
  let machine = ProxyState.machine
  document.getElementById('machine').innerHTML = /* HTML */
    `
  <h1>Current Amount</h1>
  <h1>${machine.currentValue}</h1>
  `
}

export default class MachineController {
  constructor() {
    console.log("Hello - Controller");
    ProxyState.on("machine", _draw)
    _draw()
  }

  coinSlot(coinChosen) {
    machineService.coinSlot(coinChosen)
  }
}
