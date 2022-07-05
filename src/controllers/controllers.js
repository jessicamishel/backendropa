const { Pool } = require('pg');

const pool = new Pool({
    host:'bynlaxx3e1kfr2w1rdae-postgresql.services.clever-cloud.com',
    port:'5432',
    database:'bynlaxx3e1kfr2w1rdae',
    user:'udr1mgsby6pevmqvtiip',
    password:'GmcVRRs0VQYzaCeE8Y4d'
});

const getRopa = async (req, res) => {
    const response = await pool.query('SELECT * from ropa order by idropa;')
    res.status(200).json(response.rows);
}

const getRopaByid = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM ropa WHERE idropa = $1', [id])
    res.json(response.rows);
   
}

const getRopaByDate = async (req, res) => {
    const fecha = req.params.fecha
    const response = await pool.query('SELECT * FROM ropa WHERE fecha = $1', [fecha])
    res.json(response.rows);
   
}
const getRopaByType = async (req, res) => {
    const tipo = req.params.tipo
    const response = await pool.query('select * from ropa where tipo = $1', [tipo])
    res.json(response.rows)
}
const postCreateRopa = async (req, res) => {
    const { tipo, marca, nombre, talla, costo, stock, imagen, fecha } = req.body;
    //const response = await 
    const response = await pool.query('INSERT INTO ropa(tipo,marca,nombre,talla,costo,stock,imagen, fecha) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [tipo, marca, nombre, talla,costo,stock,imagen, fecha]);
    console.log(response);
    res.json({
        message: 'ROPA AGREGADA  CORRECTAMENTE',

    })
};

const deleteRopa = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM ropa WHERE idropa = $1', [id])
    console.log(response);
    res.json(`Ropa ${id} eliminado `)
}
const updateRopa = async(req,res) =>{
    const id = req.params.id;

    const { tipo, marca, nombre, talla,costo,stock,imagen,fecha } = req.body;
    const response = await pool.query('UPDATE ropa SET tipo=$1, marca=$2, nombre=$3, talla=$4, costo=$5, stock=$6,imagen=$7, fecha=$8 WHERE idropa=$9',[
        tipo, marca, nombre, talla,costo,stock,imagen,fecha,id
    ]);
    
    res.json(`Ropa ${id} actualizado correctamente :)`)    
}
// ----------------------------------------------CLIENTE----------------------------------------
const getCliente = async (req, res) => {
    const response = await pool.query('SELECT * from cliente order by idcliente;')
    res.status(200).json(response.rows);
}

const getClienteByid = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM cliente WHERE idcliente = $1', [id])
    res.json(response.rows);
   
}

const postCreateCliente = async (req, res) => {
    const { nombre, apellido, correo, telefono, direccion } = req.body;
    //const response = await 
    const response = await pool.query('INSERT INTO cliente(nombre, apellido, correo, telefono, direccion) VALUES ($1,$2,$3,$4,$5)', [nombre, apellido, correo, telefono, direccion]);
    console.log(response);
    res.json({
        message: 'CLIENTE AGREGADO CORRECTAMENTE',

    })
}

const deleteCliente = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM cliente WHERE idcliente = $1', [id])
    console.log(response);
    res.json(`Cliente ${id} eliminado `)
}
const updateCliente = async(req,res) =>{
    const id = req.params.id;

    const { nombre, apellido, correo, telefono, direccion } = req.body;
    const response = await pool.query('UPDATE cliente SET nombre=$1, apellido=$2, correo=$3, telefono=$4, direccion=$5 WHERE idcliente=$6',[
        nombre, apellido, correo, telefono, direccion,id
    ]);
    
    res.json(`Cliente ${id} actualizado correctamente :)`)    
}

//Venta
const postCreateVenta = async (req, res) => {
    const { idcliente, idropa, fecha, cantidad, subtotal, total } = req.body;
    //const response = await 
    const response = await pool.query('INSERT INTO venta(idcliente, idropa, fecha, cantidad, subtotal, total) VALUES ($1,$2,$3,$4,$5,$6)', [idcliente, idropa, fecha, cantidad, subtotal, total]);
    console.log(response);
    res.json({
        message: 'VENTA AGREGADA',

    })
};

const getVenta = async (req, res) => {
    const response = await pool.query('SELECT * from venta order by idventa;')
    res.status(200).json(response.rows);
}

module.exports={
    getRopa,
    getRopaByid,
    postCreateRopa,
    deleteRopa,
    updateRopa,
    getRopaByDate,
    getRopaByType,

    //cliente
    getCliente,
    getClienteByid,
    postCreateCliente,
    deleteCliente,
    updateCliente,
    //VENTA
    postCreateVenta,
    getVenta
}