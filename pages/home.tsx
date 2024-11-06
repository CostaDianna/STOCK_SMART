
import React from 'react';
import Link from 'next/link';
import '../styles/home.css';

const Home = () => {
  return (
    <div>
        <div className="mensagem">
      <h1>Bem-vindo ao StockSmart!</h1>
      <p>Escolha uma das opções abaixo para navegar:</p>
        <Link href="/loginform">Login</Link>
    </div>

<div className="container">
<img src= "/images/animate.svg" alt="Trabalho" />
<p>Gerencie seu estoque com facilidade e eficiência!</p>
</div>

<div className="texto">
          <p>Para continuar, por favor faça login.</p>
         </div>
        </div>

  );
};

export default Home;

