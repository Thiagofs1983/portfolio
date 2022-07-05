import React from 'react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'
import styles from '../styles/Aside.module.css';

function Aside() {
  return (
    <aside className={ styles.container }>
      <Link to="/">Página Inicial</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
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
          <p>(81)98114-0390</p>
        </nav>
    </aside>
  )
}

export default Aside;