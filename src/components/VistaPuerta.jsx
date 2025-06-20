import React from "react";

export default function VistaPuerta({ estado }) {
  const { anchoVano, altoVano, espesorMarcoInterior, espesorTope, holguraLateral, holguraInferiorSuperior, separacionPiso } = estado;

  const hojaAncho = anchoVano - espesorMarcoInterior * 2 - holguraLateral * 2;
  const hojaAlto = altoVano - espesorTope - holguraInferiorSuperior - separacionPiso;

  return (
    <div className="bg-white p-4 rounded shadow mt-4 relative">
      <h2 className="text-lg font-bold mb-2">Vista de la Puerta</h2>
      <div className="relative w-full h-[400px] border bg-slate-100 flex items-center justify-center">
        <div className="absolute top-0 left-0 right-0 bottom-0 border-8 border-yellow-300 z-10"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 m-[8px] border-[12px] border-yellow-300 z-20"></div>
        <div className="absolute top-[8px] left-[8px] right-[8px] bottom-[8px] bg-amber-700 z-0"></div>
        <div className="absolute top-[20px] left-[20px] right-[20px] bottom-[20px] bg-gray-500 z-30"></div>
      </div>
    </div>
  );
}