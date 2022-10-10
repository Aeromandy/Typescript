"use strict";
/** tipagem no TypeScript
 * tipagem implícita: */
let username = 'shaolin_matador_de_porco';
username = 'irineuDoPneu';
// tipagem explícita
let pi = 3.1415;
let logado = true;
// union types
let rg = 2587644689;
rg = '2587644689';
let generico = [];
generico = {
    a: '',
    b: 8,
    c: true
};
generico = 'Eu sou genérico';
generico = 6.89;
const listaDeNomes = ['João', 'Antonio', 'Carlos'];
listaDeNomes.push('Roberto');
const notas = [1, 2, 3, 4, 5];
//notas.push('Maria')
const valores = ['abcdef', 77, '8765479', 98765];
// <> generic
const arr = [true, false, false, true, true, false];
const lista = [1, true, {}, [], 'jsuhuhuh'];
const lista2 = [1, true, {}, [], 'jsuhuhuh'];
