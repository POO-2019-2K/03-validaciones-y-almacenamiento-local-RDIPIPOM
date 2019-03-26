import TableEmployees from "./TableEmployees.js";
import TableInformation from "./TableInformation.js";
import Employee from "./Employee.js";

export default class Main {
    constructor() {
        //Inicialización de tablas
        let tableInformation = new TableInformation(document.querySelector('#tableInformation'));
        let tableEmployees = new TableEmployees(document.querySelector('#tableEmployees'));

        document.querySelector('#btnAdd').addEventListener('click', () => {
            let form = document.querySelector('#form');
            form.classList.add("was-validated");

            if (form.checkValidity()) {
                let sBirthday = new Date(document.querySelector('#birthday').value);
                sBirthday = new Date(sBirthday.getFullYear(), sBirthday.getMonth() + 1, sBirthday.getDate() + 1);

                let sHireDate = new Date(document.querySelector('#hireDate').value);
                sHireDate = new Date(sHireDate.getFullYear(), sHireDate.getMonth() + 1, sHireDate.getDate() + 1);

                let objEmployee = {
                    number: Number(document.querySelector('#number').value),
                    name: document.querySelector('#name').value,
                    birthday: sBirthday,
                    hireDate: sHireDate,
                    salary: Number(document.querySelector('#salary').value)
                };

                let employee = new Employee(objEmployee);
                tableEmployees.addEmployeeToLocalStorangeAndTable(employee);
                tableInformation.update(objEmployee);
            }
        });
    }
}

let main = new Main();