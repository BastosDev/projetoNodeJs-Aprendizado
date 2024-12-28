# Sobre a Aula
- console.dir para objetos
    - console.table para melhor vizualização+
- console.error para erros
## Interface de IO com prompt
- IO é input/output
- prompt é a interface usuário - software
- É feito importando o modulo readline do nodejs
- Para criar a estrutura de IO com Node seguimos os seguintes passos
    - Define a const rl = require("readline") para importar a readline do modulo node
    - Define uma const prompt para criar a interface IO -> const prompt = rl.createInerface() e dentro dela abrimos um objeto -> rl.createInerface({
                            input: process.stdin,
                            output: process.stdout
                        })
    - Criamos um promptPromise para evitar callback hell, ou seja, a resposta não voltar para o usuário e finalizar a operação
    - Criamos uma async function askUser para perguntar ao usuario
        - Dentro dessa function definimos as variaveis do resultado e puxamos um console.log para mostrar para o usuario o resultado
    - Depois chamamos o objeto criado na function para fora, para ser executado corretamento
- A resposta SEMPRE vem como string então se for opetação numerica lembre de fazer as conversões
- É interessante falar que caso use varias linguagens que tem o mesmo pacote é pessivel utilizar um específico
    - Ex .: rl = require("node:readline")

## Fazer buscas de arquivos com node
- Usamos o a var const path = require("node:path")
- Adicionamos a const fs = require("node:fs") -- para introduzir o fileSystem no codigo
- Definimos const filePath = path.find(process.cwd(), "archive name")
    - O process.cwd() é porque o arquivo esta no current directory ou seja, dentro do nosso HD
    - Caso a pasta esteja em uma pasta anterior a nossa colocamos da seguinte forma
        - const filePath = path.find(process.cwd(), "previous paste", "archive name")
- Usamos fs.readFile para ler o arquivo do sistema da seguinte forma
    - Ex .: fs.readFile(filePath, {}, (erro, dados) => {
                if(erro){
                    console.log(`Error reading file location in : ${filePath}`)                    
                    return
                }
                console.log(dados.toString())
            })
- Para manipular o arquivo para mostrar o numero de linhas por exemplo, fazemos da seguinte forma
    - Apos o if, definimos uma const text = dados.toString() para transformar para string
    - Usamos uma const lines = text.split("\n") para separar cada linha
    - Criamos uma const adjustedLines = lines.map((line, index) => `${index+1} - ${line}`)
        - nesta linha estamos definindo para separar as linhas do texto em arrays e mostrar na tela seu index(numero da linha) e sua linha
    - Utilizamos fs.writeFile para escrever o novo arquivo da seguinte forma :
        - Voltamos no inicio do codigo e definimos uma variavel const fileOutPath = path.join(process.cwd(), "texto-with-line.txt")
        - fs.writeFile(fileOutPath, adjustedLines.join("\n"), {}, (erro) => {
            if(erro) { 
                console.log(`Erro no caminho do arquivo ${filePath}`)
                return
            }
          })
        - Apos isso o arquvio foi criado no seu diretorio
