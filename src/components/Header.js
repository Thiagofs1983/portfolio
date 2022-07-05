import React from 'react';
import { TbHome } from 'react-icons/tb';
import { BsInfoSquare } from 'react-icons/bs';
import { MdDeveloperMode} from 'react-icons/md';
import { AiOutlineContacts } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={ styles.container }>
      <Link to="/"><TbHome /></Link>
      <Link to="/about"><BsInfoSquare /></Link>
      <Link to="/projects"><MdDeveloperMode /></Link>
      <Link to="/contact"><AiOutlineContacts /></Link>
    </header>
  )
}

export default Header;
