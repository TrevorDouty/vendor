import { ProxyState } from "../AppState.js";

class MachineService {
  coin(coinChosen) {
    let machine = ProxyState.machine;

    machine.currentValue += machine.coins[coinChosen]
    ProxyState.machine = machine
    console.log("A coin was given");
  }
  items(itemChosen) {
    let machine = ProxyState.machine;
    if (machine.[itemChosen] && machine.currentValue >= machine[itemChosen].cost) {
      machine.currentValue -= machine[itemChosen].cost
      alert(`Thank you for purchasing ${machine[itemChosen].name}`)
    }

  }

}



export const machineService = new MachineService()