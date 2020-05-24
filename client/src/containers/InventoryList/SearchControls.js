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

    adjustLevelMin = (e) => console.log('ADJUST LEVEL MIN', e.target.value);
    adjustLevelMax = (e) => console.log('ADJUST LEVEL MAX', e.target.value);

    selectSort = (e) => {
        console.log('FILTER_SORT', e.target.value);
    };

    onSubmit = formProps => {
        this.props.updateSearch(formProps, () => {});
        console.log('ONSUBMIT', formProps);
    };

    render() {
        const { inv, form } = this.props.state;
        const { filterCategory, search } = inv;
        const { handleSubmit } = this.props;
        const fields = form.invsearch? form.invsearch.values || 0 : {};

        // console.log('CATEGORIES', inv.categories);
        // console.log('CATEGORY', inv.category);
        return (
            <Jumbotron>
                <Form onSubmit={handleSubmit(this.onSubmit)}>

                    <Form.Group controlId="formCategory">
                        <Form.Label>Search</Form.Label>
                        <Field
                            name="string"
                            type="text"
                            value={search.string}
                            component={ReduxFormControl}
                            onChange={this.updateSearchString}
                        />
                    </Form.Group>

                    <Form.Group controlId="formCategory">
                        <Form.Label>Category</Form.Label>
                        <Field
                            name="category"
                            type="select"
                            as="select"
                            value={search.category}
                            component={ReduxFormControl}
                        >
                            <option value='all'>All</option>
                            { Object.keys(inv.categories).map((category, i) =>
                                <option value={category} key={i}>{category}</option>
                            ) }
                        </Field>
                    </Form.Group>

                    <Form.Group controlId="formLevelRange">
                        <Form.Label>Level Min</Form.Label>
                        <Form.Text>{fields.level_min}</Form.Text>
                        <Field
                            name="level_min"
                            type="range"
                            value={search.level_min||0}
                            onChange={this.adjustLevelMin}
                            component={ReduxFormControl} />
                        <Form.Label>Level Max</Form.Label>
                        <Form.Text>{fields.level_max}</Form.Text>
                        <Field
                            name="level_max"
                            type="range"
                            value={search.level_max||100}
                            onChange={this.adjustLevelMax}
                            component={ReduxFormControl} />
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
