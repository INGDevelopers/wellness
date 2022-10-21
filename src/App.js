import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Profile from './containers/profile';
import Login from './components/login';
import History from './components/history';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/history' element={<History/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
