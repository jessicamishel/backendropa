const { Pool } = require('pg');

const pool = new Pool({
    
    host: 'bzoqkfs9k1mirwckdlcc-postgresql.services.clever-cloud.com',
    port: '5432',
    database: 'bzoqkfs9k1mirwckdlcc',
    user: 'u2lkjnjgrouwotbpoopk',
    password: 'Tun7JV0y4hPD1DOTAk5j'
});

const getContactos = async (req, res) => {
    const response = await pool.query('SELECT * FROM contacto;')
    res.status(200).json(response.rows);
}

const getContactoByid = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM contacto WHERE id_contacto = $1', [id])
    res.json(response.rows);
   
}

const postCreateContactos = async (req, res) => {
    const { nombre,telefono,direccion,correo } = req.body;
    //const response = await 
    const response = await pool.query('INSERT INTO agenda(nombre,telefono,direccion,correo) VALUES ($1,$2,$3,$4)', [nombre,telefono,direccion,correo]);
    console.log(response);
    res.json({
        message: 'USUARIO AGREGADO CORRECTAMENTE',

    })
};

const deleteContacto = async (req, res) => {
    const id_contacto = req.params.id;
    const response = await pool.query('DELETE FROM contacto WHERE id_contacto = $1', [id_contacto])
    console.log(response);
    res.json(`Usuario ${id_contacto} eliminado `)
}


module.exports ={
    getContactos,
    getContactoByid,
    postCreateContactos,
    deleteContacto
}