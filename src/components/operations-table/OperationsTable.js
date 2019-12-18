import React from 'react';

import './OperationsTable.css';
import OperationRecord from "../operation-record/OperationRecord";

const OperationsTable = ({operations}) => {

    const elements = operations
        .map((item) => {
            return (
                <OperationRecord {...item}/>
            );
        });

    return (
        <table className="table">
            <caption>Operations</caption>
            <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Currency</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Comment</th>
            </tr>
            </thead>
            <tbody>
            {elements}
            </tbody>
        </table>
    );
};

export default OperationsTable;
