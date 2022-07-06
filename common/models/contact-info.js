'use strict';

module.exports = function(Contactinfo) {
    Contactinfo.validatesLengthOf('Address', {max: 60, message: {max: 'La direccion es demasiada larga'}})
    Contactinfo.validatesLengthOf('City', {max: 50, message: {max: 'La ciudad es demasiado largo'}})
    Contactinfo.validatesLengthOf('Phone', {max: 20, message: {max: 'El numero es demasiado largo'}})
    Contactinfo.validatesLengthOf('CelPhone', {max: 20, message: {max: 'El celular es demasiado largo'}})
    Contactinfo.validatesLengthOf('EmergencyName', {max: 100, message: {max: 'El nombre de emergencia es demasiado largo'}})
    Contactinfo.validatesLengthOf('EmergencyPhone', {max: 20, message: {max: 'El numero de emergencia es demasiado largo'}})
};
