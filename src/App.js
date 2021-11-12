import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import { Customers } from './AppCustomers';
import { Products } from './AppProducts';
import { Customer } from './AppSingleCustomer';

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
          <Route exact path='/customers'>
            <Customers/>
          </Route>
          <Route exact path='/products'>
            <Products/>
          </Route>                          
          <Route path={`/customers/:customerId`}>
              <Customer/>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App;
