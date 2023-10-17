import './App.css';
import { Route, Routes, BrowserRouter , Link  } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
