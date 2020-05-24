import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import { getStashTab } from '../../actions';
import { Jumbotron, Form, Button } from 'react-bootstrap';
import { updateSearch } from '../../actions';
import { Field, reduxForm } from "redux-form";
import ReduxFormControl from "../../components/ReduxFormControl";
// import styles from './index.css';

class SearchControls extends Component {
    componentDidMount = () => this.props.updateSearch;
    render() {
        const { stash, inv } = this.props.state;

        return (
            <Jumbotron>
                <Form>
                    <Form.Group controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Field
                            name="category"
                            type="select"
                            component={ReduxFormControl}
                            as="select"
                        >
                            {
                                Object.keys(inv.categories).map((category, v) => {
                                    console.log(category);
                                    return (
                                        <option value={category}>{category}</option>
                                    );
                                })
                            }
                        </Field>
                    </Form.Group>
                    <Form.Group controlId="formCategory">
                        <Form.Label>Sort</Form.Label>
                        <Field
                            name="sort"
                            type="select"
                            component={ReduxFormControl}
                            as="select"
                        >
                            <option value="gems">Level</option>
                            <option value="gems">Alphabetical</option>
                        </Field>
                    </Form.Group>
                    <Button type="submit" variant="primary">Search</Button>
                </Form>
            </Jumbotron>
        );
    }
}

const mapStateToProps = state => ({ state });
export default compose(connect(mapStateToProps, { updateSearch }),
    reduxForm({ form: 'signin' })
)(SearchControls)
