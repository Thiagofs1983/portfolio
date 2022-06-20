import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'
import Thiago from '../images/Thiago.png';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import JavaScript from '../images/JavaScript-logo.png';
import html5 from '../images/html5.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import reactRouter from '../images/react-router.png';
import jest from '../images/jest.png';
import styledComponent from '../images/styled-components.png';
import css from '../images/css.jpg';
import Aside from '../components/Aside';

function Home() {
  return (
    <main className={ styles.container }>
      <Aside />
      <div>
        <h1>Olá, eu sou o Thiago Fonseca</h1>
        <section>
          <p>
            Estudante de Desenvolvimento Web Fullstack na <a
              href="https://www.betrybe.com/"
              rel="noreferrer"
              target="_blank"
            >
              Trybe
            </a>, em transição de carreira, após 17 anos no setor automotivo.
          </p>
          
          <h3>Skills</h3>
          <figure>
            <img src={JavaScript} alt="Logo JavaScript" />
            <img src={react} alt="Logo React" />
            <img src={redux} alt="Logo Redux" />
            <img src={reactRouter} alt="Logo React Router" />
            <img src={jest} alt="Logo Jest" />
            <img src={styledComponent} alt="Logo Styled Components" />
            <img src={css} alt="Logo CSS" />
            <img src={html5} alt="Logo HTML5" />
          </figure>
          
        </section>
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
          <a
            href="https://wa.me/5581981140390"
            rel="noreferrer"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
          <span>(81)98114-0390</span>
        </nav>
        <Footer />
      </div>
    </main>
  )
}

export default Home;
