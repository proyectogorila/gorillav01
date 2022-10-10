import React from 'react';
import './App.scss'

import {BarraDeEstadoSuperior} from '../Components/BarraDeEstadoSuperior/BarraEstadoSuperior';
import {CintaDeOpciones} from '../Components/CintaDeOpciones/CintaDeOpciones'




function App() {
  return (
    <React.Fragment>      
        <BarraDeEstadoSuperior/>        
        <CintaDeOpciones/>      
    </React.Fragment>
    
  );
}

export {App};
