const fetch = require('node-fetch');

const consultaCEP = async (cep) => {
    try {
        const requisicao = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const resposta = await requisicao.json();

        const { logradouro, cep: cepE, bairro, localidade, uf } = await resposta;

        return `CEP: ${cepE}, ${logradouro}, no bairro de ${bairro}, na cidade de ${localidade}/${uf.toUpperCase()}.`;
    }
    catch (error) {
        return error.message;
    }
}

module.exports = { consultaCEP };