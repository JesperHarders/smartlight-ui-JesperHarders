import { useState } from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ContentArea from './components/ContentArea';
import ContentAreaDetails from './components/ContentAreaDetails';
import HeaderComponent from './components/Header';
import HeaderDetails from "./components/HeaderDetails";
import Navigation from './components/Navigation';
// https://www.robinwieruch.de/react-lift-state/

function App() {
  const [color, changeColor] = useState()

  const handleColor = (e) => {
    let fullString = e.target.classList[0]
    let hexcode = fullString.slice(4, 11)
    console.log(hexcode);
    changeColor(hexcode)
}

  return (
    <BrowserRouter>
      <div className='relative'>
        <Routes>
          <Route path='/' element={<HeaderComponent/>}/>
          <Route path='/rooms/:id' element={<HeaderDetails color={color} handleColor={handleColor}/>}/>
        </Routes>
        <Routes>
          <Route path='/' element={<ContentArea/>}/>
          <Route path='/rooms/:id' element={<ContentAreaDetails/>}/>
        </Routes>
        <Navigation/>
      </div>
    </BrowserRouter>
  );
}

export default App;
