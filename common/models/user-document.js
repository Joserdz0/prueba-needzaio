'use strict';

module.exports = function(Userdocument) {
    Userdocument.validatesLengthOf('Document', {max: 20, message: {max: 'Documento demasiado largo'}});
    Userdocument.validatesLengthOf('PlaceExpedition', {max: 60, message: {max: 'Direccion demasiada larga'}});

};
