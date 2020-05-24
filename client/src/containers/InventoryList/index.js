import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getAllInv } from './../../actions';
import { Container, Form, Row, Col, Button, Table, Navbar, Nav } from 'react-bootstrap';
import SearchControls from './SearchControls';
import SearchResults from './SearchResults';
// import styles from './index.css';



class InventoryList extends Component {
    componentDidMount = () => this.props.getAllInv();

    render() {
        const { inv } = this.props.state;
        return (inv.items===undefined?
            <>Please wait while your inventory is loaded...</>
            :
            <>
                <Navbar>
                    <h3>Full Inventory</h3>
                </Navbar>
                <Row>
                    <Col md="3">
                        <SearchControls />
                    </Col>
                    <Col md="9">
                        <SearchResults />
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getAllInv }))(InventoryList)
