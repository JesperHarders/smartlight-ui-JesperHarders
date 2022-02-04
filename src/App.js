import {Routes, Route, BrowserRouter} from 'react-router-dom'
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
      </div>
    </BrowserRouter>
  );
}

export default App;
