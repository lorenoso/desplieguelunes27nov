import {ServicioHabitacion} from '../services/ServicioHabitacion.js'
export class ControladorHabitaciones {

    constructor() { }
    async registrarHabitacion(peticion, respuesta) {
        try {
            let servicioHabitacion = new ServicioHabitacion()
            //1 esculcar los datos que quieren usar para el registro
            let datosHabitacionRegistrar = peticion.body
            //2. validar los datos
            //3. intentar guardar los datos
            await servicioHabitacion.registarHabitacion(datosHabitacionRegistrar)
            //4. Responder
            respuesta.status(200).json({
                "mensaje": "Exito en la operacion de guardar",
                "datos": datosHabitacionRegistrar
            })
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": "Falla en operacion de guardar " + error

            })
        }
    }
    async buscarHabitaciones(peticion, respuesta) {
        try {
            let servicioHabitacion = new ServicioHabitacion()
            //1 intentar buscar los datos en BD
            //2 Responder
            respuesta.status(200).json({
                "mensaje": "Exito en la operacion de busqueda",
                "datos": await servicioHabitacion.buscarHabitaciones()
            })
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": "Falla en operacion de guardar " + error

            })
        }
    }
    async buscarHabitacionPorId(peticion, respuesta) {
        try {
            let servicioHabitacion = new ServicioHabitacion()
            // 1 esculcar los parametos de la peticion
            let idHabitacionBuscar = peticion.params.id

            // 2 validar el dato que llega
            // 3 intento buscar el dato en BD
            // 4 responder
            respuesta.status(200).json({
                "mensaje": "Exito en la operacion de busqueda",
                "datos": await servicioHabitacion.buscarHabitacion(idHabitacionBuscar)
            })
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": "Falla en operacion de guardar " + error

            })
        }
    }
    async modificarHabitacion(peticion, respuesta) {
        try {
            let servicioHabitacion = new ServicioHabitacion()
            //1 traigo el id a editar de la petición
            let idHabitacionModificar=peticion.params.id
            let datosHabitacionModificar=peticion.body
            // validar los datos
            //Intentar buscar y modificar
            await servicioHabitacion.modificarHabitacion(idHabitacionModificar,datosHabitacionModificar)
            //responder
            respuesta.status(200).json({
                "mensaje": "Exito en la operacion de edicion",
                "datos": datosHabitacionModificar
            })

        } catch (error) { respuesta.status(400).json({
            "mensaje": "Falla en operacion de edicion " + error

        })}
    }
    async borrarHabitacion(peticion, respuesta) {
        try {
            let servicioHabitacion= new ServicioHabitacion()
            let idHabitacionBorrar= peticion.params.id
            console.log(idHabitacionBorrar)
            //validar
            //intento borrar la habitacion de la base de datos
            await servicioHabitacion.borrarHabitacion(idHabitacionBorrar)   
            respuesta.status(200).json({
                "mensaje": "Exito en la operacion de borrado"
               
            })

        } catch (error) { respuesta.status(400).json({
            "mensaje": "Falla en operacion de eliminacion " + error

        }) }
    }


}