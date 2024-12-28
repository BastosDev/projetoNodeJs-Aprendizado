const path = require("node:path")
const fs = require("node:fs")
const filePath = path.join(process.cwd(), "texto.txt")

fs.readFile(filePath, {}, (erro, dados) => {
    if (erro) {
       console.log(`Erro no caminho do arquivo ${filePath}`)
       return
    }

   console.log(dados.toString())

})