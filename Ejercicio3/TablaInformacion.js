export default class TablaInformacion {
    constructor(table) {
        this._table = table;
        this._gastosTransporte;
        this._gastosHospedaje;
        this._gastosAlimentos;
        this._gastosOtros;
        if (localStorage.getItem('gastosTransporte') === null) {
            localStorage.setItem('gastosTransporte', 0);
            localStorage.setItem('gastosHospedaje', 0);
            localStorage.setItem('gastosAlimentos', 0);
            localStorage.setItem('gastosOtros', 0);
        }

        this._recoverVariables();
        this._showInTable();
    }

    _recoverVariables() {
        this._gastosTransporte = Number(localStorage.getItem('gastosTransporte'));
        this._gastosHospedaje = Number(localStorage.getItem('gastosHospedaje'));
        this._gastosAlimentos = Number(localStorage.getItem('gastosAlimentos'));
        this._gastosOtros = Number(localStorage.getItem('gastosOtros'));
    }

    _showInTable() {
        this._table.rows[1].cells[1].innerHTML = this._gastosTransporte;
        this._table.rows[2].cells[1].innerHTML = this._gastosHospedaje;
        this._table.rows[3].cells[1].innerHTML = this._gastosAlimentos;
        this._table.rows[4].cells[1].innerHTML = this._gastosOtros;
    }

    update(gasto) {
        switch (gasto.tipo) {
            case 'transporte':
                this._gastosTransporte += gasto.monto;
                localStorage.setItem('gastosTransporte', this._gastosTransporte);
                break;
            case 'hospedaje':
                this._gastosHospedaje += gasto.monto;
                localStorage.setItem('gastosHospedaje', this._gastosHospedaje);
                break;
            case 'alimentos':
                this._gastosAlimentos += gasto.monto;
                localStorage.setItem('gastosAlimentos', this._gastosAlimentos);
                break;
            case 'otros':
                this._gastosOtros += gasto.monto;
                localStorage.setItem('gastosOtros', this._gastosOtros);
                break;
        }

        this._showInTable();
    }
}