import fetch from "node-fetch";

async function checaStatus(arrayURLs) {
  const arrayStatus = await Promise.all(
    arrayURLs.map(async (url) => {
      const res = await fetch(url);
      return res.status;
    })
  );
  return arrayStatus;
}

function geraArrayDeURLs(arrayLinks) {
  // Object.values(objeto)
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
  const links = geraArrayDeURLs(arrayLinks);
  const statusLinks = await checaStatus(links);
  //   spred operator
  const resultados = arrayLinks.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice],
  }));
  return resultados;
}

export { validaURLs };
