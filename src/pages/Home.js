import React from 'react';
import Thiago from '../images/Thiago.png';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import '../styles/homes.css';

function Home() {
  return (
    <main className={ styles.container }>
      <div className="scale-in-hor-left">
        <img
          src={Thiago}
          alt="Foto do Thiago"
        />
        <section>
          <h1>Thiago Fonseca</h1>
          <p>
            Estudante de Desenvolvimento Web Fullstack na <a
              href="https://www.betrybe.com/"
              rel="noreferrer"
              target="_blank"
            >
              Trybe
            </a>, em transição de carreira, após 17 anos no setor automotivo.
          </p>
        </section>
        <Footer />
      </div>
    </main>
  )
}

export default Home;
