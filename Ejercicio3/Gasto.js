export default class Gasto {
    constructor(gasto) {
        this._fecha = gasto.fecha;
        this._tipo = gasto.tipo;
        this._concepto = gasto.concepto;
        this._monto = gasto.monto;
    }

    get fecha() {
        return this._fecha;
    }

    get tipo() {
        switch (this._tipo) {
            case 'transporte':
                return 'Transporte';
            case 'hospedaje':
                return 'Hospedaje';
            case 'alimentos':
                return 'Alimentos';
            case 'otros':
                return 'Otros gastos';
        }
    }

    get concepto() {
        return this._concepto;
    }

    get monto() {
        return this._monto;
    }
}