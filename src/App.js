import logo from './logo.svg';
import './App.css';
import Header from './componets/Header';
import Home from './componets/Home';
import About from './componets/About';
import Contact from './componets/Contact';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./css/navbar.css"
import "./css/LoginForm.css"
import "./css/Home.css"
import "./css/Contact.css"
import "./css/About.css"
import 'bootstrap/dist/css/bootstrap.css';
import Login from './componets/Login';
import Dashboard from './componets/Dashboard';
import Demo from './componets/demo';

function App() {
   
  return (
  <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/'element={<Home/>}>Home</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/login' element={<Login/>}>Login</Route>
        <Route path='/logout' element={<Login/>}>Logout</Route>
        <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
        <Route path='/demo' element={<Demo/>}>boot</Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
