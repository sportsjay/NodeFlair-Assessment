import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";

// import image links
import images from "../components/taskTwo/image.link.json";

// import components
import Images from "../components/taskTwo/images";

function StyledButton(props) {
  const title = props.title;
  const active = props.active;
  return (
    <Button
      {...props}
      style={{
        borderRadius: 4,
        textTransform: "none",
        fontSize: 17,
        height: 40,
        minWidth: 80,
        width: 140,
        backgroundColor: active === title ? "#808080" : "#a3a3a3",
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      {title}
    </Button>
  );
}

export default function TaskTwo() {
  // Setup states for switching to mountain/bird images
  const [currentImages, setCurrentImages] = useState([]);
  const [currentActiveImage, setCurrentActiveImage] = useState("");
  const [refresh, setRefresh] = useState(false);

  // Set an on-mount feature which starts the page with mountain images
  useEffect(() => {
    setCurrentActiveImage("Mountain");
    setCurrentImages(images.mountains);
  }, [refresh]);

  return (
    <div style={styles.root}>
      {/* Setup button groups for different button options */}
      <h2>{currentActiveImage} Images</h2>
      <div style={styles.button_group}>
        <span
          onClick={() => {
            setCurrentActiveImage("Mountain");
            setCurrentImages(images.mountains);
          }}
        >
          <StyledButton title="Mountain" active={currentActiveImage} />
        </span>
        <span
          onClick={() => {
            setCurrentActiveImage("Bird");
            setCurrentImages(images.birds);
          }}
        >
          <StyledButton title="Bird" active={currentActiveImage} />
        </span>
        <span
          onClick={() => {
            setCurrentActiveImage("Sunrise");
            setCurrentImages([]);
          }}
        >
          <StyledButton title="Sunrise" active={currentActiveImage} />
        </span>
        <span
          onClick={() => {
            setCurrentActiveImage("Buildings");
            setCurrentImages([]);
          }}
        >
          <StyledButton title="Buildings" active={currentActiveImage} />
        </span>
      </div>
      <Images image_links={currentImages} />
    </div>
  );
}

const styles = {
  root: {
    boxSizing: "border-box",
    padding: "0px 20px",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  button_group: {
    width: "60%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
};
