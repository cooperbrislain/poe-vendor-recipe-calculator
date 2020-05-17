import React, { useState } from 'react';
import { connect } from "react-redux";
import {compose} from "redux";
import { Form, Button } from 'react-bootstrap';

import { signIn } from './../actions'


const LoginForm = props => {
    console.log('PROPS',props);
    const [ accountName, setAccountName ] = useState('');
    const [ token, setToken ] = useState('');
    const { signIn } = props;
    const { handleSubmit } = props;
    console.log(signIn, handleSubmit);
    return (
        <Form>
            <Form.Group controlId="formAccount">
                <Form.Label>PoE Account Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Your username for your PoE account"
                    onChange={ e => setAccountName(e.target.value) }
                    value={accountName}
                />
            </Form.Group>

            <Form.Group controlId="formToken">
                <Form.Label>Auth Token</Form.Label>
                <Form.Control
                    type="text"
                    onChange={ e => setToken(e.target.value) }
                    value={token}
                />
                <Form.Text className="text-muted">
                    Found in POESESSID Cookie.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="button"
                onClick={ signIn }>
                Submit
            </Button>
        </Form>
    );
};

const mapStateToProps = state => ({ state });

export default compose(
    connect(mapStateToProps, { signIn }))(LoginForm);
