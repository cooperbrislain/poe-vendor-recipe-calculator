import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getStashTabs } from './../../actions';
import StashTabs from './StashTabs';
import StashTab from './StashTab';
// import styles from './index.css';

class Stash extends Component {
    componentDidMount = () => this.props.getStashTabs();

    render() {
        const { stash } = this.props.state;
        console.log('STASH', stash);
        return (
            <>
                <StashTabs />
                <StashTab tabIndex={stash.tabIndex} />
            </>
        );
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getStashTabs }))(Stash)
