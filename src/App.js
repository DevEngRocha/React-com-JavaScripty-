import { useState } from 'react';
import Banner from './Componentes/ComponentesBanner/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';


function App() {

  const Times = [
    {
      nome: 'Programação',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },

    {
      nome: 'Front-End',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },

    {
      nome: 'Data-Science',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },

    {
      nome: 'Devops',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },

    {
      nome: 'UX e Design',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },

    {
      nome: 'Mobile',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },

    {
      nome: 'Inovação e Gestao',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={Times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {Times.map(time => <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}



    </div>
  );
}

export default App
