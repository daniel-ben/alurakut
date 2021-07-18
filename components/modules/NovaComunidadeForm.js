import React from 'react';
import CriaComunidades from '../lib/CriaComunidades';


function NovaComunidadeForm(props) {
  const [input_value, setValue] = React.useState();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      CriaComunidades(props.comunidades, props.setComunidades)
    }}>

      <div>
        <input  
          placeholder="Qual vai ser o nome da sua comunidade?" 
          name="title" 
          aria-label="" />
      </div>
      <div>
        <input  
          className='image-input'
          placeholder="Coloque uma URL para usarmos de capa" 
          name="image" 
          aria-label=""
          value={input_value}/>
        <button className="randomButton"
                onClick={(event) => {
                  event.preventDefault();
                  setValue(`https://picsum.photos/seed/${Math.floor(Math.random()*100)}/300`);
                  console.log(input_value);
                }}
          >Random
        </button>
      </div>

      <button>
        Criar comunidade
      </button>
    </form>
  )
}
export default NovaComunidadeForm