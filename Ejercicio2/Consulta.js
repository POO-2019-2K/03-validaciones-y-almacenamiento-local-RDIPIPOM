export default class Consulta{
    constructor(consulta){
        this._fecha = consulta.fecha;
        this._hora = consulta.hora;
        this._nombre = consulta.nombre;
        this._diasRestantes = this._getDiasRestantes();
    }

    get fecha(){
        return this._fecha;
    }

    get hora(){
        return this._hora;
    }

    get nombre(){
        return this._nombre;
    }

    get diasRestantes(){
        return this._diasRestantes;
    }    

    _getDiasRestantes(){
        return Math.trunc((this._fecha.getTime() - Date.now())/(1000*60*60*24));
    }
}