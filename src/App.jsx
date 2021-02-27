import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import TaskOne from "./pages/TaskOne";
import TaskTwo from "./pages/TaskTwo";

function StyledLink(props) {
  const setNavLocation = props.SetNavLocation;
  const to = props.to;
  const navLocation = props.navLocation;
  const location = props.location;

  return (
    <Link
      to={to}
      onClick={() => setNavLocation("Home")}
      style={{
        ...styles.nav.link,
        color: navLocation === location ? "#575c75" : "black",
      }}
    >
      {location}
    </Link>
  );
}

export default function App() {
  const [navLocation, setNavLocation] = useState("Home");
  const [hiddenNav, setHiddenNav] = useState(false);

  return (
    <Router>
      {hiddenNav ? (
        <></>
      ) : (
        <nav style={styles.nav.root}>
          <h2>{navLocation}</h2>
          <span style={styles.nav.links}>
            <Link
              to="/"
              onClick={() => setNavLocation("Home")}
              style={{
                ...styles.nav.link,
                color: navLocation === "Home" ? "#575c75" : "black",
              }}
            >
              Home
            </Link>
            <Link
              to="/task-1"
              onClick={() => setNavLocation("Task 1")}
              style={{
                ...styles.nav.link,
                color: navLocation === "Task 1" ? "#575c75" : "black",
              }}
            >
              Task 1
            </Link>
            <Link
              to="/task-2"
              onClick={() => setNavLocation("Task 2")}
              style={{
                ...styles.nav.link,
                color: navLocation === "Task 2" ? "#575c75" : "black",
              }}
            >
              Task 2
            </Link>
          </span>
        </nav>
      )}
      <div
        style={styles.hide_nav_button}
        onClick={() => setHiddenNav(!hiddenNav)}
      >
        {hiddenNav ? "Unhide\nNavbar" : "Hide\nNavbar"}
      </div>
      <Switch>
        <Route path="/" exact component={() => <HomePage />} />
        <Route path="/task-1" exact component={() => <TaskOne />} />
        <Route path="/task-2" exact component={() => <TaskTwo />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}

const styles = {
  nav: {
    root: {
      position: "fixed",
      backgroundColor: "#adadad",
      bottom: 0,
      height: "10vh",
      width: "100vw",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      zIndex: 2,
    },
    links: {
      height: "100%",
      width: "50%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "inherit",
    },
    link: {
      color: "black",
      textDecoration: "none",
    },
  },
  hide_nav_button: {
    position: "fixed",
    top: "20vh",
    right: 0,
    backgroundColor: "#636363",
    writingMode: "vertical-rl",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    transform: "rotate(180deg)",
    color: "white",
    width: 40,
    height: 80,
    textAlign: "center",
    zIndex: 2,
  },
};
