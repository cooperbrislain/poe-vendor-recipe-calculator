import React, {Component, useState} from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import {getStashTab, signIn} from '../../actions';
import { Jumbotron, Form, Button } from 'react-bootstrap';
import { updateSearch, getChars } from '../../actions';
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

    updateSearchString = (e) => {
        console.log('SEARCHSTRING', e.target.value);
    };

    render() {
        const { inv, form } = this.props.state;
        const { filterCategory, search, chars } = inv;
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
                            value={search.params.string}
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
                            value={search.params.category}
                            component={ReduxFormControl}
                        >
                            <option value='all'>All</option>
                            { Object.keys(inv.categories).map((category, i) =>
                                <option value={category} key={i}>{category}</option>
                            ) }
                        </Field>
                    </Form.Group>

                    {!fields.category ? '' :
                        <Form.Group controlId="formSubCategory">
                            <Form.Label>Subcategory</Form.Label>
                            <Field
                                name="subcat"
                                type="select"
                                as="select"
                                value={search.params.subcat}
                                component={ReduxFormControl}
                            >
                                {Object.keys(inv.categories[fields.category].subcats).map((subcat, i) =>
                                    <option value={subcat} key={i}>{subcat}</option>
                                )}
                            </Field>
                        </Form.Group>
                    }

                    <Form.Group controlId="formLevelRange">
                        <Form.Label>Level Min</Form.Label>
                        <Form.Text>{fields.level_min}</Form.Text>
                        <Field
                            name="level_min"
                            type="range"
                            value={search.params.level_min||0}
                            onChange={this.adjustLevelMin}
                            component={ReduxFormControl} />
                        <Form.Label>Level Max</Form.Label>
                        <Form.Text>{fields.level_max}</Form.Text>
                        <Field
                            name="level_max"
                            type="range"
                            value={search.params.level_max||100}
                            onChange={this.adjustLevelMax}
                            component={ReduxFormControl} />
                    </Form.Group>

                    <Form.Group controlId="formCategory">
                        <Form.Label>Can be used by</Form.Label>
                        <Field
                            name="charCanUse"
                            type="select"
                            as="select"
                            value={search.params.canUse}
                            component={ReduxFormControl}
                        >
                            <option value=''> </option>
                            { chars.map((char, i) =>
                                <option value={char} key={i}>{char}</option>
                            ) }
                        </Field>
                    </Form.Group>

                    <hr />

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

                    <hr />

                    <Button type="submit" variant="primary">Search</Button>
                </Form>
            </Jumbotron>
        );
    }
}

const mapStateToProps = state => ({ state });
export default compose(
    connect(mapStateToProps, { updateSearch, getChars }),
    reduxForm({ form: 'invsearch' })
)(SearchControls)
