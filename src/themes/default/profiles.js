import { Container, Icon } from "semantic-ui-react";
import React from "react";
import shortid from "shortid";

import { ExtLink } from "./generic";
import { colors, topBottomMargin } from "./styles";
import { profileType } from "../../resume.types";

const Profiles = ({ profiles }) => {
  return (
    <Container
      style={{ ...topBottomMargin, display: "flex", justifyContent: "center" }}
      textAlign="center"
    >
      {profiles.map(p => (
        <ExtLink
          ariaLabel={`Visit this person's ${p.network}`}
          name={p.network}
          key={shortid.generate()}
          href={p.url}
          text={<Icon size="huge" name={p.network.toLowerCase()} link />}
          color={colors.darkGrey}
        />
      ))}
    </Container>
  );
};

Profiles.defaultProps = {
  profiles: []
};

Profiles.propTypes = profileType;

export default Profiles;
