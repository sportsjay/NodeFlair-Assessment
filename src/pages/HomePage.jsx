import React from "react";

export default function HomePage() {
  return (
    <div style={styles.root}>
      <h1>Home</h1>
    </div>
  );
}

const styles = {
  root: {
    height: "90vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },
};
