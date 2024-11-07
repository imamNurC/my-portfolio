import React from "react";
import JobSlider from "./JobSlider";

const JobList = () => {
  // Example job data (replace with your real data)
  const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
      company: "ABC Corp",
      duration: "Jan 2020 - Present",
      description:
        "Developed and maintained user interfaces using React.js and Redux, improving user experience and app performance.",
      technologies: ["React.js", "Redux", "JavaScript", "CSS"],
      achievements: [
        "Increased app performance by 20% through optimizations.",
        "Collaborated with a cross-functional team of 5 developers.",
      ],
    },
    {
      id: "2",
      title: "Software Engineer",
      company: "XYZ Ltd.",
      duration: "Mar 2018 - Dec 2019",
      description:
        "Worked on back-end development using Node.js and Express, integrated with MongoDB for data storage.",
      technologies: ["Node.js", "Express", "MongoDB", "JavaScript"],
      achievements: [
        "Built RESTful APIs that serve 1000+ active users.",
        "Reduced server response time by 15% through code refactoring.",
      ],
    },
    // Add more job entries here as needed
  ];

  return (
    <div className="space-y-6">
      <JobSlider jobs={jobs} />
    </div>
  );
};

export default JobList;
