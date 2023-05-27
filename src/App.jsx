import { useState } from "react"
import Perfil from "./components/Perfil"
//import Formulario from "./components/Formulario"
import Reposlist from "./components/Reposlist";


function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
   <input type="text" placeholder="Digite seu nome de usuario" onBlur={e=> setNomeUsuario(e.target.value)} />
    {nomeUsuario && (
      <>
    <Perfil nomeUsuario={nomeUsuario}/>
    <Reposlist nomeUsuario={nomeUsuario}/>
      </>
    )}



    </>
  )
}

export default App
