import { Card, Icon, Grid } from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";
import ReactMarkdown from "react-markdown";
import shortid from "shortid";

import { CardHighlights } from "./generic";
import { bold, c, color, colors, emOneHalf, emTwo } from "./styles";
import { interestsType } from "../../resume.types";

const Interests = ({ interests }) => {
  return (
    <div style={{ textAlign: "left", width: "100%" }}>
      {interests.map(j => (
        <CardHighlights
          color={colors.green}
          key={shortid.generate()}
          title={
            <span style={c(emTwo, bold, color(colors.green))}>
              <Icon name="user circle outline" />
              {j.name}
            </span>
          }
          text={
            <InterestKeywords keywords={j.keywords} hColor={colors.green} />
          }
        />
      ))}
    </div>
  );
};

Interests.defaultProps = {
  interests: []
};

Interests.propTypes = interestsType;

export default Interests;

const InterestKeywords = ({ keywords, hColor }) => {
  return (
    <Grid columns="2">
      {keywords.map(k => (
        <Grid.Column key={shortid.generate()}>
          <Card fluid>
            <Card.Content
              header={
                <span style={c(emOneHalf, color(hColor))}>
                  <Icon name="thumbs up outline" />
                  {k.split(":")[0]}
                </span>
              }
            />
            <Card.Content
              description={<ReactMarkdown source={k.split(":")[1]} />}
            />
          </Card>
        </Grid.Column>
      ))}
    </Grid>
  );
};

InterestKeywords.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  hColor: PropTypes.string.isRequired
};
