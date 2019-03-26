import Consulta from './Consulta.js';

export default class TablaCitas {
    constructor(table) {
        this._table = table;
        this._consultas = new Array();
        this._fillWithLocalStorange();
    }

    _fillWithLocalStorange() {
        if (localStorage.getItem('consultas') != null) {
            this._consultas = JSON.parse(localStorage.getItem('consultas'));
            this._consultas.forEach((consulta) => {
                consulta.fecha = new Date(consulta.fecha);
                this._addConsulta(new Consulta(consulta));
            });
        }
    }

    _addConsulta(consulta) {
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = (consulta.fecha.getDate() + 1) + '/' + (consulta.fecha.getMonth() + 1) + '/' + consulta.fecha.getFullYear();
        cell = row.insertCell(1);
        cell.innerHTML = consulta.hora;
        cell = row.insertCell(2);
        cell.innerHTML = consulta.nombre;
        cell = row.insertCell(3);
        cell.innerHTML = consulta.diasRestantes;
    }

    addConsultaToLocalStorangeAndTable(consulta) {
        let objConsulta = {
            fecha: consulta.fecha,
            hora: consulta.hora,
            nombre: consulta.nombre,
        };

        this._consultas.push(objConsulta);
        localStorage.setItem('consultas', JSON.stringify(this._consultas));
        this._addConsulta(consulta);
    }
}