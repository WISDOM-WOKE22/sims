import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home/home'
import Navbar from './components/Nav/navbar'
import WeightControl from './pages/Home/WeightControl/weightControl';
import EquipmentList from './pages/EquipmentList/equipmentList';
import AboutUs from './pages/AboutUs/aboutUs';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/weight-control' element={<WeightControl/>}/>
        <Route path='/equipment_list' element={<EquipmentList/>}/>
        <Route path='/about_us' element={<AboutUs/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
