import { Button, Icon, Segment } from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";
import shortid from "shortid";

import { colors, hexToRgb } from "./styles";

export const Mailto = ({ email }) => {
  return <a href={`mailto:${email}`}>{email}</a>;
};

Mailto.propTypes = {
  email: PropTypes.string.isRequired
};

export const ButtonHighlights = ({ icon, highlights, color }) => {
  return (
    <span>
      {highlights.map(h => (
        <Button
          key={shortid.generate()}
          style={{ margin: "3px" }}
          color={color}
          size="small"
        >
          <strong>
            <Icon name={icon} />
            {h}
          </strong>
        </Button>
      ))}
    </span>
  );
};

ButtonHighlights.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired
};

export const CardHighlights = ({
  color,
  title,
  subtitle,
  text,
  highlights
}) => {
  return (
    <div
      style={{
        borderLeft: `5px solid rgba(${hexToRgb(color)},.5)`,
        padding: "0px 0px 0px 20px",
        margin: "0px 0px 20px 0px"
      }}
    >
      {title && <Segment vertical>{title}</Segment>}
      {subtitle && <Segment vertical>{subtitle}</Segment>}
      {text && <Segment vertical>{text}</Segment>}
      {highlights && <Segment vertical>{highlights}</Segment>}
    </div>
  );
};

CardHighlights.defaultProps = {
  title: null,
  subtitle: null,
  text: null,
  highlights: null
};

CardHighlights.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.element,
  subtitle: PropTypes.element,
  text: PropTypes.element,
  highlights: PropTypes.element
};

export const Contact = ({ phone, email, website }) => {
  return (
    <div>
      {phone && (
        <Button
          style={{ margin: "10px" }}
          size="tiny"
          icon="phone"
          content={phone}
        />
      )}
      {email && (
        <ExtLink
          ariaLabel="send a mail to this person"
          name="email"
          style={{ margin: "10px" }}
          href={`mailto:${email}`}
          text={
            <Button
              style={{ margin: "10px" }}
              size="tiny"
              icon="mail"
              content={email}
            />
          }
          color={colors.grey}
        />
      )}
      {website && (
        <ExtLink
          ariaLabel="visit the website of this person"
          name="phone"
          style={{ margin: "10px" }}
          href={website}
          text={
            <Button
              style={{ margin: "10px" }}
              size="tiny"
              icon="computer"
              content={website}
            />
          }
          color={colors.grey}
        />
      )}
    </div>
  );
};

Contact.defaultProps = {
  phone: null,
  email: null,
  website: null
};

Contact.propTypes = {
  phone: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string
};

export class ExtLink extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    ariaLabel: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    color: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { hover: false };
  }

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    let linkStyle = { color: this.props.color };
    if (this.state.hover) {
      linkStyle = { color: `rgba(${hexToRgb(this.props.color)}, .6)` };
    }

    return (
      <a
        name={this.props.name}
        aria-label={this.props.ariaLabel}
        href={this.props.href}
        style={linkStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
      >
        {this.props.text}
      </a>
    );
  }
}
