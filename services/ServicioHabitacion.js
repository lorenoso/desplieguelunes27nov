import {modeloHabitacion} from '../models/modeloHabitacion.js'
export class ServicioHabitacion{
    constructor(){}

    async registarHabitacion(datos){
        let habitacionNueva = new modeloHabitacion(datos)
        return await habitacionNueva.save()
    }
    async buscarHabitacion(id){
        let habitacion = await modeloHabitacion.findById(id)
        return habitacion
    }
    async buscarHabitaciones(){
        let habitaciones = await modeloHabitacion.find()
        return habitaciones
    }
    async modificarHabitacion(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }
    async borrarHabitacion(id){
        return await modeloHabitacion.findOneAndRemove(id)
}

}

