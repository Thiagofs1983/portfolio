import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import Thiago from '../images/Thiago.png';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <main className={ styles.container }>
      <h1>Olá, eu sou o Thiago Fonseca</h1>
      <p>
        Estudante de Desenvolvimento Web Fullstack na <a
          href="https://www.betrybe.com/"
          rel="noreferrer"
          target="_blank"
        >
          Trybe
        </a>, em transição de carreira, após 17 anos no setor automotivo.
      </p>
      <img src={Thiago} alt="Foto do Thiago" />
      <nav>
        <a 
          href="https://www.linkedin.com/in/fsthiago/"
          rel="noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Thiagofs1983"
          rel="noreferrer"
          target="_blank"
        >
          <BsGithub />
        </a>
      </nav>
      <hr />
      <Footer />
    </main>
  )
}

export default Home;
