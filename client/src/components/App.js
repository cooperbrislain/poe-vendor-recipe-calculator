import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserInfo from './UserInfo';
import { Card, Container, Navbar } from 'react-bootstrap';
import LoginForm from './LoginForm';
import CharacterList from '../containers/CharacterList';
import CharacterDetail from '../containers/Character/CharacterDetail';
import Stash from '../containers/Stash';
import InventoryList from '../containers/InventoryList';
import Header from './Header.js';

export default ({ children }) => {
    return (
        <>
            <Header />
            <Router>
                <Route exact path="/" render={ props => (
                    1?
                        <>
                            Welcome
                        </>
                    :
                        <>
                            <Container>
                                <main>
                                    <Card>
                                        <Card.Header>
                                            Login
                                        </Card.Header>
                                        <Card.Body>
                                            <LoginForm />
                                        </Card.Body>
                                    </Card>
                                </main>
                            </Container>
                        </>
                )} />
                <Route exact path="/stash" component={Stash} />
                <Route exact path="/chars" component={CharacterList} />
                <Route path="/chars/:charName" component={CharacterDetail} />
                <Route exact path="/inv" component={InventoryList} />
            </Router>
        </>
    );
};
