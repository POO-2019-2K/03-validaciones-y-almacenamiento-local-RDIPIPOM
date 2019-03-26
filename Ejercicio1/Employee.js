export default class Employee{
    constructor(employee){
        this._number = employee.number;
        this._name = employee.name;
        this._birthday = employee.birthday;
        this._hireDate = employee.hireDate;
        this._salary = employee.salary;
        this._age = this._getAge();
        this._antiquity = this._getAntiquityInYears();
    }

    get number(){
        return this._number;
    }

    get name(){
        return this._name;
    }

    get birthday(){
        return this._birthday;
    }

    get hireDate(){
        return this._hireDate;
    }

    get salary(){
        return this._salary;
    }

    get age(){
        return this._age;
    }

    get antiquity(){
        return this._antiquity;
    }

    getBirthdayAsString(){
        return this._birthday.getDate() + "/" + this._birthday.getMonth() + "/" + this._birthday.getFullYear();
    }

    getHireDateAsString(){
        return this._hireDate.getDate() + "/" + this._hireDate.getMonth() + "/" + this._hireDate.getFullYear();
    }

    _getAge(){
        return Math.trunc(Number(Date.now() - this._birthday.getTime())/(1000*60*60*24*365));
    }

    _getAntiquityInYears(){
        return Math.trunc(Number(Date.now() - this._hireDate.getTime())/(1000*60*60*24*365));
    }
}