import React from 'react';
import styled from 'styled-components';
//lib
import tokens from '../../config.js';
//functions
import fetchFromApi from '../lib/FetchFromApi.js';
import fetchFromDato from '../lib/FetchFromDato.js';
//elements
import Box from '../elements/Box.js';
//modules
import NovoDepoimento from '../modules/NovoDepoimento.js';
import NovaComunidadeForm from '../modules/NovaComunidadeForm';
import WelcomeArea from '../modules/WelcomeArea';
import ProfileSidebar from '../modules/ProfileSidebar';
import ProfileRelationsBox from '../modules/ProfileRelationsBox';
import ShowDepoimentos from '../modules/ShowDepoimentos';

function MainGrid(props) {

  const [following, setFollowing] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [comunidades, setComunidades] = React.useState([]);
  const [depoimentos, setDepoimentos] = React.useState([0]);
  const [recados, setRecados] = React.useState([0]);

  const [opção_selecionada, setOpçao] = React.useState();

  const opções = [
     <NovaComunidadeForm  comunidades={comunidades} 
                          setComunidades={setComunidades}
                          githubUser={props.githubUser}/>,
     <NovoDepoimento  depoimentos={depoimentos} 
                      setDepoimentos={setDepoimentos} 
                      githubUser={props.githubUser}/>,
     ''
  ]

  React.useEffect(() => { 
    fetchFromApi(setFollowing, props.githubUser, 'following');
    fetchFromApi(setFollowers, props.githubUser, 'followers');
    fetchFromDato(setComunidades, setDepoimentos, tokens.READ_ONLY);
  }, [])

  return (
    <MainGridArea>

        {/* perfil */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          {<ProfileSidebar  githubUser={props.githubUser} 
                            depoimentos={depoimentos} />}
        </div>

        {/* conteúdo */}
        {/* wecome area */}
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <WelcomeArea />

          {/* O que deseja fazer */}
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>

            <div className="options-div">
              <button className="opções-button" autoFocus
                      onClick={(event) => {
                        setOpçao(0);
                      }}>Criar comunidade</button>
              <button className="opções-button" 
                      onClick={(event) => {
                        setOpçao(1);
                      }}>Escrever depoimento</button>
              <button className="opções-button" 
                      onClick={(event) => {
                      setOpçao(2);
                      }}>Deixar um scrap</button>
            </div>
            <hr/>
            
            {opções[opção_selecionada]}
          </Box>
          
          <ShowDepoimentos depoimentos={depoimentos} />
          
        </div>

        {/* Lateral Direita */}
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
            
          <ProfileRelationsBox title="Seguidores" items={followers} />

          <ProfileRelationsBox title="Comunidades" items={comunidades} />

          <ProfileRelationsBox title="Pessoas da Comunidade" items={following} />
        </div>
      </MainGridArea>
  )
}

const MainGridArea = styled.main`
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  width: 100%;

  .profileArea {
    display: none;
    @media(min-width:860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
    max-width: 1110px;
  }

`;

export default MainGrid;