import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Delivery from './pages/Delivery';
import DiningOut from './pages/DiningOut';
import Nightlife from './pages/Nightlife';
import DeliveryTime from './pages/DeliveryTime';
import PureVeg from './pages/PureVeg';
import Rating from './pages/Rating';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    
    <Route path="/" element={<Delivery/>}>
      <Route path='/' element={<DeliveryTime/>}></Route>
      <Route path='rating' element={<Rating/>}></Route>
      <Route path='pureveg' element={<PureVeg/>}></Route>
    </Route>
    <Route path='/diningout' element={<DiningOut/>}></Route>
    <Route path='/nightlife' element={<Nightlife/>}></Route>
    







    </Routes>

    
    </div>
  );
}

export default App;
