import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  const nome = 'maria '
  return (
    <div className="App">
      <Frase/>
      <Frase/>

      <h1>teste</h1>
      <SayMyName nome='matheus'/>
      <SayMyName nome='joão'/>
      <SayMyName nome = {nome}/>
      <Pessoa 
      nome="jess" 
      idade = "17" 
      profissao = "programadora" 
      foto = "https://miro.medium.com/v2/resize:fit:1024/1*Hzes1SQwIwrxNr46jsBBlA.png"
      />
    </div>
  );
}

export default App;
