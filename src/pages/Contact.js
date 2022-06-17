import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <div className={ styles.container }>
      <h1>Contato</h1>
      <form action="https://formsubmit.co/t.fs.2007@hotmail.com" method="POST">
        <label htmlFor="name">Nome</label>  
        <input type="text" name="name" id="name" />
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="message">Mensagem</label>
        <textarea name="message" id="message" cols="30" rows="10" />
        <button type="submit">Enviar</button>
      </form>
      <Footer />
    </div>
  )
}

export default Contact;
