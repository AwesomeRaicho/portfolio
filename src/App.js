import Navigation from './components/navigation.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/pages/home';
import About from './components/pages/about';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route index path='/about' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;