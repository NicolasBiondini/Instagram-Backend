const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');

module.exports = function () {

    //Agrega nuevos users por medio de POST
    router.post('/users',
        userControllers.newUser
    );

    //ver users en /users
    router.get('/users',
        userControllers.viewUsers
    );

    //ver un user con un id especifico
    router.get('/users/:id',
        userControllers.viewUser
    );

    // actualizar registro id especifico
    router.put('/users/:id',
        userControllers.actualizeUser
    );

    //elimina por ID
    router.delete('/users/:id',
        userControllers.deleteUser
    );

    return router;
}