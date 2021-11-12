export function Customers() {
    const customers = [
        {id: 1, first_name: 'Asdf', last_name: 'Asdf'},
        {id: 2, first_name: 'yolo', last_name: 'YOlo'},
    ];

    return (
        <div>
            {customers.map(customer => (
                <ul key = {customer.id}>
                    <li> {customer.first_name + ' ' + customer.last_name} </li>
                </ul>
            ))}
        </div>
    )
}

