import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

function PageContainer(props) {
  const classes = useStyles();
  const [hover, setHover] = useState(false);
  const image = props.image;
  const page_title = props.page_title;
  return (
    <div
      className={classes.image_container}
      style={
        hover
          ? {
              transition: "0.3s",
              transform: "translate(0px, -1px)",
              boxShadow: "0px 2px 4px 0px #525252",
            }
          : {
              transition: "0.3s",
              transform: "translate(0px, 1px)",
              boxShadow: "0px 0px",
            }
      }
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      {image.length > 0 ? (
        <img src={image} className={classes.image} alt="Task"></img>
      ) : (
        <h2 className={classes.image}>Coming Soon!</h2>
      )}
      <span className={classes.page_title}>Page: {page_title}</span>
    </div>
  );
}

export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <h2>Welcome to Jason Nathaniel's Task Solutions Application</h2>
        <p>
          This application provides the 3 solutions, each on their respective
          routes
        </p>
        <div className={classes.page_list}>
          <PageContainer
            image="/assets/home_page/Task1.PNG"
            page_title="Task 1"
          />
          <PageContainer
            image="/assets/home_page/Task2.PNG"
            page_title="Task 2"
          />
          <PageContainer
            image="/assets/home_page/Task3.PNG"
            page_title="Task 3"
          />
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "90vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    boxSizing: "border-box",
    width: "80%",
    minHeight: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  image: {
    margin: 0,
    borderRadius: 10,
    width: "100%",
    height: "auto",
  },
  image_container: {
    display: "flex",
    height: 300,
    flexDirection: "column",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    color: "#575757",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    width: "30%",
    minWidth: 200,
    [theme.breakpoints.down("sm")]: {
      width: "60%",
    },
  },
  page_list: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  page_title: {
    marginTop: 40,
    boxSizing: "border-box",
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    height: 40,
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
  },
}));
