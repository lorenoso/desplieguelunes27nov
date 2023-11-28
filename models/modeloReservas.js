import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reserva = new Schema({
    fechaentrada:{type:Date, required: true},
    fechasalida:{type:Date, required: true},
    personas:{type:Number, required: true},
    nombreClienteReservas:{type:String, required: true},
    costoReserva:{type:Number, required: false},

})

export const modeloReservas = mongoose.model('resevarciones',Reserva)