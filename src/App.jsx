import Encabezado from "./componentes/compartidos/Encabezado";
import Pie from "./componentes/compartidos/Pie";
import Principal from "./componentes/compartidos/Principal";
import './App.css'
import Lista from "./componentes/lista/Lista";

function App() {
  return (
    <div className="App">
      <Encabezado></Encabezado>
      <Principal>
        <Lista></Lista>
      </Principal>
      <Pie></Pie>
    </div>
  );
}

export default App;
