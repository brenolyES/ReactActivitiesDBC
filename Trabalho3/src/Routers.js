import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';

function Routers() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home Link={Link}/>}/>
        <Route path="/sobre" element={<Sobre Link={Link}/>}/>
        <Route path="/contato" element={<Contato Link={Link}/>}/>
      </Routes>
    </Router>
  );
}

export default Routers;
