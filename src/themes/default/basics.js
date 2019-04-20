import { Grid, Header, Image } from "semantic-ui-react";
import React from "react";

import { Contact } from "./generic";
import { basicsType } from "../../resume.types";
import Profiles from "./profiles";
import Skills from "./skills";
import Education from "./education";
import Work from "./work";
import Languages from "./languages";
import Interests from "./interests";
import Location from "./location";
import { sectionMargins } from "./styles";

const Basics = ({
  name,
  label,
  picture,
  email,
  phone,
  website,
  location,
  summary,
  profiles,
  skills,
  work,
  education,
  interests,
  languages
}) => {
  return (
    <Grid centered stackable>
      <Grid.Row>
        <Grid.Column textAlign="center" width={8}>
          <Header style={{ fontSize: "50px" }}>{name}</Header>
          <Profiles profiles={profiles} />
          <Header color="grey" size="large">
            {label}
          </Header>
          <Header color="grey" style={{ marginTop: "0px" }}>
            {summary}
          </Header>
          <Contact phone={phone} email={email} website={website} />
        </Grid.Column>
        <Grid.Column width={5}>
          <Image
            src={picture}
            shape="circular"
            centered
            fluid
            style={{ border: "10px solid rgba(0,0,0,.05)" }}
          />
          <Location location={location} />
        </Grid.Column>
      </Grid.Row>
      <Skills skills={skills} />
      <Grid.Row style={sectionMargins}>
        <Work work={work} />
      </Grid.Row>
      <Grid.Row style={sectionMargins}>
        <Education education={education} />
      </Grid.Row>
      <Grid.Row style={sectionMargins}>
        <Languages languages={languages} />
      </Grid.Row>
      <Grid.Row style={sectionMargins}>
        <Interests interests={interests} />
      </Grid.Row>
    </Grid>
  );
};

Basics.defaultProps = {
  name: null,
  label: null,
  picture: null,
  phone: null,
  website: null,
  location: {},
  profiles: {}
};

Basics.propTypes = basicsType;

export default Basics;
