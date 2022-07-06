'use strict';

module.exports = function(Country) {
    Country.validatesLengthOf('CountryCode', {max: 4, message: {max: 'El codigo es demasiado largo'}})
    Country.validatesLengthOf('CountryName', {max: 100, message: {max: 'La ciudad es demasiada larga'}})
};
