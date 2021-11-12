import React from "react";

const Section = (props) => {
  return (
    <div className={`l-section ${props.className}`}>
      <div className="l-container">{props.children}</div>
    </div>
  );
};

export const SectionTitle = (props) => {
  return (
    <div className="l-section__title">
      <h3 className="c-ttl01">{props.children}</h3>
    </div>
  );
};

export const SectionBody = (props) => {
  return <div className="l-section__main">{props.children}</div>;
};

export default Section;
