import React from "react";

const fichasOpciones = [
  { text: "Inicio", activo: true },
  { text: "Presupuesto", activo: false },
  { text: "Programacion", activo: false },
  { text: "Reportes", activo: false },
  { text: "Ayuda", activo: false },
];

function FichasDeOpciones() {
  return (
    <div className="c-cintaDeOpciones__fichasDeOpciones ">
      <div className="c-cintaDeOpciones__contenedorFicha c-cintaDeOpciones__contenedorFicha--azul">
        <span className="c-cintaDeOpciones__itemFichaArchivo">Archivo</span>
      </div>
      {fichasOpciones.map((ficha) => (
        <div className="c-cintaDeOpciones__contenedorFicha " key={ficha.text}>
          <p className="c-cintaDeOpciones__itemFicha" >{ficha.text}</p>
          <div className="c-cintaDeOpciones__lineaFicha" />
        </div>
      ))}
    </div>
  );
}

export { FichasDeOpciones };
