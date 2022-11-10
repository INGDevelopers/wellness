import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Profile from './containers/profile';
import Login from './containers/login';
import Table from './components/table';
import Home from './containers/home';
import Users from './containers/users';
import History from './containers/history';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        {/* <Route path='/history' element={<Table />} /> */}
        <Route path='/profile' element={<Profile />} />
        <Route path='/history' element={<History/>}/>
        <Route path='*' element={'No se encontro la pagina'} />
      </Routes>
    </Router>
  );
}

export default App;
