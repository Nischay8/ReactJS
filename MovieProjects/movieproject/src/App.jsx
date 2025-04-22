
import { Routes,Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import { MovieProvider } from './context/MovieContext';

function App() {
  return (
    <MovieProvider>
      <Navbar/>
   <main className='main-content'>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/favorites' element={<Favorites/>}></Route>
    </Routes>
   </main>
    </MovieProvider>
  );
}




export default App
