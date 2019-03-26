import TablaGastos from "./TablaGastos.js";
import TablaInformacion from "./TablaInformacion.js";
import Gasto from "./Gasto.js";

export default class Main {
    constructor() {
        //Inicialización de tablas
        let tablaInformacion = new TablaInformacion(document.querySelector('#tablaInformacion'));
        let tablaGastos = new TablaGastos(document.querySelector('#tablaGastos'));

        document.querySelector('#btnAdd').addEventListener('click', () => {
            let form = document.querySelector('#form');
            form.classList.add("was-validated");

            if (form.checkValidity()) {
                let sFecha = new Date(document.querySelector('#fecha').value);
                sFecha = new Date(sFecha.getFullYear(), sFecha.getMonth(), sFecha.getDate());

                let objGasto = {
                    fecha: sFecha,
                    tipo: document.querySelector('#tipo').value,
                    concepto: document.querySelector('#concepto').value,
                    monto: Number(document.querySelector('#monto').value),
                };

                let gasto = new Gasto(objGasto);
                tablaGastos.addGastoToLocalStorangeAndTable(gasto);
                tablaInformacion.update(objGasto);
            }
        });
    }
}

let main = new Main();