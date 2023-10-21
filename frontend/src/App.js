import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import WebcamCapture from './components/WebcamCapture';
import ProfileSidebar from './components/ProfileSidebar';
import Settings from './components/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="app-nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/webcam" component={WebcamCapture} />
          <Route path="/profile" component={ProfileSidebar} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
