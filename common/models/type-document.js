'use strict';

module.exports = function(Typedocument) {
    Typedocument.validatesLengthOf('NameTypeDocument', {max: 50, message: {max: 'El tipo es demasiado largo'}})

};
