import Employee from './Employee.js';

export default class TableEmployees{
    constructor(table){
        this._table = table;
        this._employees = new Array();
        this._fillWithLocalStorange();
    }

    _fillWithLocalStorange(){
        if(localStorage.getItem('employees') != null){
            this._employees = JSON.parse(localStorage.getItem('employees'));
            this._employees.forEach((employee) => {
                employee.birthday = new Date(employee.birthday);
                employee.hireDate = new Date(employee.hireDate);
                this._addEmployee(new Employee(employee));
            });
        }
    }

    _addEmployee(employee){
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = employee.number;
        cell = row.insertCell(1);
        cell.innerHTML = employee.name;
        cell = row.insertCell(2);
        cell.innerHTML = employee.getBirthdayAsString();
        cell = row.insertCell(3);
        cell.innerHTML = employee.getHireDateAsString();
        cell = row.insertCell(4);
        cell.innerHTML = employee.salary;
        cell = row.insertCell(5);
        cell.innerHTML = employee.age;
        cell = row.insertCell(6);
        cell.innerHTML = employee.antiquity;
    }

    addEmployeeToLocalStorangeAndTable(employee){
        let objEmployee = {
            number: employee.number,
            name: employee.name,
            birthday: employee.birthday,
            hireDate: employee.hireDate,
            salary: employee.salary
        };
        this._employees.push(objEmployee);
        localStorage.setItem('employees', JSON.stringify(this._employees));
        this._addEmployee(employee);
    }
}