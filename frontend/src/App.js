import './App.css';
import { Route, Routes, BrowserRouter , Link  } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import GrievanceForm from './pages/GrievanceForm';
import CheckStatus from './pages/CheckStatus';
import Remarks from './pages/Remarks';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/grievanceForm" element={<GrievanceForm />}></Route>
          <Route exact path='/checkstatus' element={<CheckStatus />}></Route>
          <Route exact path='/remarks/:id' element={<Remarks />}></Route>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
