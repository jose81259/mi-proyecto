import React, { useState } from 'react';

const FormularioAdministrativo = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    puesto: ''
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
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="correo">Correo</label>
        <input
          type="email"
          id="correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="puesto">Puesto</label>
        <input
          type="text"
          id="puesto"
          name="puesto"
          value={formData.puesto}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioAdministrativo;

