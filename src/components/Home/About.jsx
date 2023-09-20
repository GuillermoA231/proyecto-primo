import React from 'react';
import { Card } from 'react-bootstrap';

function About() {
    return (
        <Card className="text-center">
            <Card.Header as="h2">About Us</Card.Header>
            <Card.Body>
                <Card.Text>
                    Our Milanesa Sandwiches have been delighting food lovers for over 20 years. Made with locally sourced ingredients and traditional recipes,
                    our sandwiches offer an authentic taste of our local cuisine. Join us on this delicious journey.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default About;
