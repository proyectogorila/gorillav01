import React from "react";
import LogoBarraEstadoSuperior from "../../images/LogoBarraDeEstadoSuperior.svg";


function BarraDeEstadoSuperior() {
  const nombreSoftware = "Presgen V1.001";
  const nombreArchivo = "Proyecto_Gorilla.pg";
  return (
    <div className="c-barraDeEstadoSuperior">
      <div className="c-barraDeEstadoSuperior__contenedorIzquierda c-barraDeEstadoSuperior__contenedor">
        <img
          className="c-barraDeEstadoSuperior__itemIzquierda"
          src={LogoBarraEstadoSuperior}
          alt={"imagen barra estado superior"}
        />
      </div>
      <div className="c-barraDeEstadoSuperior__contenedorCentral c-barraDeEstadoSuperior__contenedor">
        <span className="c-barraDeEstadoSuperior__itemCentral">
          {nombreSoftware}
        </span>
      </div>
      <div className="c-barraDeEstadoSuperior__contendorDerecha c-barraDeEstadoSuperior__contenedor">
        <span className="c-barraDeEstadoSuperior__itemDerecha">
          {nombreArchivo}
        </span>
      </div>
    </div>
  );
}

export { BarraDeEstadoSuperior };
