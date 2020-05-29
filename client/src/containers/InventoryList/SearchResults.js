import { Table } from "react-bootstrap";
import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { searchFunctions } from './searchFunctions';

class SearchResults extends Component {
    componentDidMount = () => this.props.updateSearch;

    render() {
        const { inv } = this.props.state;
        const { search } = inv;
        const { Sorts, Filters, combineFilters } = searchFunctions;
        const invIdStrings = {
            'MainInventory': 'Carried',
            'Weapon': 'Wielded',
            'Offhand': 'Wielded',
            'Weapon2': 'Wielded*',
            'Offhand2': 'Wielded*',
            'BodyArmour': 'Worn',
            'Amulet': 'Worn',
            'Ring': 'Worn',
            'Ring2': 'Worn',
            'Boots': 'Worn',
            'Gloves': 'Worn',
            'Helm': 'Worn',
            'Flask': 'Equipped',
            'Belt': 'Worn',
            'default': 'Equipped'
        };
        return (
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
                        .filter(combineFilters(search.filters, search.params))
                        .sort(Sorts[search.sort])
                        .map((item, i) => (
                            <tr key={i}>
                                <td><img src={item.icon} alt='icon' /></td>
                                <td>{item.name} {item.typeLine}</td>
                                <td>{item.category}</td>
                                <td>{item.subcat}</td>
                                <td>{item.level}</td>
                                <td>
                                    {item.location.type === 'char' ?
                                        `${item.location.character} (${invIdStrings[item.inventoryId] || item.inventoryId})`
                                        : ''}
                                    {item.location.type === 'stash' ? `Stash: ${item.location.name}` : ''}
                                    {item.location.type === 'socket' ?
                                        item.location.desc
                                        :
                                        ''
                                    }
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => ({ state });

export default compose(connect(mapStateToProps, { }))(SearchResults)
