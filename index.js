import chalk from "chalk";
import fs from "fs";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "nao há arquivo no caminho!!"));
}

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf8";
//   fs.readFile(caminhoDoArquivo, encoding, function (erro, texto) {
//     if (erro) {
//       trataErro(erro);
//     } else {
//       console.log(chalk.green(texto));
//     }
//   });
// }

// pegaArquivo("./arquivos/texto1.md");
