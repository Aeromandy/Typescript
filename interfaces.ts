/**let pessoa = {
    nome: 'Florinda',
    idade: 22,
    altura: 1.8,
    cpf: '111.111.111-11',
    solteiro: false,
    habilidades: ['Java', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Spring Boot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '123000-000'
    }
}

let pessoa2 = {
    nome: 'Pietro',
    idade: 23,
    altura: 1.8,
    cpf: '222.222.222-22',
    solteiro: false,
    habilidades: ['Java', 'Angular', 'TypeScript', 'JavaScript', 'Node.js', 'Spring Boot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '123000-000'
    },
    rg: '987654321'
}*/

interface Endereco {
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string
}

interface Pessoa {
    nome: string
    idade: number
    altura: number
    cpf: string
    solteiro: boolean
    habilidades: string[]
    endereco: Endereco
    rg: string
    cumprimentar(): void
}

const p: Pessoa = {
    altura: 1.9,
    nome: 'Faustão',
    idade: 12,
    cpf: '333.333.333-33',
    solteiro: true,
    habilidades: ['HTML'],
    rg: '123123123',
    endereco: {
        rua: 'Rua Bacana',
        numero: 234,
        complemento: 'Apto 301',
        estado: 'PE',
        cep: '321000-000'
    },
    cumprimentar() {
        console.log('Saudações, meu nome é ' + this.nome)
    }
}

const p2: Pessoa = {
    nome: 'Paula',
    altura: 1.7,
    idade: 24,
    cpf: '444.444.444-44',
    habilidades: ['HTML'],
    endereco: {
        estado: 'CE',
        rua: 'Rua do Ceará',
        complemento: 'Não tem',
        numero: 607,
        cep: '444000-000',
    },
    rg: '165167181',
    solteiro: false,
    cumprimentar() {
        console.log('Olá, prazer em conhecê-los')
    }

}