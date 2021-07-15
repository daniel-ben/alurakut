import React, { Component } from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations';
import { OrkutNostalgicIconSet } from '../src/lib/NostalgicIconSet';
import { AlurakutMenu } from '../src/lib/AlurakutMenu';
import { AlurakutProfileSidebarMenuDefault } from '../src/lib/ProfileSideBarDefault';

const TOKEN = "3326b7e465b9ed3710729f961963a2";

function ProfileSidebar(props) {

  return (
    <Box as="aside">
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <a className="" href={`https://github.com/${props.githubUser}`}>
        @{props.githubUser}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>

      <ul>
        {propriedades.items.slice(0,6).map((itemAtual) => {
          if(!itemAtual.avatar_url) {
            itemAtual.avatar_url = itemAtual.imageUrl;
          }
          return (
            <li key={itemAtual.id}>
              <a href={itemAtual.url}>
                <img src={itemAtual.avatar_url} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}


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
        'Authorization': `Bearer ${TOKEN}`,
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
      <AlurakutMenu githubUser={githubUser} />
      
      {/* body  */}
      <MainGrid>

        {/* perfil */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>

        {/* conteúdo */}
        {/* wecome area */}
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title"> Bem vindo(a) </h1>
            <OrkutNostalgicIconSet />
          </Box>

          {/* Criar comunidades */}
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={(event) => {
              event.preventDefault();
              const dadosDoForm = new FormData(event.target);

              const comunidade = {
                title: dadosDoForm.get('title'),
                imageUrl: dadosDoForm.get('image'),
                creatorSlug: githubUser,
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

              }}>

              <div>
                <input  
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="" />
              </div>
              <div>
                <input  
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="" />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
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