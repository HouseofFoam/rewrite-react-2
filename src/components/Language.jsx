import React from "react";
function Language(props) {
  return (
    <div className="language-item">
      <div className="language-name">{props.name}</div>
      <img src={props.image} className="language-image" />
    </div>
  );
}

export default Language;
