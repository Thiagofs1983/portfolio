import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'
import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={ styles.container }>
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
    </footer>
  )
}

export default Footer;