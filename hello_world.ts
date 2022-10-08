/** tipagem no TypeScript
 * tipagem implícita: */
let username = 'shaolin_matador_de_porco'
username = 'irineuDoPneu'

// tipagem explícita
let pi: number = 3.1415
let logado: boolean = true


// union types
let rg: number | string = 2587644689
rg = '2587644689'

let generico: any = []
generico = {
    a: '',
    b: 8,
    c: true
}
generico = 'Eu sou genérico'
generico = 6.89

const listaDeNomes: string[] = ['João', 'Antonio', 'Carlos']
listaDeNomes.push('Roberto')

const notas: number[] = [1, 2, 3, 4, 5]
//notas.push('Maria')

const valores: Array<string | number> = ['abcdef', 77, '8765479', 98765]
// <> generic
const arr: Array<boolean> = [true, false, false, true, true, false]
const lista: Array<any> = [1, true, {}, [], 'jsuhuhuh' ]
const lista2: any[] = [1, true, {}, [], 'jsuhuhuh' ]
