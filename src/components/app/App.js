import React from 'react';

import TaxlessApiService from "../../services/TaxlessApiService";
import './App.css'
import AppHeader from "../app-header";
import OperationsTable from "../operations-table";

export default class App extends React.Component  {
    operationsApi = new TaxlessApiService();

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
