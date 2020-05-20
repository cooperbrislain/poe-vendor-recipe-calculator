import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
// import ReduxFormControl from "react-redux-bootstrap-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import ReduxFormControl from "./ReduxFormControl";

import { signIn } from './../actions'

const LoginForm = props => {
    const onSubmit = formProps => props.signIn(formProps, () => props.history.push('/'));
    const { handleSubmit } = props;
    const [ accountName, setAccountName ] = useState(props.state.auth.accountName || '');
    const [ token, setToken ] = useState(props.state.auth.token || '');
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formAccount">
                <Form.Label>PoE Account Name</Form.Label>
                <Field
                    name="accountName"
                    type="text"
                    value={accountName}
                    validate=""
                    placeholder="Your username for your PoE account"
                    component={ReduxFormControl}
                />
            </Form.Group>

            <Form.Group controlId="formToken">
                <Form.Label>Auth Token</Form.Label>
                <Field
                    name="token"
                    type="text"
                    value={token}
                    validate=""
                    placeholder=""
                    component={ReduxFormControl}
                />
                <Form.Text className="text-muted">
                    Found in POESESSID Cookie.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    );
};

const mapStateToProps = state => ({ state });

export default compose(
    connect(mapStateToProps, { signIn }),
    reduxForm({ form: 'signin' })
)(LoginForm);
