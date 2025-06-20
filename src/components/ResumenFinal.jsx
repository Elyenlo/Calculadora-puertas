import React from "react";

export default function ResumenFinal({ estado }) {
  const {
    anchoVano,
    altoVano,
    espesorMarcoInterior,
    espesorTope,
    holguraLateral,
    holguraInferiorSuperior,
    separacionPiso,
    unidad
  } = estado;

  const hojaAncho = (anchoVano - espesorMarcoInterior * 2 - holguraLateral * 2).toFixed(2);
  const hojaAlto = (altoVano - espesorTope - holguraInferiorSuperior - separacionPiso).toFixed(2);

  const imprimir = () => {
    window.print();
  };

  return (
    <div className="bg-white p-4 mt-4 rounded shadow text-center">
      <h2 className="text-lg font-bold mb-2">Medidas Finales</h2>
      <p className="text-red-600 font-bold">Ancho Hoja: {hojaAncho} {unidad}</p>
      <p className="text-red-600 font-bold">Alto Hoja: {hojaAlto} {unidad}</p>
      <button onClick={imprimir} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">Imprimir / Guardar PDF</button>
    </div>
  );
}