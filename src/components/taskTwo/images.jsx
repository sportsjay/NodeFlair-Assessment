import React from "react";

function Image(props) {
  const image_link = props.image_link;

  return (
    <div style={styles.image_container}>
      <img style={styles.image} src={image_link} alt="None"></img>
    </div>
  );
}

export default function Images(props) {
  const images = props.image_links || [];
  return (
    <div style={styles.root}>
      {images.length > 0 ? (
        images.map((image) => <Image image_link={image.link} key={image.key} />)
      ) : (
        <h2>No image found at the moment! Sorry :(</h2>
      )}
    </div>
  );
}

const styles = {
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  image_container: {
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    height: 300,
    maxHeight: 400,
    width: "auto",
  },
};
