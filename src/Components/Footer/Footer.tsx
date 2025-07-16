import React from "react";
import { Container } from "react-bootstrap";

import { Messages } from "../../Utility/CommonMessages";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-4">
      <Container>
        <p className="mb-1">{Messages.footer.footerDescription.value}</p>
      </Container>
    </footer>
  );
};

export default Footer;
