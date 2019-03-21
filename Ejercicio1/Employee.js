export default class Employee{
    constructor(number, name, birthday, hireDate, salary, age, antiquity){
        this._number = number;
        this._name = name;
        this._birthday = birthday;
        this._hireDate = hireDate;
        this._salary = salary;
        this._age = age;
        this._antiquity = antiquity;
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

    getAgeAsString(){
        return this._age.getDate() + "/" + this._age.getMonth() + "/" + this._age.getFullYear();
    }
}