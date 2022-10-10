import React from "react";
import {FichasDeOpciones} from './FichasDeOpciones';
import {BandaDeOpciones} from './BandaDeOpciones';


function CintaDeOpciones() {
  return (
    /* Cinta de opciones */
    <div className="c-cintaDeOpciones">
      <FichasDeOpciones/>
      <BandaDeOpciones/>
    </div>
  );
}

export { CintaDeOpciones };