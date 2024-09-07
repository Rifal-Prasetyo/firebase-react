import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import  {Provider}  from 'react-redux';
import {store} from '../../../config/redux'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path='/' Component={Dashboard} />
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
