const express = require('express');
const app = express();

app.get('/',(req,res)=>{

    let peso =  req.query.peso;
    let altura = req.query.altura;
    // Declaramos duas variáveis, PESO e ALTURA.
    // Qur utilizamos REQ.QUERY mais a variável para acessar o valor do parâmetro.
    
    // OBS : O nome da variável declara no back-end deve ser a identica a declarada no front-end.

    let imc = peso / (altura*altura);
    // Formula do IMC.
    // Onde o IMC será calculado.

    res.json({imc:imc});
    // Enciamos a respota de volta para o front-end com o IMC calculado.
  
})
app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor node iniciado em:' + data);
})
// Configuramos a porta que irá monitorar a aplicação. 
    
    