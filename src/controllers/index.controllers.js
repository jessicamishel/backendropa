const { Pool } = require('pg');

const pool = new Pool({
    host:'bpidyvuqrtxxrvxgcmb9-postgresql.services.clever-cloud.com',
    port:'5432',
    database:'bpidyvuqrtxxrvxgcmb9',
    user:'uh8mrzkg7oa2o5wdiyme',
    password:'SFwaQcOYrVncBprheLMW'
});

const getContactos = async (req, res) => {
    const response = await pool.query('SELECT * FROM agenda;')
    res.status(200).json(response.rows);
}

const getContactoByid = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM agenda WHERE id = $1', [id])
    res.json(response.rows);
   
}

const postCreateContactos = async (req, res) => {
    const { nombre, apellido, email, celular } = req.body;
    //const response = await 
    const response = await pool.query('INSERT INTO agenda(nombre,apellido,email,celular) VALUES ($1,$2,$3,$4)', [nombre, apellido, email, celular]);
    console.log(response);
    res.json({
        message: 'USUARIO AGREGADO CORRECTAMENTE',

    })
};

const deleteContacto = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM agenda WHERE id = $1', [id])
    console.log(response);
    res.json(`Usuario ${id} eliminado `)
}


module.exports ={
    getContactos,
    getContactoByid,
    postCreateContactos,
    deleteContacto
}