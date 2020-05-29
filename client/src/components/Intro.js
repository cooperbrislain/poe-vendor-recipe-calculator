import React, { useState } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { Jumbotron } from "react-bootstrap"

const UserInfo = props => {
    return (
        <Jumbotron>
            Welcome
        </Jumbotron>
    );
};

const mapStateToProps = state => ({ state });

export default compose(connect(mapStateToProps, { }))(UserInfo);
