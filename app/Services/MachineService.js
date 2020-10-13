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
    // let lowest = machine.item[0].cost
    // machine.item.forEach(item => {
    //   if (item.cost < lowest) {
    //     lowest = item.cost
    //   }
    //   console.log(lowest)
    // })
    if (machine.currentValue >= machine.item[itemChosen].cost) {
      machine.currentValue -= machine.item[itemChosen].cost
      Swal.fire({
        title: 'Thank you for you purchase Chubby',
        width: 300,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url(/assets/img/alert-img2.gif)
          left top
          no-repeat
        `
      })

      // Swal.fire({
      //   title: 'Error!',
      //   text: 'Do you want to continue',
      //   icon: 'error',
      //   confirmButtonText: 'Cool'
      // })


      // alert(`Thank you for purchasing ${machine.item[itemChosen].name}`)
      ProxyState.machine = machine
    }


  }

}



export const machineService = new MachineService()