import { useState } from 'react';
import Banner from './Componentes/ComponentesBanner/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
        <Banner />
        <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        <Time nome="Programação"/>
        <Time nome="Front-End"/>
        <Time nome="Data Science"/>
        <Time nome="Devops"/>
        <Time nome="UX e Design"/>
        <Time nome="Mobile"/>
        <Time nome="Inovação e Gestão"/>


    </div>
  );
}

export default App
