import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  nav: {
    width: "100%",
    color: "white",
    position: "fixed",
    zIndex: 1,
    top: 0,
  },
  container: {
    zIndex: 2,
    height: 56,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px 2px 3px 0px rgba(0,0,0,0.15)",
  },
  logo: {
    marginLeft: 20,
    height: 30,
    width: "auto",
  },
  links: {
    width: "30%",
    height: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    textDecorationColor: "black",
    fontWeight: "600",
    textAlign: "center",
  },
  drop_down_link: {
    height: 56,
    paddingLeft: 10,
    width: "100%",
    textDecoration: "none",
    textDecorationColor: "black",
  },
  menu_bar: {
    display: "none",
    backgroundColor: "white",
    borderWidth: 0,
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  drop_down: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
}));

function Link(props) {
  const [onHoverLink, setOnHoverLink] = useState(false);
  const classes = useStyles();
  return (
    <a
      href="#"
      className={classes.link}
      style={{ color: onHoverLink ? "#1FC76A" : "black" }}
      onMouseEnter={() => setOnHoverLink(true)}
      onMouseLeave={() => setOnHoverLink(false)}
    >
      {props.title}
    </a>
  );
}

function DropDownLink(props) {
  const [onHoverLink, setOnHoverLink] = useState(false);
  const classes = useStyles();
  return (
    <a
      href="#"
      className={classes.drop_down_link}
      style={{ color: onHoverLink ? "#1FC76A" : "black" }}
      onMouseEnter={() => setOnHoverLink(true)}
      onMouseLeave={() => setOnHoverLink(false)}
    >
      <h3>{props.title}</h3>
    </a>
  );
}

export default function NavBar() {
  const classes = useStyles();
  const [menuDropDown, setMenuDropDown] = useState(false);

  return (
    <React.Fragment>
      <nav className={classes.nav}>
        <div className={classes.container}>
          <img
            className={classes.logo}
            src="/assets/logo/nodeflair_horizontal-ba1df3d92a0a4ba2f466b2e7ed34360c3259f808ad36b42165feaafa6611c344.svg"
            alt="none"
          ></img>
          <span className={classes.links}>
            <Link title="Consult" />
            <Link title="Job" />
            <Link title="Blog" />
          </span>
          <React.Fragment>
            <button
              aria-label="menu"
              onClick={() => setMenuDropDown(!menuDropDown)}
              className={classes.menu_bar}
            >
              <MenuIcon />
            </button>
          </React.Fragment>
        </div>
        {menuDropDown ? (
          <span className={classes.drop_down}>
            <DropDownLink title="Consult" />
            <DropDownLink title="Job" />
            <DropDownLink title="Blog" />
          </span>
        ) : (
          <></>
        )}
      </nav>
    </React.Fragment>
  );
}
