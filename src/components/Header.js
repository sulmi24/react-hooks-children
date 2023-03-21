import React from "react";

function Header(props) {
  return (
    <div class="container">
      <h1>{props.header}</h1>
      <p>{props.description}</p>
    </div>
  );
}
