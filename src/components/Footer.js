import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={ styles.container }>
      <hr />
      <Link to="/">Página Inicial</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
    </footer>
  )
}

export default Footer;
