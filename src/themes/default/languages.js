import React from "react";
import shortid from "shortid";
import { Icon, Grid, Header } from "semantic-ui-react";

import { CardHighlights } from "./generic";
import { bold, c, color, colors, emOneTwo, emTwo } from "./styles";
import { languagesType } from "../../resume.types";

const Languages = ({ languages }) => {
  return (
    <div style={{ textAlign: "left", width: "100%", margin: "1em" }}>
      <Header style={{ color: colors.teal }} as="h1">
        Languages
      </Header>
      <Grid
        columns="2"
        style={{ padding: 0, textAlign: "left", width: "100%" }}
      >
        {languages.map(j => (
          <Grid.Column style={{ paddingLeft: 0 }} key={shortid.generate()}>
            <CardHighlights
              color={colors.teal}
              title={
                <span style={c(emTwo, bold, color(colors.teal))}>
                  <Icon name="globe" />
                  {j.name}
                </span>
              }
              subtitle={
                <span style={c(emOneTwo, color(colors.grey))}>
                  <Icon name="users" />
                  {j.level}
                </span>
              }
            />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

Languages.defaultProps = {
  languages: []
};

Languages.propTypes = languagesType;

export default Languages;
