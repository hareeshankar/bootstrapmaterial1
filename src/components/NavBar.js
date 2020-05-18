import React from "react";
import { Navbar } from "react-bootstrap";
export default function Nav() {
  return (
    <div style={{ marginBottom: "10px" }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="./logo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Event Manager
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
