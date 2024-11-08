import React from "react";
import JobSlider from "./JobSlider";

const JobList = () => {
  // Example job data (replace with your real data)
  const jobs = [
    {
      id: "1",
      title: "IT Business Solutions",
      company: "Samudera Indonesia (MKT)",
      duration: "jul 2024 - Sept 2024",
      description:
        "I'm Freelancer to Developed and maintained Full Stack Development for Internal business necessary using Laravel and JavaScript, improving Query backend app performance also User Interface using Bootstrap Library.",
      technologies: [
        "Laravel",
        "PHP",
        "SQL",
        "CSS/HTML/Bootstrap",
        "JavaScript/ajax/jQuery",
        "Github",
      ],
      achievements: [
        "Successfully Build dashboard operationals for Distribution Center part of WMS (Warehouse Management System).",
        "Launching a Massive Automation with Pallet Scanner which is still running in Export centers until now",
        "Collaborated with senior mentors profesional teams of 3 developers.",
      ],
    },
    {
      id: "2",
      title: "RnD Machine Learning Internship",
      company: "PT.Denso Manufacturing Indonesia",
      duration: "Jan 2024 - May 2024",
      description:
        "Worked on Machine Learning Reasearch n development for Internal Company necessary, which is to accelerated automation proccess classifying audio in manufacturing defects ",
      technologies: [
        "Python Library(Scikit Learn, NumPy, Pandas)",
        "TensorFlow",
        "Hardware Intel Nuc High performance",
      ],
      achievements: [
        "Built ML algorithm models to detect and classify binary sounds with > 90% accuracy",
        "My team Winning 1st as Top Innovation Products using new technology",
      ],
    },
    {
      id: "3",
      title: "Backend Developer Junior",
      company: "PT. Sinergi merah putih",
      duration: "Jun 2023 - Jan 2024",
      description:
        "Junior freelancer Part of backend teams whice are developed Human Resource System Massive web application",
      technologies: [
        "ExpressJs/NodeJs",
        "JavaScript",
        "PostgreSQL",
        "Insomnia (Rest API)",
        "Github",
        "Sequelize ORM",
      ],
      achievements: [
        "Built complex database from scratch about > 20 Tables",
        "about 75% backend features successfuly integrate with frontend app",
      ],
    },
    {
      id: "4",
      title: "Machine Learning Student",
      company: "Bangkit Academy 2023",
      duration: "Aug 2023 - Jan 2024",
      description:
        "Part of backend teams whice are developed Human Resource System Massive web application",
      technologies: [
        "TensorFlow",
        "Python + Google Colab",
        "PHP Laravel",
        "Docker Container",
        "Google Cloud Platform",
        "Flask",
        "MySQL",
        "Postman",
        "YoLo + OpenCV Computer Vision",
      ],
      achievements: [
        "Built complex database from scratch about > 40 Tables",
        "about 75% backend features successfuly integrate with frontend app",
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
