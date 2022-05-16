import chalk from "chalk";
import fs from "fs";

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, "nao há arquivo no caminho!!"));
}

// método sincrono de ler arquivos
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

// metodo assíncrono de ler arquivos
// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = "utf8";
//   fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(texto))
//     .catch((erro) => trataErro(erro));
// }

// metodo assincrono async await
async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.green(texto));
  } catch (erro) {
    trataErro(erro);
  } finally {
    console.log(chalk.yellow("operação concluída"));
  }
}

pegaArquivo("./arquivos/texto1.md");
