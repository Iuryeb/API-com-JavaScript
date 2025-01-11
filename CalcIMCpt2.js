const express = require ('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');
// Exportando a função que contém o calculo e atribuimos a constante calculadoraIMC.

app.get('/', (req,res) =>{

    let peso = req.query.peso;
    let altura = req.query.altura;
    // Definimos as variáveis peso e altura, atribuindo a elas os valores vindo do front-end.
    if(calculadoraIMC.validaParametro(req.query.peso) && 
    calculadoraIMC.validaParametro(req.query.altura))
    // Para Utilizarmos a validação de parametro , chamamos a função.
    // validaParametro dentro do GET da API  e passamos os parâmetros peso e altura.
    // Desse modo, o cálculo do IMC só ocorrerá se os dois parâmetro tiverem certo. 
    {

    let imc = calculadoraIMC.efetuarCalculoIMC (peso, altura);
    // Criamos uma variavel para guardar o resultado do IMC, e dentro da variável.
    // Chamamos a função efetuarCalculoIMC através da costante calculadoraIMC.
    // Passamos os valores de peso e altura para a função.
    let status =  calculadoraIMC.retornarStatusIMC(imc)
    // Criamos uma variável chamada STATUS para receber o resultado do retorno da função retornaStatusIMC.

    let json = {imc: imc, status: status};
    // Criamos variável chamada JSON e associamos a ela um JSON de duas chaves com o IMC e o STATUS.

    res.json(json);
    // Por fim enviamos nosso JSON como resposta de volta para o front-end.
    
    // Finalizando o método GET enviamos uma resposta de volta ao front-end com o IMC em formato JSON.
    }
    // O cálculo só ocorrerá se os parâmetros tiverem certo.

    // Caso tiver errado , virá para o elso , será enviado a mensagem de erro. 
    else
    {
        res.status(400).json({'Erro': 'Peso ou altura inválidas'});
        // Para retornar um código de status para o front-end atráves do Node e Express.
        // Utilizamos a função status, nativa do Express.

        // A função STATUS é chamada a partir do parâmetro RES, ou seja, o parâmetro que contém a resposta que a API front-end.
        // Passamos como parâmetro para a função o código de status que queremos retornar, que no nosso caso é 400.
        // Por fim , chamamos a função JSON , e passamos para ela o que queremos rertornar para o front-end. 

        // No else , adicionamos a linha reponsável pelo retorno do código de status 400 para o front-end.
    }
    

});

app.listen(8080, ()=>{
    let data = new Date();
    console.log('Servidor Iniciado em:'+ data);
});