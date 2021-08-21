function multiplicar(m1,m2){
  r = m1*m2;
  console.log("Resultado" + r);
}

function dividir(m1,m2){
   return m2 != 0 ? m1/m2 : console.log("Division entre 0 no valida");
}


console.log(multiplicar(4));
console.log(dividir(4));