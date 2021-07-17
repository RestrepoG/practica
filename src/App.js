import './App.css';
import ListCards from './components/cards/ListCards';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <h1> hola beibis</h1>
      <Navbar/>  {/* llamar componente */}
      <ListCards/>
    </div>
  );
}

export default App;
