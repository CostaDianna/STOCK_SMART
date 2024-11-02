
import Link from 'next/link';
import React from 'react';

const sidebar: React.FC = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#eee', display: 'flex', gap: '10px' }}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/loginform">Inicio</Link>
      <Link href="/produtos">Cadastro de Produtos</Link>
      <Link href="/fornecedores">Cadastro de Fornecedores</Link>
      <Link href="/associacao">Associação Produto/Fornecedor</Link>
      <Link href="/" onClick={() => document.cookie = 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'}>Sair</Link>
    </nav>
  );
};

export default sidebar;
