import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Customers } from './AppCustomers';
import { Products } from './AppProducts';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'> Home </Link>
          </li>
          <li>
            <Link to='/products'> Products </Link>
          </li>
          <li>
            <Link to='/customers'> Customers </Link>
          </li>
        </ul>
        <Switch>
          <Route path='/customers'>
            <Customers/>
          </Route>
          <Route path='/products'>
            <Products/>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
