import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/homePage';
import Campus from './pages/campus/campusPage';
import Sport from './pages/sport/sportPage';
import Activities from './pages/activities/activitiesPage';
import Advice from './pages/advice/advicePage';
import { Route, Routes} from 'react-router-dom';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/campus" element={<Campus/>} />
        <Route path="/sport" element={<Sport/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/advice" element={<Advice/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
