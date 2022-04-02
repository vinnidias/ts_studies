//Usar type :any em último caso; tomar cuidado com funçoes any implícitas;

function anyFunction(msg: any) {
  return msg;
}

console.log(anyFunction([1, 9, 3]));
console.log(anyFunction('string'));
console.log(anyFunction(2));
