import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getStashTab } from '../../actions';
import { Navbar, Nav } from 'react-bootstrap';
// import styles from './index.css';

class StashTab extends Component {
    componentDidMount = () => this.props.getStashTab(this.props.tabIndex);
    render() {
        const { stash } = this.props.state;
        const { tabIndex } = this.props;
        console.log('STASH', stash);
        return (stash.tabs.length?
                <>
                    { stash.tabs[tabIndex].n }
                    <ul>
                        { stash.inv.map((item, i) => <li key={i}>{item.name} {item.typeLine}</li>) }
                    </ul>
                </>
                :
                <>No Items</>
        );
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getStashTab }))(StashTab)
