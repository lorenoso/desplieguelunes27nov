import mongoose from 'mongoose';
export async function establecerConexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log('Exito en la conexion')
    }
    catch(error){
        console.log('Fallamos conectandonos' + error)
    }

}