const { Pool } = require('pg');

const pool = new Pool({
    
    host: 'bpk3cjyu8b3ri5jrpwtl-postgresql.services.clever-cloud.com',
    port: '5432',
    database: 'bpk3cjyu8b3ri5jrpwtl',
    user: 'u3zojzq3wlqcgif2z9it',
    password: 'zOTipYek5dCXLmTDxXzC'
});

const getTemperatura = async (req, res) => {
    const response = await pool.query('SELECT * FROM temperatura;')
    res.status(200).json(response.rows);
}


const postCreateTemperatura = async (req, res) => {
    const {ciudad,temperatura_valor,latitud,longitud} = req.body;
    //const response = await 
    const response = await pool.query('INSERT INTO temperatura(ciudad,temperatura_valor,latitud,longitud) VALUES ($1,$2,$3,$4)', [ciudad,temperatura_valor,latitud,longitud]);
    console.log(response);
    res.json({
        message: 'Temperatura AGREGADO CORRECTAMENTE',

    })
};

const getTemperaturaByid = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM temperatura WHERE id_temperatura = $1', [id])
    res.json(response.rows);
   
}

const deleteTemperatura = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM temperatura WHERE id_temperatura = $1', [id])
    console.log(response);
    res.json(`temperatura ${id} eliminado `)
}
const putUpdateTemperatura = async(req,res) =>{

    const {id_temperatura,ciudad,temperatura_valor,latitud,longitud} = req.query;
    const response = await db.query('UPDATE public.temperatura SET ciudad=$2,temperatura_valor=$3,latitud=$4,longitud=$5 WHERE id_temperatura=$1;',[id_temperatura,ciudad,temperatura_valor,latitud,longitud]) //primer paramatero de el arreglo
    //UPDATE public.contacto SET id_contacto=?, nombre=?, telefono=?, direccion=?, correo=? WHERE <condition>;
    res.json({
        message: 'Temperatura ACTUALIZADA con exito',
        body:{
            temperatura:{id_temperatura,ciudad,temperatura_valor,latitud,longitud}
        }
    })    
}
const updateTemperatura = async(req,res) =>{
    const id = req.params.id;

    const{ciudad,temperatura_valor,latitud,longitud} = req.body;
    const response = await pool.query('UPDATE temperatura SET ciudad=$1,temperatura_valor=$2,latitud=$3,longitud=$4 WHERE id_temperatura=$5',[
        ciudad,
        temperatura_valor,
        latitud,
        longitud,
        id
    ]);
    
    res.json(`temperatura ${id} actualizado correctamente`)

    
}


module.exports ={
    getTemperatura,
    getTemperaturaByid,
    postCreateTemperatura,
    deleteTemperatura,
    putUpdateTemperatura,
    updateTemperatura
}