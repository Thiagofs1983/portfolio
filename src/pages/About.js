import React from 'react';
import familia from '../images/familia.png';
import styles from '../styles/About.module.css';
import JavaScript from '../images/JavaScript-logo.png';
import html5 from '../images/html5.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import reactRouter from '../images/react-router.png';
import jest from '../images/jest.png';
import styledComponent from '../images/styled-components.png';
import Footer from '../components/Footer';
import css from '../images/css.jpg';
import '../styles/homes.css';

function About() {
  return (
    <>
    <main className={ styles.container }>
      <div className="scale-in-hor-left">  
          <h1>Sobre</h1>
          <img src={familia} alt="Foto da familia do Thiago" />
          <article>
            <h3>Bem vindo(a)!!!</h3>
            <p>
              Sou natural da cidade de Belo Horizonte - MG, primeiro filho de uma família de 3 irmãos.
            </p>
            <p>
              Meu primeiro contato com tecnologia foi no ensino médio, onde fiz o curso técnico de
              processamento de dados, mas como moro em uma região onde a uma predominancia do setor
              automotivo, acabei seguindo nessa área, onde consegui me desenvolver bem,
              porém sempre pensando em voltar para a área de tecnologia.
            </p>
            <p>
              Hoje, estou casado, com um filho lindo e fazendo a transição de carreira que tanto desejava,
              com a certeza que estou no caminho correto e amando a cada novo aprendizado aqui na <a
              href="https://www.betrybe.com/"
              rel="noreferrer"
              target="_blank"
              >Trybe
            </a>.
            </p>
          </article>
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
      </div>
    </main>
    <Footer />
    </>
  )
}

export default About;
