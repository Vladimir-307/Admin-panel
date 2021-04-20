import "./App.css";
import Header from './elements/PageHeader/PageHeader';
import Filter from './elements/FilterRow/FilterRow';
import Table from './elements/TableWrapper/TableWrapper';

function App() {
  return (
    <div className="adminPanel">
      <Header/>
      <Filter/>
      <Table/>
    </div>
  );
}

export default App;