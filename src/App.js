import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio"
import SobreMim from './paginas/SobreMim'
import Menu from './components/Menu'
import Rodape from "components/Rodape";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<div>Página não encontrada</div>}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default App;
