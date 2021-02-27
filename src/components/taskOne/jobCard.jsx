import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  outer_card: {
    boxSizing: "border-box",
    width: "33.33%",
    padding: 10,
    height: "50vh",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 4,
    borderStyle: "solid",
    borderWidth: "thin",
    borderColor: "#bababa",
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "column",
    height: "70%",
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
      height: "60%",
      marginBottom: 10,
    },
  },
  img: {
    alignSelf: "center",
    maxWidth: 100,
    maxHeight: 100,
    marginBottom: 20,
  },
  job_info: {
    height: "33%",
  },
  company_name: {
    color: "#3a3a3a",
    marginBottom: 2,
  },
  position: {
    margin: 0,
  },
  misc: {
    display: "flex",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    margin: 0,
    marginTop: 4,
    backgroundColor: "#c9c9c9",
    borderWidth: 0,
  },
  posted: {
    color: "#838383",
    fontStyle: "italic",
    fontSize: "13.6px",
  },
  job_tech_stack: {
    minHeight: 40,
    maxHeight: 40,
    boxSizing: "border-box",
    paddingTop: 10,
    marginBottom: 10,
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  job_tech_stack_component: {
    maxWidth: "90%",
    color: "#838383",
    dispaly: "inline-block",
    backgrounRepeat: "no-repeat",
    backgroundColor: "#f1f1f1",
    height: 30,
    borderRadius: 4,
    fontWeight: "600",
    fontSize: "13.6px",
    padding: "5px 8px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  specialization: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#ddf7e9",
    color: "#1fc76a",
    height: 20,
    borderRadius: 4,
    fontWeight: "600",
    fontSize: "13.5px",
    padding: "5px 8px",
  },
}));

function JobTechStackTag(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <span className={classes.job_tech_stack_component}>{props.title}</span>
      {"\u00A0"}
    </React.Fragment>
  );
}

export default function JobCard(props) {
  const classes = useStyles();

  const [hover, setHover] = useState(false);

  const company_name = props.company_name;
  const image_source = props.image_source;
  const position = props.position;
  const posted = props.posted;
  const specialization = props.specialization;
  const tech_stack = props.tech_stack || [];
  return (
    <div className={classes.outer_card}>
      <div
        className={classes.card}
        style={
          hover
            ? {
                transition: "0.3s",
                transform: "translate(0px, -1px)",
                boxShadow: "0px 2px 4px 0px #c9c9c9",
                cursor: "pointer",
              }
            : {
                transition: "0.3s",
                transform: "translate(0px, 1px)",
                boxShadow: "0px 0px",
                cursor: "initial",
              }
        }
        onMouseEnter={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        <div className={classes.header}>
          <img src={image_source} alt="None" className={classes.img}></img>
          <div className={classes.job_info}>
            <span className={classes.company_name}>{company_name}</span>
            <h2 className={classes.position}>{position}</h2>
          </div>
        </div>
        <div className={classes.misc}>
          <span className={classes.posted}>{posted}</span>
          {specialization !== undefined ? (
            <span className={classes.specialization}>{specialization}</span>
          ) : (
            <></>
          )}
        </div>
        {tech_stack.length === 0 ? (
          <></>
        ) : (
          <React.Fragment>
            <hr className={classes.divider} />
            <div className={classes.job_tech_stack}>
              {tech_stack.map((tech) => (
                <JobTechStackTag title={tech} />
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
