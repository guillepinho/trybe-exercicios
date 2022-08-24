import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import history from './history';

import Home from './pages/Home';
import NotLogged from './pages/NotLogged';
import Login from './pages/Login';
import ClientsList from './pages/ClientsList';

function App() {
  return (
    <div className="react-body">
      <header className="navs">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/clients">Client List</Link>
      </header>
      <div className="content">
      <Routes history={history}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/notlogged" element={<NotLogged />} />
        <Route exact path="/clients" element={<ClientsList />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
