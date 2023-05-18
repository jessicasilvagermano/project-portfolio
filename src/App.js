import GroupExample from "./components/pages/Skills.js";
import Hobbies from "./components/pages/Hobbies.js";
import Contato from "./components/pages/Contato.js";
import Formacao from "./components/pages/Formacao.js";
import Experiencia from "./components/pages/Projetos.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.js";



function App() {
  return (
    <div >

      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/sobremim" element={<Home />} />
        <Route exact path="/skills" element={<GroupExample />} />
        <Route exact path="/hobbies" element={<Hobbies />} />
        <Route exact path="/formacao" element={<Formacao />} />
        <Route exact path="/experiencia" element={<Experiencia />} />
        <Route exact path="/contato" element={<Contato />} />
      </Routes>

    </div>
  );
}

export default App;
