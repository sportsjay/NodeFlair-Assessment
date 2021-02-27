import React, { useState } from "react";

function PageContainer(props) {
  const [hover, setHover] = useState(false);
  const image = props.image;
  const page_title = props.page_title;
  return (
    <div
      style={
        hover
          ? {
              borderRadius: 10,
              width: "30%",
              minWidth: 200,
              transition: "0.3s",
              transform: "translate(0px, -1px)",
              boxShadow: "0px 2px 4px 0px #525252",
            }
          : {
              borderRadius: 10,
              width: "30%",
              minWidth: 200,
              transition: "0.3s",
              transform: "translate(0px, 1px)",
              boxShadow: "0px 0px",
            }
      }
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <div style={styles.image_container}>
        {image.length > 0 ? (
          <img src={image} style={styles.image} alt="Task"></img>
        ) : (
          <h2 style={styles.image}>Coming Soon!</h2>
        )}
        <span style={styles.page_title}>Page: {page_title}</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div style={styles.root}>
      <div style={styles.body}>
        <h2>Welcome to Jason Nathaniel's Task Solutions Application</h2>
        <p>
          This application provides the 3 solutions, each on their respective
          routes
        </p>
        <div style={styles.page_list}>
          <PageContainer
            image="/assets/home_page/Task1.PNG"
            page_title="Task 1"
          />
          <PageContainer
            image="/assets/home_page/Task2.PNG"
            page_title="Task 2"
          />
          <PageContainer image="" page_title="Task 3" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    height: "90vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    boxSizing: "border-box",
    width: "80%",
    height: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  image: {
    margin: 0,
    borderRadius: 10,
    minWidth: "auto",
    height: 130,
  },
  image_container: {
    display: "flex",
    height: 300,
    flexDirection: "column",
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    color: "#575757",
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
  },
  page_list: {
    display: "flex",
    justifyContent: "space-evenly",
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
};
