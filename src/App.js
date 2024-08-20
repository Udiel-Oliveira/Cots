import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

return (
  <div className="App">
    <SayMyName nome="Udiel"/>
    <SayMyName nome="João"/>
    <SayMyName nome={nome}/>
    <Pessoa nome="Udiel" idade="17" profissão="programador" foto="https://ferramentasinteligentes.com.br/wp-content/uploads/2015/06/water-209901_1280.jpg" />
    
  </div>
);
}

export default App;
