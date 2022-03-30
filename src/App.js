import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componant/Home/Home';
import Header from './componant/Header/Header';
import CoIns from './componant/CoIns/CoIns';
import Contact from './componant/Contact/Contact';
import CoinDetail from './componant/CoinDetail/CoinDetail';
import BdAdress from './componant/Contact/BdAdress';
import UsAdress from './componant/Contact/UsAdress';

import NotFound from './componant/NotFound/NotFound';
import About from './componant/About/About';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path = '/coins' element={<CoIns></CoIns>}></Route>
        <Route path ='/coin-details/:coinId'element={<CoinDetail></CoinDetail>}></Route>
        <Route path = '/contact'element={<Contact></Contact>}>
          <Route path='bd-address' element={<BdAdress></BdAdress>}></Route>
          <Route path='us-address' element={<UsAdress></UsAdress>}></Route>
          
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
