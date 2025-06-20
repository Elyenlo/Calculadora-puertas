import React, { useState } from "react";
import FormularioMedidas from "./components/FormularioMedidas";
import VistaPuerta from "./components/VistaPuerta";
import ResumenFinal from "./components/ResumenFinal";

export default function App() {
  const [estado, setEstado] = useState({
    anchoVano: 90,
    altoVano: 210,
    espesorMarcoInterior: 4.5,
    espesorMarcoExterior: 7,
    espesorTope: 1,
    holguraLateral: 0.5,
    holguraInferiorSuperior: 0.5,
    separacionPiso: 0.5,
    unidad: "cm",
    tipoPuerta: "derecha",
    cantidadBisagras: 3,
    error: "",
  });

  const actualizarEstado = (clave, valor) => {
    setEstado((prev) => ({ ...prev, [clave]: valor }));
  };

  return (
    <div className="p-4 max-w-6xl mx-auto grid grid-cols-2 gap-6">
      <FormularioMedidas estado={estado} actualizarEstado={actualizarEstado} />
      <div className="flex flex-col">
        <VistaPuerta estado={estado} />
        <ResumenFinal estado={estado} />
      </div>
    </div>
  );
}