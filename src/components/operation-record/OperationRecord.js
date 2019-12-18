import React from 'react';

import './OperationRecord.css';

const OperationRecord = ({id, currency, amount, date, comment}) => {
    return (
        <tr key = {id}>
            <td>{id}</td>
            <td>{currency}</td>
            <td>{amount}</td>
            <td>{date}</td>
            <td>{comment}</td>
        </tr>
    );
};

export default OperationRecord;
