import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import MainLayout from './layout/MainLayout';
import Experiences from './pages/Experiences';
import Technologies from './pages/Technologies';
import About from './pages/About';
import Experience from './pages/Experience';


function App() {
  return (
    <Router basename='/portfolio'>
      <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/experiences/:experience' element={<Experience />} />
        <Route path='/technologies' element={<Technologies />} />
        <Route path='/about' element={<About />} />
      </Route>
      </Routes>
    </Router>
  )
}

export default App
