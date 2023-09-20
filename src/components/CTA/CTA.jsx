import React from 'react';
import { Container, Button } from 'react-bootstrap';

function CTA() {
  return (
    <Container className="text-center p-5">
      <h1>Ready to try the best milanesa sandwiches?</h1>
      <p>
        Place your order now and enjoy a taste of tradition, quality, and flavor.
      </p>
      <p>
        <Button variant="primary" href="#order">Order Now</Button>
      </p>
    </Container>
  );
}

export default CTA;
