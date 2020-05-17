import React from 'react';
import UserInfo from './UserInfo';
import { Container, Navbar } from 'react-bootstrap';

export default ({ children }) => {
    return (
        <div>
            <Navbar>
                <UserInfo />
            </Navbar>
            <Container>
                <main>
                    {children}
                </main>
            </Container>
        </div>
    );
};
