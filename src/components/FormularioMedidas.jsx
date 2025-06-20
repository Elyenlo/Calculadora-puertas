import React from "react";

export default function FormularioMedidas({ estado, actualizarEstado }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    actualizarEstado(name, parseFloat(value));
  };

  return (
    <div className="space-y-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">Dimensiones del Vano</h2>
      <div className="grid grid-cols-2 gap-4">
        <label>
          Ancho del vano:
          <input type="number" name="anchoVano" value={estado.anchoVano} onChange={handleChange} className="input" />
        </label>
        <label>
          Alto del vano:
          <input type="number" name="altoVano" value={estado.altoVano} onChange={handleChange} className="input" />
        </label>
        <label>
          Espesor marco interior:
          <input type="number" name="espesorMarcoInterior" value={estado.espesorMarcoInterior} onChange={handleChange} className="input" />
        </label>
        <label>
          Espesor marco exterior:
          <input type="number" name="espesorMarcoExterior" value={estado.espesorMarcoExterior} onChange={handleChange} className="input" />
        </label>
        <label>
          Espesor tope:
          <input type="number" name="espesorTope" value={estado.espesorTope} onChange={handleChange} className="input" />
        </label>
        <label>
          Holgura lateral:
          <input type="number" name="holguraLateral" value={estado.holguraLateral} onChange={handleChange} className="input" />
        </label>
        <label>
          Holgura inferior/superior:
          <input type="number" name="holguraInferiorSuperior" value={estado.holguraInferiorSuperior} onChange={handleChange} className="input" />
        </label>
        <label>
          Separación del piso:
          <input type="number" name="separacionPiso" value={estado.separacionPiso} onChange={handleChange} className="input" />
        </label>
      </div>
    </div>
  );
}