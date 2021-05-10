import styles from "./App.module.css";
import Header from './components/PageHeader/PageHeader';
import Filter from './components/FilterRow/FilterRow';
import Table from './components/Table/Table';

function App() {
  return (
    <div className={styles.adminPanel}>
      <Header/>
      <Filter/>
      <Table/>
    </div>
  );
}

export default App;