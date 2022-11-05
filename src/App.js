import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home'
import LogIn from './Component/LogIn/LogIn'
import Register from './Component/Register/Register'


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/login' element={<LogIn></LogIn>}></Route>
     </Routes>
    </div>
  );
}
export default App;
