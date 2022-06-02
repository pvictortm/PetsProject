import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista';
import Titulo from '../ui/Titulo/Titulo';


function MeuComponente(){
  return <div>TreinaWeb</div>
}

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="" 
      subtitulo=
      {<span>
        Com um pequeno valor mensal, você <br /> 
        pode <strong>adotar um pet virtualmente.</strong>
      </span>}/>


      <Lista
          pets={[
            {
              id: 1,
              nome: 'Bidu',
              historia: 'uhsaudhaus',
              foto: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg'
            },
            {
              id: 2,
              nome: 'Scooby',
              historia: 'uhsaudhaus',
              foto: 'https://images.pexels.com/photos/1390361/pexels-photo-1390361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            },

          ]}
      />
      
      
    </div>
  )
}

export default Home
