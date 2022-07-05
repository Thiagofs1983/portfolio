import Routes from './Routes';
import Aside from './components/Aside';
import Header from './components/Header';
import styles from './styles/App.module.css';

function App() {
  return (
    <main className={ styles.container }>
      <Header />
      <Aside />
      <Routes />
    </main>
  );
}

export default App;
