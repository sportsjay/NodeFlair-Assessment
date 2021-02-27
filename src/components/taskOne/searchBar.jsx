import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    width: "90%",
    maxWidth: 1110,
    minHeight: "34vh",
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "20px 30px",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: "#c2c2c2",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: -15,
      marginRight: -15,
      padding: "15px 15px",
      borderRadius: 0,
      borderColor: "white",
    },
  },
  header: {
    marginBottom: 10,
    fontWeight: "700",
  },
  input: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 50,
  },
  text_input: {
    backgroundColor: "#e3e3e3",
    height: 50,
    borderRadius: 0,
    borderWidth: 0,
    margin: 0,
    width: "100%",
    fontSize: 16,
    fontWeight: "700",
    padding: "1px 2px 1px 15px",
  },
  button: {
    backgroundColor: "#1FC76A",
    height: 52,
    width: 52,
    borderWidth: 0,
    margin: 0,
  },
  filter: {
    fontWeight: "700",
    marginTop: 30,
  },
  filter_text: {
    marginBottom: 10,
  },
  job_tag: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  job_tag_component: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#1FC76A",
    backgroundColor: "#8eedb9",
    height: 30,
    margin: 5,
    borderRadius: 4,
    fontWeight: "600",
    padding: "4px 10px",
  },
  job_tag_icon: {
    width: 20,
    height: 20,
    backgroundColor: "#1FC76A",
    marginRight: 10,
    borderRadius: 10,
  },
}));

function JobFilterTag(props) {
  const classes = useStyles();
  return (
    <div className={classes.job_tag_component}>
      <span className={classes.job_tag_icon} />
      <span>{props.tag}</span>
    </div>
  );
}

const jobFilterTag = ["Seniority", "Specialization", "Tech Stack", "Company"];

export default function SearchBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        SELECT <span>*</span> FROM <span>TECH_JOB</span> WHERE
      </header>
      <div className={classes.input}>
        <input
          type="text"
          className={classes.text_input}
          placeholder="Try: Frontend, QA Engineer, React.js"
        ></input>
        <button className={classes.button}>
          <SearchIcon />
        </button>
      </div>
      <div className={classes.filter}>
        <span className={classes.filter_text}>FILTER BY...</span>
      </div>
      <div className={classes.job_tag}>
        {jobFilterTag.map((tag) => (
          <JobFilterTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}
