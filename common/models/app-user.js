'use strict';

module.exports = function(Appuser) {
    Appuser.validatesLengthOf('LastName', {max: 20, message: {max: 'El apellido es demasiado largo'}})
    Appuser.validatesLengthOf('Name', {max: 20, message: {max: 'El nombre es demasiado largo'}})
    Appuser.validatesUniquenessOf('email', {message: 'Ya existe uno usuario con este email'});
    Appuser.validatesUniquenessOf('username', {message: 'Ya existe un usuario con este nombre'});

};
