import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

function Gallery() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="img1.jpg" /> {/* Replace with your image path */}
                <Card.Body>
                    <Card.Title>Classic Milanesa Sandwich</Card.Title>
                    <Card.Text>
                        Our classic sandwich with lettuce, tomato, and mayo.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="img2.jpg" /> {/* Replace with your image path */}
                <Card.Body>
                    <Card.Title>Spicy Milanesa Sandwich</Card.Title>
                    <Card.Text>
                        A spicy twist on our classic sandwich with jalapenos and spicy mayo.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="img3.jpg" /> {/* Replace with your image path */}
                <Card.Body>
                    <Card.Title>Cheesy Milanesa Sandwich</Card.Title>
                    <Card.Text>
                        Our milanesa sandwich loaded with melted cheese.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default Gallery;
