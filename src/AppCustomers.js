import { useState } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { Customer } from "./AppSingleCustomer";

export function Customers() {

    const [customers, setCustomers] = useState([
        {id: 1, first_name: 'Asdf', last_name: 'Asdf', purchased_products: [{id: 1, name: 'kompjuter'}, {id: 2, name: 'gamepad'}]},
        {id: 2, first_name: 'yolo', last_name: 'YOlo', purchased_products: [{id: 2, name: 'gamepad'}]},
    ])

    const [newCustomer, setNewCustomer] = useState({
        id: null,
        first_name: '',
        last_name: '',
        purchased_products: []
      });

    const handleSubmit = (e) => {
        e.preventDefault();

        setCustomers([...customers, { ...newCustomer }]);

        setNewCustomer({
            id: null,
            first_name: '',
            last_name: '',
            purchased_products: []
        });
    };

    return (
            <div>
                {customers.map(customer => (
                    <ul key = {customer.id}>
                        <li>
                            {customer.first_name + ' ' + customer.last_name + ' with id:' + customer.id}
                            <Link to={`/customers/${customer.id}`} > Latest Purchases </Link>
                        </li>
                    </ul>
                ))}
                
                <h2> Add customer: </h2>
                <form onSubmit={handleSubmit}>
                    <label for='first_name'> First name: </label> <br/>
                    <input id='first_name' type='text' value={newCustomer.first_name} onChange = {(e) => setNewCustomer({... newCustomer, first_name: e.target.value})} /> <br/>

                    <label for='last_name'> Last name: </label> <br/>
                    <input id ='last_name' type='text' value={newCustomer.last_name} onChange = {(e) => setNewCustomer({... newCustomer, last_name: e.target.value})} /> <br/>

                    <button> Add </button>
                </form>
            </div>
    )
}

