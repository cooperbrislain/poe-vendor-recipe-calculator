import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getChar } from '../../actions';
import { Card } from 'react-bootstrap';
import LoginForm from "../../components/LoginForm";
// import styles from './index.css';

const BASE_STATS = [
    { class: 'Scion', stats: { int: 20, dex: 20, str: 20 } },
    { class: 'Marauder', stats: { int: 14, dex: 14, str: 32 } },
    { class: 'Ranger', stats: {  int: 14, dex: 32, str: 14  } },
    { class: 'Witch', stats: {  int: 32, dex: 14, str: 14  } },
    { class: 'Duelist', stats: {  int: 14, dex: 23, str: 23  } },
    { class: 'Templar', stats: {  int: 23, str: 23, dex: 14  } },
    { class: 'Shadow', stats: {  int: 23, dex: 23, str: 14  } }
];

class CharacterDetail extends Component {
    componentDidMount = () => this.props.getChar(this.props.match.params.charName);

    render() {
        const { char } = this.props.state.chars;
        console.log(this.props.match);
        console.log('CHAR DETAIL', char);
        return (!char? <>Please Wait</> :
            <>
                <Card>
                    <Card.Header>
                        <h4>{char.name}</h4>
                        <h5>Level {char.level} {char.class}</h5>
                    </Card.Header>
                    <Card.Body>
                        <dl>
                            Stuff here
                        </dl>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { getChar }))(CharacterDetail)
