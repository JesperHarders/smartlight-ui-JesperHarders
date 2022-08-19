import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ContentArea from './components/ContentArea';
import ContentAreaDetails from './components/ContentAreaDetails';
import HeaderComponent from './components/Header';
import HeaderDetails from "./components/HeaderDetails";
import Navigation from './components/Navigation';
import CardProvider from './context/cardContext';
// https://www.robinwieruch.de/react-lift-state/

function App() {

  return (
    <CardProvider>
      <BrowserRouter>
        <div className='relative'>
          <Routes>
            <Route path='/' element={<HeaderComponent/>}/>
            <Route path='/:roomId' element={<HeaderDetails/>}/>
          </Routes>
          <Routes>
            <Route path='/' element={<ContentArea/>}/>
            <Route path='/:roomId' element={<ContentAreaDetails/>}/>
          </Routes>
          <Navigation/>
        </div>
      </BrowserRouter>
    </CardProvider>
  );
}

export default App;
