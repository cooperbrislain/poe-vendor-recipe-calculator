import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getStashTabs, getStashTab, selectStashTab } from '../../actions';
import { Navbar, Nav } from 'react-bootstrap';
// import styles from './index.css';

class StashTabs extends Component {
    componentDidMount = () => this.props.getStashTabs();

    tabClick = (i) => {
        console.log('TABCLICK',i);
        this.props.getStashTab({ tabIndex: i });
    };

    render() {
        const { stash } = this.props.state;
        console.log('STASH', stash);
        return (
            <Navbar>
                <Nav className="mr-auto">
                    { stash.tabs.map((tab, i) =>
                        <Nav.Link key={i} onClick={ e => this.tabClick(i) } href="#">{tab.n}</Nav.Link>
                    ) }
                </Nav>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getStashTabs, getStashTab }))(StashTabs)
