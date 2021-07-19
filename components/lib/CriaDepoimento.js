function CriaDepoimento(githubUser, depoimentos, setDepoimentos) {
  const dadosDoForm = new FormData(event.target);

  const depoimento = {
    title: dadosDoForm.get('title'),
    content: dadosDoForm.get('content'),
    crea: githubUser,
    imageUrl: `https://github.com/${githubUser}.png`,
  };

  fetch('/api/depoimentos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(depoimento)
  })
  .then(async (response) => {
    const dados = await response.json();
    const depoimento = dados.registroCriado;
    setDepoimentos([...depoimentos, depoimento]);
  })

}

export default CriaDepoimento