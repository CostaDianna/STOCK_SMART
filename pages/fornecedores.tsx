import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import '../styles/globals.css';
import Link from 'next/link';

const Fornecedor: React.FC = () => {
  const [formData, setFormData] = useState({
    nomeFornecedor: '',
    cnpj: '',
    endereco: '',
    telefone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
    <div className="aviso">
    <h1>Menu para navegar</h1>
     <p>
     <Link href="/" className="home-link">
    <i className="fas fa-arrow-left"></i>Home
    </Link>
    </p>
    <p>
    <Link href="/produtos" className="home-link">
            <i className="fas fa-arrow-left"></i> Produtos
          </Link>
        </p>
        <p>
          <Link href="/associacao" className="home-link">
            <i className="fas fa-arrow-left"></i>Associação
          </Link>
        </p>
      </div>

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
    </div>
  );
}
export default Fornecedor;
