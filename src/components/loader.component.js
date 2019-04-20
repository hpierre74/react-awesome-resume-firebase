import React from "react";
import { Container, Dimmer, Loader } from "semantic-ui-react";

const Loading = () => {
  return (
    <Container>
      <Dimmer inverted active>
        <Loader inverted>Loading</Loader>
      </Dimmer>
    </Container>
  );
};

export default Loading;
