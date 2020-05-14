import React from 'react';
import { Container } from 'react-bootstrap';

export default ({ children }) => {
    return (
        <div>
            <Container>
                <main>
                    {children}
                </main>
            </Container>
        </div>
    );
};
