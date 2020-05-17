import React, { useState } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";

const UserInfo = props => {
    const { accountName, token } = props.state.auth;
    console.log([accountName, token]);
    return ((accountName && token) ?
        (<div><em>accountName: </em>{accountName}  <em>POESESSID: </em>{token}</div>)
            :
        (<div><em>Not Authenticated</em></div>)
    );
};

const mapStateToProps = state => ({ state });

export default compose(connect(mapStateToProps, { }))(UserInfo);
