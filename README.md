# Sobre a Aula

## Interface de IO com prompt
- IO é input/output
- prompt é a interface usuário - software
- É feito importando o modulo readline do nodejs
- Para criar a estrutura de IO com Node seguimos os seguintes passos
    - Define a const rl = "readline" para importar a readline do modulo node
    - Define uma const prompt para criar a interface IO -> const prompt = rl.createInerface() e dentro dela abrimos um objeto -> rl.createInerface({
                            input: process.stdin,
                            output: process.stdout
                        })
    - Criamos um promptPromise para evitar callback hell, ou seja, a resposta não voltar para o usuário e finalizar a operação
    - Criamos uma async function askUser para perguntar ao usuario
        - Dentro dessa function definimos as variaveis do resultado e puxamos um console.log para mostrar para o usuario o resultado