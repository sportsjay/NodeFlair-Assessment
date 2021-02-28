import React from "react";

export default function TaskThree() {
  return (
    <div style={styles.root}>
      <div style={styles.body}>
        <h2>3rd Solution:</h2>
        <h3>
          <u>Improve Web Traffic of NodeFlair Jobs</u>
        </h3>
        <p>
          One prominent suggestion would be to use{" "}
          <u>
            <i>Advertisement Services</i> from different platforms
          </u>
          .
          <p style={styles.tab}>
            Reasons and Implementations: {"\n"}
            <li>
              The Job feature is specifically for tech enthusiasts such as
              Software Developers/Engineers, Data Scientist, Systems
              Engineering, etc. By deploying advertisement to targetted
              audiences via different platforms such as{" "}
              <u>Youtube / Medium / Stack Overflow</u> to look for technical
              guidance via tutorial videos/community aids, this method can be
              made feasible and effective to attract and improve on the web
              traffic.
            </li>
            <li>
              Sourcing data may be the first problem to solve this issue. One
              solution can be through surveys. This may allow for more specific
              information to be gathered such as skill-specific roles, area of
              interest, and so on. Downside would be that not many people are
              keen on doing surveys.
            </li>
            <li>
              Utilizing different data analytic tools such as, Tableu, SciKit
              Learn, etc. this can be made feasible to target wider audiences by
              capturing large points of interest in specific software fields
              which are on the trend. After discovering these points of
              interest, then the next step would be to deploy adverts to the
              right platforms.
            </li>
            <li>
              I believe a good audience to start is those searching for early
              professional jobs. With the current Covid Situation, plenty fresh
              graduates and internship seekers are still on the lookout for
              opportunities. Advertising services provided in NodeFlair Jobs to
              mainstream programming community stated in the first point.
            </li>
          </p>
        </p>
      </div>
    </div>
  );
}

const styles = {
  root: {
    height: "90vh",
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
  tab: {
    paddingLeft: 20,
  },
};
