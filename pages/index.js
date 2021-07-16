import React, { Component } from 'react';

import AlurakutHeader from '../components/templates/AlurakutHeader';
import MainGrid from '../components/templates/MainGrid';
//layouts

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