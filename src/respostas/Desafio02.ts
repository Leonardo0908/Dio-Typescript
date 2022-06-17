// Como podemos melhorar o esse código usando TS?

 type um = {
    profissao: profissao,
    idade: number,
    nome: string,
 }

enum profissao {
    Padeiro,
    atriz
}



let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: profissao.atriz,
};

let pessoa2 = {
    nome: "roberto",
    idade:  19,
    profissao: profissao.Padeiro
    };

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: profissao.atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}