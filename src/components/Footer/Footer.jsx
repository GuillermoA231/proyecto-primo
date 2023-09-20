import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <Container>
                <Row>
                    <Col>
                        <p>© {new Date().getFullYear()} Milanesa Sandwiches | All rights reserved | Terms Of Service | Privacy</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
