// A função abaixo pode receber tanto um número
// quanto uma string.
function imprimirCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');
// Saída:
// Seu CPF é: 111.111.111-11

type physicsState = 'líquido' | 'sólido' | 'gasoso';

type id = number | string;

type os = 'macOs' | 'windows' | 'linux';

type vowels = 'a' | 'e' | 'i' | 'o' | 'u';