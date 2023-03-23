import Navigation from './components/navigation.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import ProgectsPage from './pages/ProgectsPage';
import SingleProject from './pages/SingleProject';
import Error404 from './pages/Error404';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
      
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route  path='/projects' element={<ProgectsPage />}/>
        <Route  path='/projects/:projectId' element={<SingleProject />}/>
        <Route  path='/*' element={<Error404 />}/>
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


