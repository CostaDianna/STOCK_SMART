import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/globals.css';
import Link from 'next/link';

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  codigoBarras: string;
}

interface FormData {
  nome: string;
  descricao: string;
  preco: string;
  codigoBarras: string;
}

const Produtos: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    descricao: '',
    preco: '',
    codigoBarras: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [erro, setErro] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('/api/produto');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProdutos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'preco' ? parseFloat(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/produto', formData);
      console.log('Produto cadastrado com sucesso:', response.data);
      setMensagemSucesso('Produto cadastrado com sucesso! Preencha o formulário novamente.');
      setFormData({
        nome: '',
        descricao: '',
        preco: '',
        codigoBarras: '',
      });
      setErro(false);
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      setErro(true);
    }
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
    <Link href="/fornecedores" className="home-link">
            <i className="fas fa-arrow-left"></i> Fornecedores
          </Link>
        </p>
        <p>
          <Link href="/associacao" className="home-link">
            <i className="fas fa-arrow-left"></i>Associação
          </Link>
        </p>
      </div>
    <div className="form-container">
      <h1 className="form-title">Cadastro de Produtos</h1>
      {erro && <p className="error">Erro ao cadastrar produto. Tente novamente.</p>}
      {mensagemSucesso && <p className="success">{mensagemSucesso}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="nome" className="form-label">
          Nome do Produto:
        </label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome do Produto"
          className="form-field"
          required
        />
        <label htmlFor="descricao" className="form-label">
          Descrição:
        </label>
        <input
          type="text"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          placeholder="Descrição"
          className="form-field"
          required
        />
        <label htmlFor="preco" className="form-label">
          Preço:
        </label>
        <input
          type="text"
          name="preco"
          value={formData.preco}
          onChange={handleChange}
          placeholder="Preço"
          className="form-field"
          required
        />
        <label htmlFor="codigoBarras" className="form-label">
          Código de Barras:
        </label>
        <input
          type="text"
          name="codigoBarras"
          value={formData.codigoBarras}
          onChange={handleChange}
          placeholder="Código de Barras"
          className="form-field"
          required
        />
        <button type="submit" className="submit-button">
          Cadastrar Produto
        </button>
      </form>
      </div>
      </div>
  );
};

export default Produtos;
