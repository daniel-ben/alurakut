import React, { Component } from 'react';

//templates
import AlurakutHeader from '../components/templates/AlurakutHeader';
import MainGrid from '../components/templates/MainGrid';


export default function Home() {
  const githubUser = 'daniel-ben';

  return (
    <>
      {/* cabeçalho */}
      <AlurakutHeader githubUser={githubUser} />
      
      {/* body  */}
      <MainGrid githubUser={githubUser}/>
    </>
  )
}