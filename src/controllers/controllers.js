const { Pool } = require('pg');

const pool = new Pool({
    host:'ba8ebimqysxe4cawaakt-postgresql.services.clever-cloud.com',
    port:'5432',
    database:'ba8ebimqysxe4cawaakt',
    user:'u1eyupo4f38xe5sc8f5q',
    password:'Ac4gdQGGnUboh8bHErAS'
});

const getRopa = async (req, res) => {
    const response = await pool.query('SELECT * from ropa order by id;')
    res.status(200).json(response.rows);
}

const getRopaByid = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM ropa WHERE id = $1', [id])
    res.json(response.rows);
   
}
const postCreateRopa = async (req, res) => {
    const { tipo, marca, nombre, talla,costo,imagen } = req.body;
    //const response = await 
    const response = await pool.query('INSERT INTO ropa(tipo,marca,nombre,talla,costo,imagen) VALUES ($1,$2,$3,$4,$5,$6)', [tipo, marca, nombre, talla,costo,imagen]);
    console.log(response);
    res.json({
        message: 'ROPA AGREGADA  CORRECTAMENTE',

    })
};

const deleteRopa = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM ropa WHERE id = $1', [id])
    console.log(response);
    res.json(`Ropa ${id} eliminado `)
}
const updateRopa = async(req,res) =>{
    const id = req.params.id;

    const { tipo, marca, nombre, talla,costo,imagen } = req.body;
    const response = await pool.query('UPDATE ropa SET tipo=$1, marca=$2, nombre=$3, talla=$4, costo=$5, imagen=$6 WHERE id=$7',[
        tipo, marca, nombre, talla,costo,imagen,id
    ]);
    
    res.json(`Ropa ${id} actualizado correctamente :)`)    
}
module.exports={
    getRopa,
    getRopaByid,
    postCreateRopa,
    deleteRopa,
    updateRopa
}