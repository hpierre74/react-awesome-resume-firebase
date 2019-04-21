import { Icon, Header, Grid } from "semantic-ui-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import shortid from "shortid";

import { ButtonHighlights, CardHighlights, ExtLink } from "./generic";
import { bold, c, color, colors, emOneTwo, emTwo, faded } from "./styles";
import { workType } from "../../resume.types";

const Work = ({ work }) => {
  return (
    <div style={{ textAlign: "left", width: "100%" }}>
      <Header style={{ marginLeft: "20px", color: colors.green }} as="h1">
        Work
      </Header>
      {work.map(job => (
        <CardHighlights
          color={colors.green}
          key={shortid.generate()}
          title={
            <span style={c(emTwo, bold, faded(colors.green))}>
              <Icon name="building outline" margin="10" />
              {job.website ? (
                <ExtLink
                  ariaLabel="Visit the company website"
                  name={job.company}
                  href={job.website}
                  text={job.company}
                  color={colors.green}
                />
              ) : (
                job.company
              )}
            </span>
          }
          subtitle={
            <span style={c(emOneTwo, color(colors.grey), bold)}>
              <Grid columns="3">
                <Grid.Column textAlign="left">
                  <Icon name="user" />
                  {job.position}
                </Grid.Column>
                <Grid.Column textAlign="center">
                  <Icon name="calendar" />
                  {`${job.startDate} - ${job.endDate}`}
                </Grid.Column>
                {job.current && (
                  <Grid.Column textAlign="right">
                    <Icon name="coffee" />
                    Currently
                  </Grid.Column>
                )}
              </Grid>
            </span>
          }
          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown source={job.summary} />
            </span>
          }
          highlights={
            <ButtonHighlights
              icon="check"
              highlights={job.highlights}
              color="green"
            />
          }
        />
      ))}
    </div>
  );
};

Work.defaultProps = {
  work: []
};

Work.propTypes = {
  work: workType
};

export default Work;
