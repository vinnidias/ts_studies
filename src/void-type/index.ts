// utilizado quando a função não tem return
function noReturn(...args: string[]): void{
  console.log(args.join(' '));
}

const object = {
  name: 'vini',
  secondName: 'dias',

  printName(): void {
    console.log(this.name + ' ' + this.secondName);
  },
}; // sript mode tem escopo global e não permite repitir variável

noReturn();
object.printName();

export { object } // necessário exportação para sair do script mode
