import React, { Component } from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations';
import { OrkutNostalgicIconSet } from '../src/lib/NostalgicIconSet';
import { AlurakutMenu } from '../src/lib/AlurakutMenu';
import { AlurakutProfileSidebarMenuDefault } from '../src/lib/ProfileSideBarDefault';


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

function handleCriaComunidade(event) {
  event.preventDefault();
  const dadosDoForm = new FormData(e.target);

  const novaComunidade = {
    id: new Date().toISOString(),
    title: dadosDoForm.get('title'),
    image: dadosDoForm.get('image')
  };
  
  setComunidades(...comunidades, novaComunidade);
}

export default function Home() {
  const githubUser = 'daniel-ben';
  
  const [comunidades, setComunidades] = React.useState([
    {id: '4613516849649863', title: 'Eu odeio acordar cedo', image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'},
    {id: '1234541135416221', title: 'Meu gato tem um plano maligno', image: 'https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
    {id: '1234116216152464', title: 'Gatos maromba', image: 'https://pbs.twimg.com/media/EO_F5vOX0AE8dRO.jpg'},
    {id: '9187349712934719', title: 'Pruuu', image: 'https://as1.ftcdn.net/v2/jpg/00/87/68/90/1000_F_87689025_1uP2VjzVIEIXvlGSpGmeTbtTTLGel2ed.jpg'},
    {id: '1928374912374981', title: 'Capivara no spa', image: 'https://as2.ftcdn.net/v2/jpg/01/78/54/17/1000_F_178541736_O0UX5H3tQMw7s8BZwyys3jqybEUixFwC.jpg'},
    {id: '6254472634855123', title: 'Eu amo churros', image: 'https://as2.ftcdn.net/v2/jpg/02/86/53/65/1000_F_286536586_NrXiCQC8TrhinMRzkPX0yxo0kSzrIdTW.jpg'},
  ]);
  
  const pessoasFavoritas = [
    'peas',
    'omariosouto',
    'juunegreiros',
    'CodingTrain',
    'developedbyed',
    'OneLoneCoder'
  ]

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
            <form onSubmit={handleCriaComunidade}>
              <div>
                <input  
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="" />
              </div>
              <div>
                <input  
                  placeholder="Qual vai ser o nome da sua comunidade?" 
                  name="title" 
                  aria-label="" />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>

        {/* comunidades */}
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>

            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}