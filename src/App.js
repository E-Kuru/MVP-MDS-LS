import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx'
import NavBar from './components/Navbar.jsx';

const App = () => {
  return(
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;