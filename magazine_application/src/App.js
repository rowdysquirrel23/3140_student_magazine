import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/homePage';
import Campus from './pages/campus/campusPage';
import Sport from './pages/sport/sportPage';
import Activities from './pages/activities/activitiesPage';
import Advice from './pages/advice/advicePage';
import { Route, Routes} from 'react-router-dom';
import Footer from './components/footer/footer';
import Sport_news1 from './pages/sport/sport_news/sport1';
import Sport_news2 from './pages/sport/sport_news/sport2';

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
        <Route path="/sport/sport1" element={<Sport_news1/>} />
        <Route path="/sport/sport2" element={<Sport_news2/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
