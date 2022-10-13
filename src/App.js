import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom';


import Login from './components/login';
import History from './components/history';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
