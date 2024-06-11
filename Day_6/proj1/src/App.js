import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Layout from './Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
