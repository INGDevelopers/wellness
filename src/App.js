import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import IndexAd from './containers/admin/index';
import Profile from './containers/profile';
import Login from './containers/login';
import Table from './components/table';
import Home from './containers/home';
import Users from './containers/users';
import History from './containers/history';
import Instrument from './containers/instruments';
import './App.css';
import OutLogin from './routes/verifyAuth';
import Requests from './containers/request';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<OutLogin/>}>
          
          <Route path='/' element={<Home />} />
          {/* <Route path='/users' element={<Users />} /> */}
          <Route path='/admin' element={<IndexAd />} />
          <Route path='/admin/users' element={<IndexAd />} />
          <Route path='/admin/instruments' element={<IndexAd />} />
          <Route path='/admin/requests' element={<IndexAd />} />

          <Route path='/requests' element={<Requests />} />
          {/* <Route path='/admin/users' element={<IndexAd />} />
          <Route path='/admin/instruments' element={<IndexAd />} /> */}
          {/* <Route path='/history' element={<Table />} /> */}
          <Route path='/profile' element={<Profile />} />
          <Route path='/history' element={<History/>}/>
          <Route path='/instrument' element={<Instrument />} />
        </Route>
        
        <Route exact path='/login' element={<Login />} />
        <Route path='*' element={'No se encontro la pagina'} />
      </Routes>
    </Router>
  );
}

export default App;
