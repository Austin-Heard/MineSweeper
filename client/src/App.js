import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './home';
import MineSweeper from './MineSweeper';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/play' element={<MineSweeper/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
