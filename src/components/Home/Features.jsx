import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Features.css';  // Assuming you have a CSS file named Features.css in the same directory

function Features() {
    return (
        <div className="app">
            <CardGroup>
                <Card className="custom-card text-center">
                    <Card.Body>
                        <Card.Title>Calidad Premium</Card.Title>
                        <Card.Text>
                            Nuestros sándwiches están hechos con carne de la más alta calidad, empanizados y fritos a la perfección.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="custom-card text-center">
                    <Card.Body>
                        <Card.Title>Fuente Local</Card.Title>
                        <Card.Text>
                            Obtenemos nuestros ingredientes de agricultores locales para garantizar la frescura y apoyar a nuestra comunidad.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="custom-card text-center">
                    <Card.Body>
                        <Card.Title>Deliciosos Aderezos</Card.Title>
                        <Card.Text>
                            Cada sándwich viene con una variedad de aderezos para elegir, haciendo que cada bocado sea una experiencia única.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Features;
