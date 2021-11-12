import { useState } from "react";

export function Customers() {

    const [customers, setCustomers] = useState([
        {id: 1, first_name: 'Asdf', last_name: 'Asdf'},
        {id: 2, first_name: 'yolo', last_name: 'YOlo'},
    ])

    const [newCustomer, setNewCustomer] = useState({
        id: null,
        first_name: '',
        last_name: ''
      });

    const handleSubmit = (e) => {
        e.preventDefault();

        setCustomers([...customers, { ...newCustomer }]);

        setNewCustomer({
            id: null,
            first_name: '',
            last_name: '',
        });
    };

    return (
        <div>
            {customers.map(customer => (
                <ul key = {customer.id}>
                    <li> {customer.first_name + ' ' + customer.last_name + ' with id:' + customer.id} </li>
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

