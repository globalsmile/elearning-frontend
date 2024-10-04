import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';

function App() {
	  return (
		      <Router>
		        <Switch>
		          <Route path="/login" component={Login} />
		          <Route path="/signup" component={SignUp} />
		          <Route path="/forgot-password" component={ForgotPassword} />
		          <Route path="/reset-password/:token" component={ResetPassword} />
		          <Route path="/profile" component={Profile} />
		        </Switch>
		      </Router>
		    );
}

export default App;
