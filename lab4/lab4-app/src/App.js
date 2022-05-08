import './App.css';
import Home from './components/Home';
import AllCars from './components/AllCars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CarID from './components/CarID';
import CarMake from './components/CarMake'
import NewCar from './components/NewCar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes className='routes'>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/all-cars" element={<AllCars />} />
          <Route exact path="/car-id" element={<CarID />} />
          <Route exact path="/car-make" element={<CarMake />} />
          <Route exact path="/new" element={<NewCar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;