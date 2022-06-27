const express = require('express'),
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    config = require('./config'),
    app = express();
app.set('llave', config.llave);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//base datos
const { Pool } = require('pg');

const pool = new Pool({
    host:'bynlaxx3e1kfr2w1rdae-postgresql.services.clever-cloud.com',
    port:'5432',
    database:'bynlaxx3e1kfr2w1rdae',
    user:'udr1mgsby6pevmqvtiip',
    password:'GmcVRRs0VQYzaCeE8Y4d'
});

app.get('/', function (req, res) {
    res.send('Inicio ok');
});

//login:
const postAutenticar = async (req, res) => {
const {usuario, contrasena} = req.body;
const response = await pool.query('SELECT * FROM login WHERE usuario = $1 and contrasena=$2', [usuario, contrasena]);

if(response.rows === 0){
    const payload = {
        check: true
    };
    const token = jwt.sign(payload, app.get('llave'), {
        expiresIn: 1440
    });
    res.json({
        mensaje: 'Autenticación correcta.',
        token: token
    });

}else {
    res.json({ mensaje: "Usuario o contraseña incorrectos." })
}
res.status(200).json(response.rows);
}
//middleware:
/**
const rutasProtegidas = express.Router();
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
        jwt.verify(token, app.get('llave'), (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token incorrecto.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.send({
            mensaje: 'Debe indicar un token.'
        });
    }
});
*/

module.exports={
    postAutenticar
}