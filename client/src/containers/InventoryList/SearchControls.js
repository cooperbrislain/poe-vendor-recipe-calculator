import React, {Component, useState} from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import {getStashTab, signIn} from '../../actions';
import { Jumbotron, Form, Button } from 'react-bootstrap';
import { updateSearch } from '../../actions';
import { Field, reduxForm } from "redux-form";
import ReduxFormControl from "../../components/ReduxFormControl";
// import styles from './index.css';

class SearchControls extends Component {
    componentDidMount = () => this.props.updateSearch;

    selectFilterCategory = (e) => {
        console.log('FILTER_CATEGORY', e.target.value);
    };

    selectSort = (e) => {
        console.log('FILTER_SORT', e.target.value);
    };

    onSubmit = formProps => {
        this.props.updateSearch(formProps, () => {});
        console.log('ONSUBMIT', formProps);
    };

    render() {
        const { inv } = this.props.state;
        const { filterCategory, search } = inv;
        const { handleSubmit } = this.props;
        // console.log('CATEGORIES', inv.categories);
        // console.log('CATEGORY', inv.category);
        return (
            <Jumbotron>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                    <Form.Group controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Field
                            name="category"
                            type="select"
                            as="select"
                            value={search.category}
                            component={ReduxFormControl}
                            onChange={this.selectFilterCategory}
                        >
                            <option value='all'>All</option>
                            { Object.keys(inv.categories).map((category, i) =>
                                <option value={category} key={i}>{category}</option>
                            ) }
                        </Field>
                    </Form.Group>
                    <Form.Group controlId="formCategory">
                        <Form.Label>Sort</Form.Label>
                        <Field
                            name="sort"
                            type="select"
                            as="select"
                            value={search.sort}
                            component={ReduxFormControl}
                            onChange={this.selectSort}
                        >
                            <option value="level">Level</option>
                            <option value="alpha">Alphabetical</option>
                        </Field>
                    </Form.Group>
                    <Button type="submit" variant="primary">Search</Button>
                </Form>
            </Jumbotron>
        );
    }
}

const mapStateToProps = state => ({ state });
export default compose(
    connect(mapStateToProps, { updateSearch }),
    reduxForm({ form: 'invsearch' })
)(SearchControls)
