import { ProxyState } from "../AppState.js";

class MachineService {
  let machine = ProxyState.machine;

coin(coinChosen) {
  machine.currentValue += machine.coins[coinChosen]
  ProxyState.machine = machine
}

console.log("A coin was given");
}



export const machineService = new machineService()