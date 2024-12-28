const path = require("node:path")
const fs = require("node:fs")
const filePath = path.join(process.cwd(), "texto.tx")
const fileOutPath = path.join(process.cwd(), "texto-with-lines.txt")

console.log(filePath)

fs.readFile(filePath, {}, (erro, dados) => {
    if (erro) {
       console.error(`Erro no caminho do arquivo ${filePath}`)
       return
    }
    const text = dados.toString()
    const lines = text.split("\n")

    const adjustedLines = lines.map((line, index) => 
        `${index+1} - ${line}`
  )

  fs.writeFile(fileOutPath, adjustedLines.join("\n"), {}, (erro) => {
    if (erro) {
        console.log(`Erro na escrita do arquivo ${filePath}`)
        return
     }
  })
})