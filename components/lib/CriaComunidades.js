
function CriaComunidades(githubUser, comunidades, setComunidades) {
  const dadosDoForm = new FormData(event.target);

  const comunidade = {
    title: dadosDoForm.get('title'),
    imageUrl: dadosDoForm.get('image'),
    creatorSlug: githubUser,
    linkTo: '',
  };

  fetch('/api/comunidades', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comunidade)
  })
  .then(async (response) => {
    const dados = await response.json();
    const comunidade = dados.registroCriado;
    setComunidades([...comunidades, comunidade]);
  })

}

export default CriaComunidades