import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import AddData from './AddData';
import Navbar from './components/Navbar';
import AboutUs from './AboutUs'
import LoginPage from './LoginPage'
import ServicePage from './ServicePage'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/addData" element={<AddData />} />
        <Route path="/service" element={<ServicePage/>}/>
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/Login" element={<LoginPage/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
