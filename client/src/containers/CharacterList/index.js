import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getChars } from './../../actions';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
// import styles from './index.css';

class CharacterList extends Component {
    componentDidMount = () => this.props.getChars();

    render() {
        return (
            <Container>
                Character List
            </Container>
        )
    }
}

const mapStateToProps = state => ({ state});
export default compose(connect(mapStateToProps, { getChars }))(CharacterList)
