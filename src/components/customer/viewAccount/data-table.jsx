import React from 'react';
import { Component } from 'react';

class DataTable extends Component {
    render(){
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.firstname}</td>
                <td>{this.props.obj.lastname}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.password}</td>
                <td>{this.props.obj.email}</td>
            </tr>
        );
}
} export default DataTable;