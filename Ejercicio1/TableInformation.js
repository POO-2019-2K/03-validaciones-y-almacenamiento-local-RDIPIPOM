export default class TableInformation {
    constructor(table) {
        this._table = table;
        this._employeesSalaryLess10000;
        this._employeesSalary_10000_20000;
        this._employeesSalaryMore20000;
        this._averangeSalary;
        this._averangeAge;
        if (localStorage.getItem('employeesSalaryLess10000') === null) {
            localStorage.setItem('employeesSalaryLess10000', 0);
            localStorage.setItem('employeesSalary_10000_20000', 0);
            localStorage.setItem('employeesSalaryMore20000', 0);
            localStorage.setItem('averangeSalary', 0);
            localStorage.setItem('averangeAge', 0);
        }

        this._recoverVariables();
        this._showInTable();
    }

    _recoverVariables() {
        this._employeesSalaryLess10000 = Number(localStorage.getItem('employeesSalaryLess10000'));
        this._employeesSalary_10000_20000 = Number(localStorage.getItem('employeesSalary_10000_20000'));
        this._employeesSalaryMore20000 = Number(localStorage.getItem('employeesSalaryMore20000'));
        this._averangeSalary = Number(localStorage.getItem('averangeSalary'));
        this._averangeAge = Number(localStorage.getItem('averangeAge'));
    }

    _showInTable() {
        this._table.rows[1].cells[1].innerHTML = this._employeesSalaryLess10000;
        this._table.rows[2].cells[1].innerHTML = this._employeesSalary_10000_20000;
        this._table.rows[3].cells[1].innerHTML = this._employeesSalaryMore20000;
        this._table.rows[4].cells[1].innerHTML = '$' + this._averangeSalary;
        this._table.rows[5].cells[1].innerHTML = this._averangeAge;
    }

    update(employee) {
        let amountEmployees = (this._employeesSalaryLess10000 + this._employeesSalary_10000_20000 + this._employeesSalaryMore20000) + 1;

        if (employee.salary > 20000) {
            this._employeesSalaryMore20000++;
            localStorage.setItem('employeesSalaryMore20000', this._employeesSalaryMore20000);
        } else if (employee.salary > 10000) {
            this._employeesSalary_10000_20000++;
            localStorage.setItem('employeesSalary_10000_20000', this._employeesSalary_10000_20000);
        } else {
            this._employeesSalaryLess10000++;
            localStorage.setItem('employeesSalaryLess10000', this._employeesSalaryLess10000);
        }

        //Calcular promedio de salario
        this._averangeSalary = 0;
        let employees = JSON.parse(localStorage.getItem('employees'));
        employees.forEach((employee) => {
            this._averangeSalary += Number(employee.salary);
        });
        this._averangeSalary = this._averangeSalary / amountEmployees;
        localStorage.setItem('averangeSalary', this._averangeSalary);

        //Calcular promedio de edad
        this._averangeAge = 0;
        employees.forEach((employee) => {
            this._averangeAge += Math.trunc(Number(Date.now() - (new Date(employee.birthday)).getTime()) / (1000 * 60 * 60 * 24 * 365));
        });
        this._averangeAge = this._averangeAge / amountEmployees;
        localStorage.setItem('averangeAge', this._averangeAge);

        this._showInTable();
    }
}