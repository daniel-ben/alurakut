import React, { Component } from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

//templates
import AlurakutHeader from '../components/templates/AlurakutHeader';
import MainGrid from '../components/templates/MainGrid';


export default function Home(props) {

  return (
    <>
      {/* cabeçalho */}
      <AlurakutHeader githubUser={props.githubUser} />
      
      {/* body  */}
      <MainGrid githubUser={props.githubUser}/>
    </>
  )
}

//backend side
export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { githubUser } = jwt.decode(token);
  let isAuthenticated = false;
  
  fetch(`https://api.github.com/users/${githubUser}`,)
  .then((resposta) => resposta.json())
  .then((resultado) => {
      if (resultado.login) {
        isAuthenticated = true;
      }
  })

  
  if(isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  
  return {
    props: {
      githubUser: 'daniel-ben'
    }, //will be passed to the page component as props
  }
}