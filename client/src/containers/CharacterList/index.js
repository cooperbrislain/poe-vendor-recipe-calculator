import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getChars } from './../../actions';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
// import styles from './index.css';

class CharacterList extends Component {
    componentDidMount = () => this.props.getChars();
    render() {
        const { user } = this.props.state;
        console.log('USER', user);
        console.log('CHARS', user.chars);
        return (
            <ul>
                { user.chars.map((char, i) => <li key={i}>{char.name}</li>) }
                {/*{ user.chars.map((char, i) => <li key={i}>{char.name}</li>) }*/}
            </ul>
        )
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getChars }))(CharacterList)
