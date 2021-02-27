import React from "react";
import { makeStyles } from "@material-ui/core";

// import components
import NavBar from "../components/taskOne/navbar";
import SearchBar from "../components/taskOne/searchBar";
import JobCard from "../components/taskOne/jobCard";

// import images
const google_img = "/assets/job_image/Google.png";
const amazon_img = "/assets/job_image/Amazon.png";
const ibm_img = "/assets/job_image/ibm.png";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  background_top: {
    height: "380px",
    width: "100%",
    background: "#1FC76A",
    position: "absolute",
    top: "0",
    zIndex: -1,
  },
  container: {
    boxSizing: "border-box",
    width: "90%",
    maxWidth: 1110,
    alignSelf: "center",
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 100,
    marginBottom: 30,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  title: {
    color: "white",
    fontWeight: "600",
    margin: 0,
  },
  title_job: {
    color: "#FFE03C",
  },
  description: {
    color: "white",
    marginTop: 10,
  },
  jobs_listing: {
    marginTop: 30,
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    maxWidth: 1130,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));

const jobsList = [
  {
    company_name: "Google",
    image_source: google_img,
    position: "Software Engineer",
    specialization: "Backend",
    posted: "15 days ago",
    tech_stack: ["C++", "Java", "Flask", "SQL", "Kafka"],
  },
  {
    company_name: "Google",
    image_source: google_img,
    position: "Software Engineer",
    specialization: "Backend",
    posted: "about 1 month ago",
    tech_stack: ["C++", "Python", "REST", "SQL", "Django"],
  },
  {
    company_name: "Amazon",
    image_source: amazon_img,
    position: "Java Developer",
    specialization: "Backend",
    posted: "16 days ago",
    tech_stack: [
      "Java",
      "Spring",
      "No-SQL",
      "SQL",
      "Gradle",
      "Postgres",
      "Maven",
    ],
  },
  {
    company_name: "Amazon",
    image_source: amazon_img,
    specialization: "Backend",
    position: "Software Engineer",
    posted: "25 days ago",
  },
  {
    company_name: "IBM",
    image_source: ibm_img,
    position: "Software Engineer",
    posted: "5 days ago",
  },
];

export default function TaskOne() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.background_top} />
      <header className={classes.container}>
        <h1 className={classes.title}>
          NodeFlair.<span className={classes.title_job}>Jobs</span>
        </h1>
        <div className={classes.description}>
          Aggregated job listings from popular job sites and career pages
        </div>
      </header>
      <SearchBar />
      <section className={classes.jobs_listing}>
        <span style={{ width: "100%", paddingLeft: 20 }}>
          <h3>{jobsList.length} jobs</h3>
        </span>
        {jobsList.map((job) => (
          <JobCard
            company_name={job.company_name}
            position={job.position}
            image_source={job.image_source}
            specialization={job.specialization}
            posted={job.posted}
            tech_stack={job.tech_stack}
          />
        ))}
      </section>
    </div>
  );
}
