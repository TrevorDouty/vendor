import ValuesController from "./Controllers/ValuesController.js";
import MachineController from "./Controllers/MachineController.js";
class App {
  valuesController = new ValuesController();
  machineController = new MachineController();
}

window["app"] = new App();
