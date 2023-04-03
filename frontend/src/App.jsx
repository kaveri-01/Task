import { Route, Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Navbar from './Components/Global/Navbar';
import Explore from './Components/Explore';
import Portfolio from './Components/Portfolio';
import Companies from './Components/Global/Companies';
import Search from './Components/Global/Search';
import Login from './Components/Login';
import Register from './Components/Register';
import Test from './Components/Test';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/explore' element={<Explore />} />
        <Route exact path='/test' element={<Test />} />
        <Route exact path="/explore/:id" element={<Companies />} />
        <Route exact path="/search/:id" element={<Search />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        

      </Routes>
    </div>
  );
}

export default App;
