//console.log(new Date());

// 12/06/1990 -> new Date(1990, 6, 12)
const { format } = require("date-fns");
const name = "Fernando";
const nascimento = new Date(1990, 5, 12);

console.log(format(nascimento, "'Fernando nasceu em ' dd/MM/yyyy"));