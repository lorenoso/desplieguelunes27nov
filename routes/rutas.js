import express from 'express'
import { ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReserva } from '../controllers/ControladorReservas.js'

/* para poder llamar al controlador
  debo crear un objeto de la clase controlador

*/

/* los codigo  http se dividen en 5 
los codigos 2XX son afirmativos
los codgos 3XX redirection
los codigos 4xx errores de front errores del cliente
los codigos 5XX problemas del servidor o errores del backend
*/
let controladorHabitaciones = new ControladorHabitaciones();
let controladorReservas = new ControladorReserva();

//metod de express que permite realizar las rutas
export let rutas = express.Router()


rutas.post('/api/habitaciones', controladorHabitaciones.registrarHabitacion)
rutas.get('/api/habitacion/:id', controladorHabitaciones.buscarHabitacionPorId)
rutas.get('/api/habitaciones', controladorHabitaciones.buscarHabitaciones)
rutas.put('/api/habitaciones/:id', controladorHabitaciones.modificarHabitacion)
rutas.delete('/api/habitaciones/:id', controladorHabitaciones.borrarHabitacion)
rutas.post('/api/reservas', controladorReservas.registrarReserva)
rutas.get('/api/reserva/:id', controladorReservas.buscarReservaporId)
rutas.get('/api/reservas', controladorReservas.buscarReservaciones)
rutas.put('/api/reservas/:id', controladorReservas.modificarReserva)
rutas.delete('/api/reservas/:id', controladorReservas.borrarReserva)