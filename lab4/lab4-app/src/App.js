import './App.css';
import Home from './components/Home';
import AllCars from './components/AllCars';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import CarID from './components/CarID';
import CarMake from './components/CarMake'
import NewCar from './components/NewCar';
import UpdateCar from './components/UpdateCar';
import Navbar from './components/Navbar';
import DeleteCar from './components/DeleteCar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes className='routes'>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all-cars" element={<AllCars />} />
          <Route exact path="/car-id" element={<CarID />} />
          <Route exact path="/car-make" element={<CarMake />} />
          <Route exact path="/new" element={<NewCar />} />
          <Route exact path="/update" element={<UpdateCar />} />
          <Route exact path="/delete" element={<DeleteCar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;