function efetuarCalculoIMC (peso, altura){
    let imc = peso / (altura*altura);
    return imc;
}
// Criamos uma função chamada efetuarCalculoIMC.
// A função recebe dois parâmetros, peso e altura.
// Em seguida calculamos o IMC. IMC = peso*altura ao quadrado.
// E usamos o RETURN para retornar o resultado do cálculo do IMC.


// A camada de serviço fica no arquivo calculadoraIMC.JS
// Essa Camada é responsável pelo cálculo do IMC.

function retornarStatusIMC(imc)
// Criamos uma função chamada retornarStatusIMC que recebe como parâmetro o IMC.
{
    // Dentro dela adicionamos uma nova variável chamada status e uma estrutura condicional (os ifs) 
    // Para checar e definir o status do usuário.
    let status;

    if( imc < 18.5 )
    {
        status = 'Abaixo do peso';
    }
    else if ( imc >= 18.5 && imc < 24.9 )
    {
        status = 'Peso normal';
    }
    else if ( imc >= 24.9 && imc < 30 )
    {
        status = 'Acima do peso';
    }
    else
    {
        status = 'Obeso';
    }

    return status;
}
function validaParametro(parametro)
{
    if(isNaN(parametro))
    {
        return false;
    }
    else
    {
        return true;
    }
// Utilizamos a função isNaN para detectar se o parâmetro é ou não numérico
// Se não for retornamos false , e se for retornamos true.
}

exports.validaParametro = validaParametro;
exports.retornarStatusIMC = retornarStatusIMC;
exports.efetuarCalculoIMC = efetuarCalculoIMC;
// Exportando a função.