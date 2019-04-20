import { Container, Segment } from "semantic-ui-react";
import React from "react";

import { locationType } from "../../resume.types";
import { spanTinyMargin } from "./styles";

const Location = ({ location }) => {
  return (
    <Container textAlign="center">
      <Segment style={{ margin: "30px auto" }}>
        <p style={spanTinyMargin}>
          {location.address}, {location.city},
        </p>
        <p style={spanTinyMargin}>
          {location.postalCode}, {location.region}, {location.countryCode}
        </p>
      </Segment>
    </Container>
  );
};

Location.defaultProps = {
  address: undefined,
  postalCode: undefined,
  city: undefined,
  countryCode: undefined,
  region: undefined
};

Location.propTypes = locationType;

export default Location;
