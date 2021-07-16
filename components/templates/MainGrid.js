import React from 'react';
import styled from 'styled-components';
//lib
import tokens from '../../config.js';
//functions
import fetchFromApi from '../lib/FetchFromApi.js';
import fetchFromDato from '../lib/FetchFromDato.js';
//modules
import NovaComunidadeForm from '../modules/NovaComunidadeForm';
import WelcomeArea from '../modules/WelcomeArea';
import ProfileSidebar from '../modules/ProfileSidebar';
import ProfileRelationsBox from '../modules/ProfileRelationsBox';


function MainGrid(props) {

  const [following, setFollowing] = React.useState([]);

  const [followers, setFollowers] = React.useState([]);

  const [comunidades, setComunidades] = React.useState([]);

  React.useEffect(() => { 
    fetchFromApi(setFollowing, props.githubUser, 'following');
    fetchFromApi(setFollowers, props.githubUser, 'followers');
    fetchFromDato(setComunidades, tokens.READ_ONLY);
    
  }, [])

  return (
    <MainGridArea>

        {/* perfil */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          {<ProfileSidebar githubUser={props.githubUser} />}
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