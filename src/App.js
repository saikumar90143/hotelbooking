import './App.css';
import { Globalstyle } from './Globalstyles';
import { Route, Routes } from "react-router-dom";

import Home from "./components/home/Home";
import List from './components/list/List';
import Hotelpage from './components/Hotelpage';
import Regester from './components/User/Regester';
import Login from './components/User/Login';


function App() {
  return (
    <div className="App">
      <Globalstyle/>
      
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/hotels' element={<List/>}></Route>
        <Route path='/hotelpage' element={<Hotelpage/>}></Route>
        <Route path='/regester' element={<Regester/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
