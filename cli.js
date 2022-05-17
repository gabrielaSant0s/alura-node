import { pegaArquivo } from "./index.js";
import chalk from "chalk";
import { validaURLs } from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
  const resultado = await pegaArquivo(caminho[2]);
  if (caminho[3] === "validar") {
    console.log(chalk.green("links validados"), await validaURLs(resultado));
  } else {
    console.log(chalk.yellow("lista de links"), resultado);
  }
}

processaTexto(caminho);
