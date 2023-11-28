import { modeloReservas } from "../models/modeloReservas.js";

export class ServicioReserva{
    constructor(){}

    async registrarReserva(datos){
        let reservaNueva=new modeloReservas(datos)
        return await reservaNueva.save()
    }
    async buscarReservaciones(){
        let reservaciones= await modeloReservas.find()
        return reservaciones
    }
    async buscarReserva(id){
        let reserva = await modeloReservas.findById(id)
        return reserva
    }
    async modificarReserva(id,datos){
        return await modeloReservas.findByIdAndUpdate(id,datos)
    }
    async borrarReserva(id){
        return await modeloReservas.findByIdAndDelete(id)
    }
}