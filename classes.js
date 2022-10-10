"use strict";
class Cachorro {
    // atributo ou propriedades
    /*nome: string
    raca: string
    cor: string
    idade: number
    peso: number
    altura: number
    morde: boolean
    vacinado: boolean
    pedigree: boolean*/
    /** Método construtor
     * serve para que ao criar um novo objeto da classe, possamos receber valores que serão utilizados na classe
     * se o programador não criar esse método, a própria linguagem gera um método construtor padrão
     * no JS/TS só pode ter um único método construtor
     */
    constructor(nome, raca, cor, idade, peso, altura, morde, vacinado, pedigree) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.morde = morde;
        this.vacinado = vacinado;
        this.pedigree = pedigree;
        // this faz referência a própria classe dentro dela mesma
        /*this.nome = nome
        this.raca = raca
        this.cor = cor
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.morde = morde
        this.vacinado = vacinado
        this.pedigree = pedigree*/
    }
    somar(a, b) {
        return a + b;
    }
}
// Objeto é uma instância de uma classe
let c = new Cachorro('Batata', 'Golden Retriever', 'Caramelo', 5, 40, 0.6, false, true, true);
console.log(c);
let c2 = new Cachorro('Snoopy', 'Labrador', 'Bege', 6, 50, 0.7, false, true, true);
