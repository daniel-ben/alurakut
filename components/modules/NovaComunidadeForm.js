import Box from '../elements/Box';
import CriaComunidades from '../lib/CriaComunidades';


function NovaComunidadeForm(props) {
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
            placeholder="Coloque uma URL para usarmos de capa" 
            name="image" 
            aria-label="" />
        </div>

        <button>
          Criar comunidade
        </button>
      </form>
    </Box>
  )
}
export default NovaComunidadeForm