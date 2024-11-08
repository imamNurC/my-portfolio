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
        "Successfully Build dashboard operationals for Distribution Center part of WMS (Warehouse Management System). in the first 2 months",
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
        "Worked on Machine Learning Reasearch n development for Internal Company necessary, which is to accelerated automation proccess classifying audio in manufacturing defects. Research about collecting and compile datasets from scratch, including building ETL (Extract, Transform, Load) processes to prepare quality data.",
      technologies: [
        "Python Library(Scikit Learn, NumPy, Pandas)",
        "Jupyter Notebook",
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
      company: "Bangkit Academy By google, goto, Traveloka 2023",
      duration: "Aug 2023 - Jan 2024",
      description:
        "Worked on Study Independent completed within 6 months, part of Machine Learning Students cohort get experience how the real case ML in Company, pursue various certifications from google,Built Some Big Final capstone Machine Learning projects",
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
        "Completed 6 The foundations of machine learning Google Certifications during the activity",
        "Lead team capstone success to win top 10 proposal which is collab with company based(colab with Wowrack Indonesia)",
        "My team solving problems company issue about parking crowd uncontrollable with strategies to build Computer Visions Models leveraging IoT Camera then the results Counting of crowd in every Hour fed into analytics insight by data driven decision",
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
