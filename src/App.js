import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import Order from './Components/Order/Order'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import { createContext } from 'react';
import useTshirt from './hooks/useTshirt';

export const ShirtContext = createContext('shirt')
function App() {
  const [shirts, setShirts] = useTshirt()

  return (
    <div className="App">
      <ShirtContext.Provider value={[shirts, setShirts]}>

        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        
      </ShirtContext.Provider>
    </div>
  );
}

export default App;
