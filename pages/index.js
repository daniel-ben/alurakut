import React, { Component } from 'react';
import { useRouter } from 'next/router'
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

  const { isAuthenticated } = await fetch('https://alurakut-one-snowy.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
  .then((resposta) => resposta.json())

  if(!isAuthenticated) {
    console.log('o user dado não existe')
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
   
  const { githubUser } = jwt.decode(token);
  
  return {
    props: {
      githubUser
    }, //will be passed to the page component as props
  }
} 