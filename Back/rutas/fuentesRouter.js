import express from 'express';

import { sequelize } from "../loadSequelize.js";

import Fuentes from '../Models/Fuentes.js';


const router = express.Router();


// CREAR UNA FUENTE
router.post('/newfont', function (req, res, next) {
    sequelize.sync().then(() => {
        console.log(req.body);
        Fuentes.create(req.body)
            .then((item) => res.json({ ok: true, data: item }))
            .catch((error) => res.json({ ok: false, error: error.message }))


    }).catch((error) => {
        res.json({
            ok: false,
            error: error.message
        })
    });
});


    ;

export default router;