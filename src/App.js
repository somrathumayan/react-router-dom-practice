import {Routes, Route} from 'react-router-dom';

import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
        <Nav></Nav>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
        </Routes>
        
        
        
    </div>
  );
}

export default App;
