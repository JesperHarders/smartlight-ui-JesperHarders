import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ContentArea from './components/ContentArea';
import HeaderComponent from './components/Header';
import HeaderDetails from "./components/HeaderDetails";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HeaderComponent/>}/>
          <Route path='/rooms/:id' element={<HeaderDetails/>}/>
        </Routes>
        <Routes>
          <Route path='/' element={<ContentArea/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
