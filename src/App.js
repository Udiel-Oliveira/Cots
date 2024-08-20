import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'

function App() {

  const nome = "Maria"

return (
  <div className="App">
    <SayMyName nome="Udiel"/>
    <SayMyName nome="João"/>
    <Frase/>
    <List/>
    <Pessoa nome="Udiel" idade="17" profissão="programador"  />
    
  </div>
);
}

export default App;
