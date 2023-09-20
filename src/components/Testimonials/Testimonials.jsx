import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

function Testimonials() {
    return (
        <CardGroup>
            <Card>
                <Card.Body>
                    <Card.Title>John Doe</Card.Title>
                    <Card.Text>
                        "These are the best milanesa sandwiches I've ever had! The ingredients are always fresh and the service is fantastic."
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Jane Smith</Card.Title>
                    <Card.Text>
                        "I can't get enough of these sandwiches. I recommend the spicy milanesa!"
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Bob Johnson</Card.Title>
                    <Card.Text>
                        "A must-try for any sandwich lover. The classic milanesa sandwich is my go-to."
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default Testimonials;
