import React, { useState } from 'react';

const FormularioOperativo = () => {
  const [formData, setFormData] = useState({
    nivelAgua: '',
    estadoBombas: '',
    calidadAgua: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nivelAgua">Nivel de Agua (%)</label>
        <input
          type="number"
          id="nivelAgua"
          name="nivelAgua"
          value={formData.nivelAgua}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="estadoBombas">Estado de Bombas</label>
        <input
          type="text"
          id="estadoBombas"
          name="estadoBombas"
          value={formData.estadoBombas}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="calidadAgua">Calidad del Agua</label>
        <input
          type="text"
          id="calidadAgua"
          name="calidadAgua"
          value={formData.calidadAgua}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioOperativo;
