import React, { Component } from 'react';
import { useRouter } from 'next/router'
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

//templates
import AlurakutHeader from '../components/templates/AlurakutHeader';
import MainGrid from '../components/templates/MainGrid';


export default function Home(props) {
  const githubUser = 'daniel-ben'

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
/* export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  let isAuthenticated = false;
  
  if(token) {
    const githubUser = jwt.decode(token).githubUser;
    
    fetch(`https://api.github.com/users/${githubUser}`,)
    .then((resposta) => resposta.json())
    .then((resultado) => {
      console.log(resultado)
      if (resultado.login) {
        console.log('batata')
        isAuthenticated = true;
        router.push('/')
        }
      }
    )
  }

  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  } else {
    return {
      props: {
        githubUser: 'daniel-ben'
      }, //will be passed to the page component as props
    }
  
  }

  return {
    props: {
      githubUser: 'daniel-ben'
    }, //will be passed to the page component as props
  }
} */