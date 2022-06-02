import type { NextPage } from 'next'



function MeuComponente(){
  return <div>TreinaWeb</div>
}

const Home: NextPage = () => {
  return (
    <div>
      <MeuComponente/>
    </div>
  )
}

export default Home
