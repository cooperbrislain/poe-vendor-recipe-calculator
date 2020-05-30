import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getChars, getSkillTree } from './../../actions';
import { Container, Button, CardDeck, Card } from 'react-bootstrap';
import CharacterCard from '../Character/CharacterCard';
// import styles from './index.css';

class CharacterList extends Component {
    componentDidMount = () => this.props.getChars();

    render() {
        const { chars } = this.props.state.chars;
        console.log('CHARLIST', chars);
        return (chars && chars.length?
            <CardDeck>
                { chars.map((char, i) => <CharacterCard key={i} char={char} />) }
            </CardDeck>
                :
                'Loading'
        )
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getChars, getSkillTree }))(CharacterList)
