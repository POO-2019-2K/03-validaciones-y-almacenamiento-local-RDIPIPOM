import TablaCitas from "./TablaCitas.js";
import TablaInformacion from "./TablaInformacion.js";
import Consulta from "./Consulta.js";

export default class Main {
    constructor() {
        //Inicialización de tablas
        let tablaInformacion = new TablaInformacion(document.querySelector('#tablaInformacion'));
        let tablaCitas = new TablaCitas(document.querySelector('#tablaCitas'));

        document.querySelector('#btnAdd').addEventListener('click', () => {
            let form = document.querySelector('#form');
            form.classList.add("was-validated");

            if (form.checkValidity()) {
                let sFecha = new Date(document.querySelector('#fecha').value);
                sFecha = new Date(sFecha.getFullYear(), sFecha.getMonth(), sFecha.getDate());

                let objConsulta = {
                    fecha: sFecha,
                    hora: document.querySelector('#hora').value,
                    nombre: document.querySelector('#nombre').value,
                };

                let consulta = new Consulta(objConsulta);
                tablaCitas.addConsultaToLocalStorangeAndTable(consulta);
                tablaInformacion.update(objConsulta);
            }
        });
    }
}

let main = new Main();