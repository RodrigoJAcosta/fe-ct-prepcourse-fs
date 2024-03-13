function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
var Vocal = ("a" || "e" || "i" || "o" || "u");
if (letra == Vocal) return ("Es vocal");
else if ((letra.length > 1) || (letra !== Vocal)) return ("Dato incorrecto");
}

module.exports = esVocal;
