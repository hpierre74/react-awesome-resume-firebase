import "semantic-ui-css/semantic.min.css";
import "semantic-ui-css/themes/default/assets/fonts/icons.ttf";

import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import Default from "./themes/default/main";
import Loading from "./components/loader.component";

import { getData } from "./firebase";
const themes = {
  default: Default
};

const Resume = ({ theme, jsonResume, inline }) => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    if (!resume) {
      getData("resume").then(savedResume => setResume(savedResume));
    }
  });

  const ThemedResume = themes[theme];
  return resume ? (
    <ThemedResume inline={inline} jsonResume={resume} />
  ) : (
    <Loading />
  );
};

Resume.defaultProps = {
  theme: "default",
  inline: false
};

Resume.propTypes = {
  theme: PropTypes.string,
  inline: PropTypes.bool
};

export default Resume;
