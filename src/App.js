import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Error from './Pages/Error';
 
function App() {
  return (
    <>
    <Routes>
    <Route path='/' Component={Home}></Route>
    <Route path='/about' Component={About}></Route>
    <Route path='/contact' Component={Contact}></Route>
    <Route path='/service' Component={Service}></Route>
    <Route path='*' Component={Error}></Route>
    </Routes>

    </>
  );
}

export default App;
