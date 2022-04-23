import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBox />
      <Card />
    </div>
  );
}

export default App;
