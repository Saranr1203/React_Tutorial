import './App.css';
import Dashboard from './DashBoard/Dashboard';
import Login from './Login/Login';
import Register from './Register/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
          <Routes>
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/Register" element={<Register/>}/>
          </Routes>
          <Dashboard/>
          <Login/>
          <Register/>
    </BrowserRouter>
    </div>
  );
}

export default App;
