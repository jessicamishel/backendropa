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


const postCreateContactos = async (req, res) => {
    const { nombre,telefono,direccion,correo } = req.body;
    //const response = await 
    const response = await pool.query('INSERT INTO contacto(nombre,telefono,direccion,correo) VALUES ($1,$2,$3,$4)', [nombre,telefono,direccion,correo]);
    console.log(response);
    res.json({
        message: 'USUARIO AGREGADO CORRECTAMENTE',

    })
};

const getContactoByid = async (req, res) => {
    const id = req.params.id
    const response = await pool.query('SELECT * FROM contacto WHERE id_contacto = $1', [id])
    res.json(response.rows);
   
}

const deleteContacto = async (req, res) => {
    const id_contacto = req.params.id;
    const response = await pool.query('DELETE FROM contacto WHERE id_contacto = $1', [id_contacto])
    console.log(response);
    res.json(`Usuario ${id_contacto} eliminado `)
}
const putUpdateContacto = async(req,res) =>{

    const {id_contacto,nombre, telefono, direccion, correo} = req.query;
    const response = await db.query('UPDATE public.contacto SET nombre=$2, telefono=$3, direccion=$4, correo=$5 WHERE id_contacto=$1;',[id_contacto,nombre, telefono, direccion, correo]) //primer paramatero de el arreglo
    //UPDATE public.contacto SET id_contacto=?, nombre=?, telefono=?, direccion=?, correo=? WHERE <condition>;
    res.json({
        message: 'Contacto ACTUALIZADA con exito',
        body:{
            pizza:{id_contacto,nombre, telefono, direccion, correo}
        }
    })

}


module.exports ={
    getContactos,
    getContactoByid,
    postCreateContactos,
    deleteContacto,
    putUpdateContacto
}