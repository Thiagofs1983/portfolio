import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Aside.module.css';

function Aside() {
  return (
    <aside className={ styles.container }>
      <Link to="/">Página Inicial</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/contact">Contato</Link>
    </aside>
  )
}

export default Aside;