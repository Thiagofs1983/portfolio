import React, { useState } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import styles from '../styles/Projects.module.css'
import TrybeWalet from '../images/TrybeWalet.png';
import StarWars from '../images/StarWars.png';
import Trivia from '../images/Trivia.png';
import Footer from '../components/Footer';
import APPRECIPES from '../images/app-recipes.png';
import '../styles/homes.css';

function Projects() {
  const [index, setIndex] = useState(0)
  const projects = [{
    nameProject: "Trybe Wallet",
    image: TrybeWalet,
    alt: "Foto do projeto TrybeWallet",
    gitHub: "https://github.com/Thiagofs1983/TrybeWallet",
    buttonGitHub: "Repositório GitHub do Projeto",
    deploy: "https://trybe-wallet-sable.vercel.app/",
    buttonDeploy: "Deploy do Projeto"
  },
  {
    nameProject: "Star Wars",
    image: StarWars,
    alt: "Foto do projeto StarWars",
    gitHub: "https://github.com/Thiagofs1983/StarWars-search-planet",
    buttonGitHub: "Repositório GitHub do Projeto",
    deploy: "https://star-wars-search-planet.vercel.app/",
    buttonDeploy: "Deploy do Projeto"
  },
  {
    nameProject: "Trivia",
    image: Trivia,
    alt: "Foto do projeto Trivia",
    gitHub: "https://github.com/Thiagofs1983/Trivia",
    buttonGitHub: "Repositório GitHub do Projeto",
    deploy: "https://trivia-ivory-omega.vercel.app/",
    buttonDeploy: "Deploy do Projeto"
  },
  {
    nameProject: "App de Receitas",
    image: APPRECIPES,
    alt: "Foto do projeto App de Receitas",
    gitHub: "https://github.com/Thiagofs1983/app-recipes",
    buttonGitHub: "Repositório GitHub do Projeto",
    deploy: "https://app-recipes-flax.vercel.app/",
    buttonDeploy: "Deploy do Projeto"
  }];

  const handleClickNext = () => {
    setIndex((prev) => prev === projects.length -1 ? 0 : prev + 1)
  }

  const handleClickPrevious = () => {
    setIndex((prev) => prev === 0 ? projects.length -1 : prev - 1)
  }

  return (
    <main className={ styles.container }>
      <div className="scale-in-hor-left">
        <h1>Projetos</h1>
        <div>
          <button
            type="button"
            onClick={ handleClickPrevious }
          >
            <GrPrevious />
          </button>
          <section>
            <h3>{projects[index].nameProject}</h3>
            <img src={projects[index].image} alt={projects[index].alt} />
            <nav>
              <a 
                href={projects[index].gitHub}
                rel="noreferrer"
                target="_blank"
              >
                <button type="button">{projects[index].buttonGitHub}</button>
              </a>
              <a 
                href={projects[index].deploy}
                rel="noreferrer"
                target="_blank"
              >
                <button type="button">{projects[index].buttonDeploy}</button>
              </a>
            </nav>
          </section>
          <button
            type="button"
            onClick={ handleClickNext }
          >
            <GrNext />
          </button>
        </div>
      <Footer />
      </div>
    </main>
  )
}

export default Projects;
