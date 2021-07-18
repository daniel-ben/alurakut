import Box from '../elements/Box';
import CriaComunidades from '../lib/CriaComunidades';


function NovaComunidadeForm(props) {
  let input_value = '';

  return (
    <Box>
      <h2 className="subTitle">O que você deseja fazer?</h2>
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
            aria-label=""/>
          <button className="randomButton"
                  onClick={(event) => {
                    event.preventDefault();

                  }}
            >Random
          </button>
        </div>

        <button>
          Criar comunidade
        </button>
      </form>
    </Box>
  )
}
export default NovaComunidadeForm