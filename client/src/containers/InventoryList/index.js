import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getStashInv } from './../../actions';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
// import styles from './index.css';

class InventoryList extends Component {
    componentDidMount = () => this.props.getStashInv();
    render() {
        const { stash } = this.props.state;
        console.log('INVLIST', stash);
        return (
            <>
                <h3>Full Stash Inventory</h3>
                <ul>
                    { stash.inv.map((item, i) => <li key={i}>{item.name} - {item.typeLine}</li>) }
                </ul>
            </>
        )
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getStashInv }))(InventoryList)
