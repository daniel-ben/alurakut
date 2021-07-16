import React, { Component } from 'react';

//constants
import tokens from '../config.js';
//modules
import NovaComunidadeForm from '../components/modules/NovaComunidadeForm';
import WelcomeArea from '../components/modules/WelcomeArea';
import ProfileSidebar from '../components/modules/ProfileSidebar';
import ProfileRelationsBox from '../components/modules/ProfileRelationsBox';
//templates
import AlurakutHeader from '../components/templates/AlurakutHeader';
import MainGrid from '../components/templates/MainGrid';
//layouts

const READ_ONLY_TOKEN = tokens.READ_ONLY;

//### NOTE : Armazenar em um arquivo a parte depois
function fetchFromApi(setLista, user, url) {
  fetch(`https://api.github.com/users/${user}/${url}`)
  .then((respostaDoServidor) => {
    return respostaDoServidor.json();
  })
  .then((respostaCompleta) => {
    setLista(respostaCompleta);
  })
}

function fetchFromDato(setComunidades) {
  fetch(
    'https://graphql.datocms.com/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${READ_ONLY_TOKEN}`,
      },
      body: JSON.stringify({ query: 
        `{ allCommunities { 
            id, 
            title, 
            imageUrl,
            creatorSlug
          } }`}),
    }
  )
  .then(res => res.json())
  .then((res) => {
    setComunidades(res.data.allCommunities);
  })
  .catch((error) => {
    console.log(error);
  });
}


export default function Home() {

  const githubUser = 'daniel-ben';

  const [following, setFollowing] = React.useState([]);

  const [followers, setFollowers] = React.useState([]);

  const [comunidades, setComunidades] = React.useState([]);

  React.useEffect(() => { 
    fetchFromApi(setFollowing, githubUser, 'following');
    fetchFromApi(setFollowers, githubUser, 'followers');
    fetchFromDato(setComunidades);
    
  }, [])

  return (
    <>
      {/* cabeçalho */}
      <AlurakutHeader githubUser={githubUser} />
      
      {/* body  */}
      <MainGrid>

        {/* perfil */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          {<ProfileSidebar githubUser={githubUser} />}
        </div>

        {/* conteúdo */}
        {/* wecome area */}
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <WelcomeArea />

          {/* Criar comunidades */}
          <NovaComunidadeForm />
        </div>

        {/* Lateral Direita */}
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            
          <ProfileRelationsBox title="Seguidores" items={followers} />

          <ProfileRelationsBox title="Comunidades" items={comunidades} />

          <ProfileRelationsBox title="Pessoas da Comunidade" items={following} />
        </div>
      </MainGrid>
    </>
  )
}