import React from 'react';
import Footer from '../components/Footer';
import familia from '../images/familia.png';
import styles from '../styles/About.module.css';

function About() {
  return (
    <div className={ styles.container }>
      <h1>Sobre</h1>
      <section>
        <img src={familia} alt="Foto da familia do Thiago" />
        <article>
          <h3>Bem vindo!!!</h3>
          <p>
            Sou natural da cidade de Belo Horizonte - MG, primeiro filho de uma família de 3 irmãos.
          </p>
          <p>
            Meu primeiro contato com tecnologia foi no ensino médio, onde fiz o curso técnico de
            processamento de dados, porém fui para o setor automotivo, onde consegui me desenvolver,
            porém sempre pensando em voltar para a área.
          </p>
          <p>
            Hoje, estou casado com um filho lindo e fazendo a transição de carreira que tanto desejava,
            com a certeza que estou no caminho correto e amando a cada novo aprendizado aqui na <a
            href="https://www.betrybe.com/"
            rel="noreferrer"
            target="_blank"
            >Trybe
          </a>.
          </p>
        </article>
      </section>
      <Footer />
    </div>
  )
}

export default About;
