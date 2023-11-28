import {ServicioReserva } from "../services/ServiciosReservas.js";


export class ControladorReserva{
 
    constructor(){}
    async registrarReserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            //1.esculcar los datos que quieren usar para el registro
            let idRegistroReserva=peticion.body
            //2.validar los datos
            //3.intentar guardar los datos
            await servicioReserva.registrarReserva(idRegistroReserva)
            //4.Responder 
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos": idRegistroReserva
            })
        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de guardado" + error
                
            })
        }
    }
    async buscarReservaciones(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            //1.intentar buscar los datos en BD
            //2.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de busqueda",
                "datos":await servicioReserva.buscarReservaciones()
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de busqueda"+ error
            })
        }
    }
    async buscarReservaporId(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            //1.esculcar los parametros de la peticion
            let idReservaBuscar =peticion.params.id
           
            //2.validar el dato que llegó
            //3.intento buscar el dato en BD
            //4.responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de guardado",
                "datos":await servicioReserva.modificarReserva(idReservaBuscar)
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de busqueda"+error
            })
        }
    }
    async modificarReserva(peticion, respuesta){
        try{
            let servicioReserva = new ServicioReserva()
            //1.traigo el id a editar de la peticion
            let idReservaModificar = peticion.params.id
            let modificarRegistroReserva=peticion.body
            //let datosHabitacionModificar = peticion.body
            //2.validar los datos
            //3.intento buscar y modifcar en BD
            await servicioReserva.modificarReserva(idReservaModificar,modificarRegistroReserva)
            //responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de edicion",
                "datos":modificarRegistroReserva
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de edicion"+error
            })
        }
    }
    async borrarReserva(peticion, respuesta){
        try{
            let servicioReserva= new ServicioReserva()
            //1.esculcar en el id 
            let idReservaBorrar = peticion.params.id
            //2.Validar
            //3.Intento borrar la habitacion en BD
            await servicioReserva.borrarReserva(idReservaBorrar)
            //4.Responder
            respuesta.status(200).json({
                "mensaje":"exito en la operacion de borrado",
            })

        }catch(error){
            respuesta.status(400).json({
                "mensaje":"fallamos en la operacion de borrado"+error
            })

        }
    }
}