import React from 'react';

import OperationsApiService from "../../services/OperationsApiService";
import './App.css'
import AppHeader from "../app-header";
import OperationsTable from "../operations-table";

export default class App extends React.Component  {
    operationsApi = new OperationsApiService();

    state = {
        operations: []
    };

    constructor(){
        super();
        this.operationsApi.gelAllOperations()
            .then((operations) => {
                this.setState({
                    operations
                });
            });
    }


    render() {
        return (
            <div className="operations-app">
                <AppHeader/>
                <OperationsTable operations = {this.state.operations}/>
            </div>
        );
    }

};
