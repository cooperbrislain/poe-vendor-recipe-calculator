import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getAllInv } from './../../actions';
import { Container, Form, Row, Col, Button, Table, Navbar, Nav } from 'react-bootstrap';
import SearchControls from './SearchControls';

// import styles from './index.css';



class InventoryList extends Component {
    componentDidMount = () => this.props.getAllInv();
    Sorts = {
        level: (a, b) => (a.ilvl-b.ilvl),
        alpha: (a, b) => (a.typeLine-b.typeLine),
    };
    Filters = {
        all: item => true,
        cat: item => item.category === this.props.state.inv.search.category,
        level: item => item.ilvl >= this.props.state.inv.search.level_min
            && item.ilvl <= this.props.state.inv.search.level_max
    };

    combineFilters = (filters) => {
        return item => filters.reduce((pass, filter) => pass && this.Filters[filter](item), true);
    };

    render() {
        const { inv } = this.props.state;
        const { search } = inv;
        const { Sorts, Filters, combineFilters } = this;
        const invIdStrings = {
            'MainInventory': 'Inventory',
            'Weapon': 'Wielded',
            'Offhand2': 'Wielded',
            'default': 'Equipped'
        };
        // inv.items.sort((a, b) => (a.typeLine > b.typeLine) ? 1 : -1);
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
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Icon</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Subcat</th>
                                <th>Level</th>
                                <th>Where</th>
                            </tr>
                            </thead>
                            <tbody>
                            { inv.items
                                .filter(combineFilters(search.filters))
                                .sort(Sorts[search.sort])
                                .map((item, i) => (
                                    <tr key={i}>
                                        <td><img src={item.icon} alt='icon' /></td>
                                        <td>{item.name} {item.typeLine}</td>
                                        <td>{item.category}</td>
                                        <td>{item.subcat}</td>
                                        <td>{item.ilvl}</td>
                                        <td>
                                            { item.location.type==='char'?
                                                `Character: ${item.location.character}
                                                (${invIdStrings[item.inventoryId]||item.inventoryId})`
                                                :'' }
                                            { item.location.type==='stash'? `Stash: ${item.location.name}`:'' }
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getAllInv }))(InventoryList)
