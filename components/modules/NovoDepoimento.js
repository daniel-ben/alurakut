import React from 'react';

function NovoDepoimento(props) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      CriaDepoimento(props.githubUser, props.depoimentos, props.setDepoimentos)
    }}>

      <div>
        <input  
          placeholder="Qual o título do depoimento?" 
          name="title" 
          aria-label="" />
      </div>
      <div>
        <textarea placeholder="Escreva aqui seu depoimento..."
                  name='content'
        ></textarea>
      </div>

      <button>
        Postar depoimento
      </button>
    </form>
  )
}

export default NovoDepoimento