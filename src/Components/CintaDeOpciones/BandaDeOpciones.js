import React from "react";
import copiaricono from "../../images/copiar.svg";
import pegaricono from "../../images/pegar.svg";
import cortaricono from "../../images/cortar.svg";
import eliminaricono from "../../images/eliminar.svg";
import movericono from "../../images/mover.svg";


const grupoBandaDeOpciones = [
  { text: "Portapapeles", visible: true },
  { text: "Edicion", visible: true },
  { text: "Reportes", visible: true },
];

const itemBandaDeOpciones = [
  { text: "Copiar", activo: true, grupoBanda: "Portapapeles", icono:copiaricono },
  { text: "Pegar", activo: true, grupoBanda: "Portapapeles", icono:pegaricono },
  { text: "Cortar", activo: true, grupoBanda: "Edicion", icono:cortaricono },
  { text: "Eliminar", activo: true, grupoBanda: "Reportes", icono:eliminaricono },
  { text: "Mover", activo: true, grupoBanda: "Reportes", icono:movericono },
];

function BandaDeOpciones() {
  return (
    <div className="c-cintaDeOpciones__bandaDeOpciones">
      {grupoBandaDeOpciones.map((grupo) => (
        <div
          className="c-cintaDeOpciones__grupoBandaDeOpciones"
          key={grupo.text}
        >
          <div className="c-cintaDeOpciones__iconosBandaDeOpciones">
            {itemBandaDeOpciones.map((filtro) => {
              
              if (filtro.grupoBanda === grupo.text) {
                return (
                  <div
                    className="c-cintaDeOpciones__contenedorIconoBandaDeOpciones"
                    key={filtro.text}
                  >
                    <img c-cintaDeOpciones__itemIcono  src={filtro.icono} alt="imagen"/>
                    <div className="c-cintaDeOpciones__itemTituloIcono">
                      {filtro.text}
                    </div>
                  </div>
                );
              }
              return false;
            })
            
            }
          </div>
          <div className="c-cintaDeOpciones__tituloBandaDeOpciones">
            <p className="c-cintaDeOpciones__itemTituloBandaDeOpciones">
              {grupo.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export { BandaDeOpciones };
