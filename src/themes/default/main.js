import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { Container, Icon, Responsive, Menu, Sidebar } from "semantic-ui-react";

import { resumeType } from "../../resume.types";
import Loading from "../../components/loader.component";

const Awards = lazy(() => import("./awards"));
const Basics = lazy(() => import("./basics"));
const Education = lazy(() => import("./education"));
const Interests = lazy(() => import("./interests"));
const Languages = lazy(() => import("./languages"));
const Publications = lazy(() => import("./publications"));
const References = lazy(() => import("./references"));
const Volunteer = lazy(() => import("./volunteer"));
const Work = lazy(() => import("./work"));

const ResumeMenuItem = ({ title, active, element, show, onClick }) => {
  if (!show) {
    return false;
  }

  if (element) {
    return (
      <Menu.Item
        header
        name="Avatar"
        onClick={() => {
          onClick(title);
        }}
        active={active}
        content={element}
      />
    );
  }

  return (
    <Menu.Item
      name={title}
      header
      onClick={() => {
        onClick(title);
      }}
      active={active}
    />
  );
};

ResumeMenuItem.defaultProps = {
  element: null
};

ResumeMenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  element: PropTypes.element,
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

class DefaultResume extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activePage: "home", visible: false };
  }

  toggleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleMenuClick = name => {
    this.setState({
      activePage: name.toLowerCase()
    });
  };

  makeInvisible = () => {
    this.setState({ visible: false });
  };

  render() {
    const { jsonResume } = this.props;

    if (!jsonResume) {
      return null;
    }
    const content = {
      home: (
        <Basics
          {...{
            ...jsonResume.basics,
            skills: jsonResume.skills,
            work: jsonResume.work,
            education: jsonResume.education,
            languages: jsonResume.languages,
            interests: jsonResume.interests
          }}
        />
      ),
      work: <Work work={jsonResume.work} />,
      education: <Education education={jsonResume.education} />,
      volunteer: <Volunteer volunteer={jsonResume.volunteer} />,
      publications: <Publications publications={jsonResume.publications} />,
      references: <References references={jsonResume.references} />,
      awards: <Awards awards={jsonResume.awards} />,
      languages: <Languages languages={jsonResume.languages} />,
      interests: <Interests interests={jsonResume.interests} />
    };

    const MenuItems = [
      {
        title: "Home",
        show: true,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "Home"
      },
      {
        title: "Work",
        show: !!jsonResume.work,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "Work"
      },
      {
        title: "Education",
        show: !!jsonResume.education,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "Education"
      },
      {
        title: "Volunteer",
        show: !!jsonResume.volunteer,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "Volunteer"
      },
      {
        title: "Publications",
        show: !!jsonResume.publications,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "Publications"
      },
      {
        title: "References",
        show: !!jsonResume.references,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "References"
      },
      {
        title: "Awards",
        show: !!jsonResume.awards,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "Awards"
      },
      {
        title: "Languages",
        show: !!jsonResume.languages,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "Languages"
      },
      {
        title: "Interests",
        show: !!jsonResume.interests,
        onClick: this.handleMenuClick,
        active: this.state.activePage === "Interests"
      }
    ];

    const Content = (
      <Suspense fallback={<Loading />}>
        <Container>{content[this.state.activePage]}</Container>
      </Suspense>
    );

    const Full = (
      <div>
        <Menu fluid widths={9} fixed="top" stackable>
          {MenuItems.map(m => (
            <ResumeMenuItem
              title={m.title}
              element={m.element}
              show={m.show}
              onClick={m.onClick}
              active={m.active}
              key={shortid.generate()}
            />
          ))}
        </Menu>
        <div style={{ marginTop: "110px" }}>{Content}</div>
      </div>
    );

    const Mobile = (
      <div>
        <Menu fixed="top" borderless size="massive">
          <Menu.Item>
            <Icon name="bars" onClick={this.toggleVisible} />
          </Menu.Item>
        </Menu>
        <Sidebar.Pushable onClick={this.makeInvisible}>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            visible={this.state.visible}
            icon="labeled"
            vertical
            inverted
          >
            <div style={{ marginTop: "54px" }}>
              {MenuItems.map(m => (
                <ResumeMenuItem
                  title={m.title}
                  element={m.element}
                  show={m.show}
                  onClick={m.onClick}
                  active={m.active}
                  key={shortid.generate()}
                />
              ))}
            </div>
          </Sidebar>
          <Sidebar.Pusher style={{ marginTop: "60px" }}>
            {Content}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>{Mobile}</Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          {this.props.inline ? (
            <div>
              <Menu widths={9} secondary>
                {MenuItems.map(m => (
                  <ResumeMenuItem
                    title={m.title}
                    element={m.element}
                    show={m.show}
                    onClick={m.onClick}
                    active={m.active}
                    key={shortid.generate()}
                  />
                ))}
              </Menu>
              <div>{Content}</div>
            </div>
          ) : (
            Full
          )}
        </Responsive>
      </div>
    );
  }
}

DefaultResume.defaultProps = {
  jsonResume: null
};

DefaultResume.propTypes = {
  jsonResume: resumeType,
  inline: PropTypes.bool.isRequired
};

export default DefaultResume;
