import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/globals.css';
import Link from 'next/link';

interface Produto {
  id: number;
  nome: string;
}

interface Fornecedor {
  id: number;
  nome: string;
}

const Associacao: React.FC = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [selectedProduto, setSelectedProduto] = useState<number | ''>(''); // Limpa após envio
  const [selectedFornecedor, setSelectedFornecedor] = useState<number | ''>(''); // Limpa após envio
  const [erro, setErro] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState(''); // Mensagem de sucesso

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('/api/produto');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    const fetchFornecedores = async () => {
      try {
        const response = await axios.get('/api/fornecedor');
        setFornecedores(response.data);
      } catch (error) {
        console.error('Erro ao buscar fornecedores:', error);
      }
    };

    fetchProdutos();
    fetchFornecedores();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProduto || !selectedFornecedor) {
      setErro(true);
    } else {
      setErro(false);
      console.log('Produto:', selectedProduto, 'Fornecedor:', selectedFornecedor);

      // Exibe mensagem de sucesso
      setMensagemSucesso('Associação realizada com sucesso! Preencha o formulário novamente.');

      // Limpa os campos do formulário
      setSelectedProduto('');
      setSelectedFornecedor('');
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
    <Link href="/produtos" className="home-link">
            <i className="fas fa-arrow-left"></i> Produtos
          </Link>
        </p>
        <p>
          <Link href="/fornecedores" className="home-link">

            <i className="fas fa-arrow-left"></i>Fornecedores
          </Link>
        </p>
      </div>
    <div className="form-container">
      <h1 className="form-title">Associar Produto a Fornecedor</h1>
      {mensagemSucesso && (
        <p className="success-message">{mensagemSucesso}</p>
      )}

      <form className="form-associacao space-y-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="produto" className="form-label">Produto:</label>
          <select
            id="produto"
            name="produto"
            className={`form-field ${erro && !selectedProduto ? 'error' : ''}`}
            value={selectedProduto}
            onChange={(e) => setSelectedProduto(parseInt(e.target.value))}
          >
            <option value="">Selecione um produto</option>
            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <option key={produto.id} value={produto.id}>
                  {produto.nome}
                </option>
              ))
            ) : (
              <option disabled>Carregando produtos...</option>
            )}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="fornecedor" className="form-label">Fornecedor:</label>
          <select
            id="fornecedor"
            name="fornecedor"
            className={`form-field ${erro && !selectedFornecedor ? 'error' : ''}`}
            value={selectedFornecedor}
            onChange={(e) => setSelectedFornecedor(parseInt(e.target.value))}
          >
            <option value="">Selecione um fornecedor</option>
            {fornecedores.length > 0 ? (
              fornecedores.map((fornecedor) => (
                <option key={fornecedor.id} value={fornecedor.id}>
                  {fornecedor.nome}
                </option>
              ))
            ) : (
              <option disabled>Carregando fornecedores...</option>
            )}
          </select>
        </div>

        <button type="submit" className={`submit-button ${erro ? 'error' : ''}`}>
          Associar
        </button>
      </form>
    </div>
    </div>
  );
};

export default Associacao;
