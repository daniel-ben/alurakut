
function fetchFromApi(setLista, user, url) {
  fetch(`https://api.github.com/users/${user}/${url}`)
  .then((respostaDoServidor) => {
    return respostaDoServidor.json();
  })
  .then((respostaCompleta) => {
    setLista(respostaCompleta);
  })
}

export default fetchFromApi