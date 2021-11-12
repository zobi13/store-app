import { useState } from "react";
import { Customers } from "./AppCustomers";
import { useParams } from 'react-router-dom';

export function Customer() {

    let {customerId} = useParams();
    console.log({customerId})

    return (
        <div> {customerId} </div>
    );
}