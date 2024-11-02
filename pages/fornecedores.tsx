import React, { useState } from 'react';
import '../styles/globals.css';

export default function Fornecedor() {
  const [formData, setFormData] = useState({
    nomeFornecedor: '',
    cnpj: '',
    endereco: '',
    telefone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Cadastrar Fornecedor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nomeFornecedor" className="form-label">
            Nome do Fornecedor:
          </label>
          <input
            type="text"
            id="nomeFornecedor"
            name="nomeFornecedor"
            placeholder="Digite o nome do fornecedor"
            className="form-field"
            value={formData.nomeFornecedor}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="cnpj" className="form-label">
            CNPJ:
          </label>
          <input
            type="text"
            id="cnpj"
            name="cnpj"
            placeholder="Digite o CNPJ do fornecedor"
            className="form-field"
            value={formData.cnpj}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="endereco" className="form-label">
            Endereço:
          </label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Digite o endereço"
            className="form-field"
            value={formData.endereco}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="telefone" className="form-label">
            Telefone:
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            placeholder="Digite o telefone"
            className="form-field"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Cadastrar Fornecedor
        </button>
      </form>
    </div>
  );
}
