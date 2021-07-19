import React from 'react';
import styled from 'styled-components';
import Box from '../elements/Box';


export default function ShowDepoimentos(props) {
  return (
    <Box>
      <Division>
        <div className="creatorArea">
          <span>Criador</span>
          <img src={props.depoimentos[0].imageUrl}/>
          <span>{props.depoimentos[0].crea}</span>
        </div>
        <div className="depoimentoArea">
          <h2 className="subTitle">{props.depoimentos[0].title}</h2>
          <p>{props.depoimentos[0].content}</p>
        </div>
      </Division>
    </Box>
  )
}

const Division = styled.div`
  display:inline-flex;
`