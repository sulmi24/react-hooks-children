import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
      </Container>
      <Container header="Example header" textPosition="center">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
      <Container
        header="Example header"
        direction="vertical"
        textPosition="right"
      >
        <div>This is an example in has the text position to right!</div>
      </Container>
      <Container
        header="Example header"
        direction="vertical"
        contentPosition="left"
      >
        <div>This is an example in has the content position to left!</div>
      </Container>
    </div>
  );
}

export default App;
