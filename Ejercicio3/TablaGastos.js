export default class TablaGastos{
    constructor(table){
        this._table = table;
        this._gastos = new Array();
        this._fillWithLocalStorange();
    }

    _fillWithLocalStorange(){
        if(localStorage.getItem('gastos') != null){
            this._gastos = JSON.parse(localStorage.getItem('gastos'));
            this._gastos.forEach((gasto) => {
                gasto.fecha = new Date(gasto.fecha);
                this._addGasto(gasto);
            });
        }
    }

    _addGasto(gasto){
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = (gasto.fecha.getDate() + 1) + '/' + (gasto.fecha.getMonth() + 1) + '/' + gasto.fecha.getFullYear();
        cell = row.insertCell(1);
        cell.innerHTML = gasto.tipo;
        cell = row.insertCell(2);
        cell.innerHTML = gasto.concepto;
        cell = row.insertCell(3);
        cell.innerHTML = gasto.monto;
    }

    addGastoToLocalStorangeAndTable(gasto){
        let objGasto = {
            fecha: gasto.fecha,
            tipo: gasto.tipo,
            concepto: gasto.concepto,
            monto: gasto.monto
        };

        this._gastos.push(objGasto);
        localStorage.setItem('gastos', JSON.stringify(this._gastos));
        this._addGasto(gasto);
    }
}