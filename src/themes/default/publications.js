import { Icon, Header } from "semantic-ui-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import shortid from "shortid";

import { CardHighlights, ExtLink } from "./generic";
import { bold, c, color, colors, emOneTwo, emTwo, faded } from "./styles";
import { publicationsType } from "../../resume.types";

const Publications = ({ publications }) => {
  return (
    <div>
      <Header style={{ marginLeft: "20px", color: colors.orange }} as="h1">
        Publications
      </Header>
      {publications.map(j => (
        <CardHighlights
          color={colors.orange}
          key={shortid.generate()}
          title={
            <span style={c(emTwo, bold, color(colors.orange))}>
              <Icon name="newspaper" />
              <ExtLink
                ariaLabel="Visit the website"
                href={j.website}
                text={j.name}
                name={j.name}
                color={colors.orange}
              />
            </span>
          }
          subtitle={
            <span style={c(emOneTwo, color(colors.grey))}>
              <Icon name="calendar" />
              {j.releaseDate}
              <Icon name="pencil" style={{ marginLeft: "50px" }} />
              {`[${j.publisher}]`}
            </span>
          }
          text={
            <span style={c(emOneTwo, faded(colors.black))}>
              <ReactMarkdown source={j.summary} />
            </span>
          }
        />
      ))}
    </div>
  );
};

Publications.defaultProps = {
  publications: []
};

Publications.propTypes = { publicationsType };

export default Publications;
