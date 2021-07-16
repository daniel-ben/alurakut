import React from 'react';
import styled, { css } from 'styled-components';

const BASE_URL = 'http://alurakut.vercel.app/';
const v = '1';


function ProfileSidebarMenu() {
  return (
    <ProfileSidebarMenu.Wrapper>
      <nav>
        <a href="https://alurakut-one-snowy.vercel.app">
          <img src={`${BASE_URL}/icons/user.svg`} />
            Perfil
          </a>
        <a href="https://www.instagram.com/nyanlatotep/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
            Instagram
          </a>
        <a href="https://www.instagram.com/nyanlatotep/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
            Twitter
          </a>  
        <a href="https://myportfolio-eosin.vercel.app">
          <img src={`${BASE_URL}/icons/sun.svg`} />
            Portfolio
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
            Recados
          </a>
      </nav>
      <hr />
      <nav>
        <a href="https://github.com/explore">
          <img src={`${BASE_URL}/icons/plus.svg`} />
            GitHub Trends
          </a>
        <a href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} />
            Sair
          </a>
      </nav>
    </ProfileSidebarMenu.Wrapper>
  )
}


ProfileSidebarMenu.Wrapper = styled.div`
  a {
    font-size: 12px;
    color: #2E7BB4;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`;

export default ProfileSidebarMenu