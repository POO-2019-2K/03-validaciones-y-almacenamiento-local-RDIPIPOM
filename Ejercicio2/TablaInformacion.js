export default class TablaInformacion {
    constructor(table) {
        this._table = table;
        this._cantidadCitasLunes;
        this._cantidadCitasMartes;
        this._cantidadCitasMiercoles;
        this._cantidadCitasJueves;
        this._cantidadCitasViernes;
        if (localStorage.getItem('cantidadCitasLunes') === null) {
            localStorage.setItem('cantidadCitasLunes', 0);
            localStorage.setItem('cantidadCitasMartes', 0);
            localStorage.setItem('cantidadCitasMiercoles', 0);
            localStorage.setItem('cantidadCitasJueves', 0);
            localStorage.setItem('cantidadCitasViernes', 0);
        }

        this._recoverVariables();
        this._showInTable();
    }

    _recoverVariables() {
        this._cantidadCitasLunes = Number(localStorage.getItem('cantidadCitasLunes'));
        this._cantidadCitasMartes = Number(localStorage.getItem('cantidadCitasMartes'));
        this._cantidadCitasMiercoles = Number(localStorage.getItem('cantidadCitasMiercoles'));
        this._cantidadCitasJueves = Number(localStorage.getItem('cantidadCitasJueves'));
        this._cantidadCitasViernes = Number(localStorage.getItem('cantidadCitasViernes'));
    }

    _showInTable() {
        this._table.rows[1].cells[1].innerHTML = this._cantidadCitasLunes;
        this._table.rows[2].cells[1].innerHTML = this._cantidadCitasMartes;
        this._table.rows[3].cells[1].innerHTML = this._cantidadCitasMiercoles;
        this._table.rows[4].cells[1].innerHTML = this._cantidadCitasJueves;
        this._table.rows[5].cells[1].innerHTML = this._cantidadCitasViernes;
    }

    update(consulta) {
        switch((consulta.fecha.getDay() + 1)){
            case 1:
            this._cantidadCitasLunes++;
            localStorage.setItem('cantidadCitasLunes', this._cantidadCitasLunes);
            break;
            case 2:
            this._cantidadCitasMartes++;
            localStorage.setItem('cantidadCitasMartes', this._cantidadCitasMartes);
            break;
            case 3:
            this._cantidadCitasMiercoles++;
            localStorage.setItem('cantidadCitasMiercoles', this._cantidadCitasMiercoles);
            break;
            case 4:
            this._cantidadCitasJueves++;
            localStorage.setItem('cantidadCitasJueves', this._cantidadCitasJueves);
            break;
            case 5:
            this._cantidadCitasViernes++;
            localStorage.setItem('cantidadCitasViernes', this._cantidadCitasViernes);
            break;
        }

        this._showInTable();
    }
}