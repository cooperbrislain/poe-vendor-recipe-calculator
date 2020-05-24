import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getAllInv } from './../../actions';
import { Container, Form, Row, Col, Button, Table, Navbar, Nav } from 'react-bootstrap';
import SearchControls from './SearchControls';

// import styles from './index.css';

class InventoryList extends Component {
    componentDidMount = () => this.props.getAllInv();

    render() {
        const { inv } = this.props.state;
        console.log('INVLIST', inv);
        inv.items.sort((a, b) => (a.typeLine > b.typeLine) ? 1 : -1);
        return (
            <>
                <Navbar>
                    <h3>Full Inventory</h3>
                </Navbar>
                <SearchControls />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Where</th>
                        </tr>
                    </thead>
                    <tbody>
                    { inv.items.map((item, i) => (
                        <tr key={i}>
                            <td><img src={item.icon} /></td>
                            <td>{item.name} {item.typeLine}</td>
                            <td>{item.ilvl}</td>
                            <td>{item.inventoryId}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </>
        )
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getAllInv }))(InventoryList)
