import React, { useState } from "react";

const JobItem = ({ job }) => {
  // States for collapsible sections
  const [showDescription, setShowDescription] = useState(false);
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showAchievements, setShowAchievements] = useState(false);

  return (
    <div className="bg-gray-700 p-6 mb-4 rounded-lg shadow-md hover:bg-gray-600 transition duration-300">
      {/* Job Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold text-white">
          {job.title} at{" "}
          <span className="font-medium text-indigo-400">{job.company}</span>
        </div>
        <div className="text-sm text-gray-400">{job.duration}</div>
      </div>

      {/* Description Section */}
      <div>
        <button
          className="text-indigo-400 text-sm font-semibold mb-2 block"
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "Hide Description" : "Show Description"}
        </button>
        {showDescription && <p className="text-gray-300">{job.description}</p>}
      </div>

      {/* Technologies Section */}
      <div className="mt-4">
        <button
          className="text-indigo-400 text-sm font-semibold mb-2 block"
          onClick={() => setShowTechnologies(!showTechnologies)}
        >
          {showTechnologies ? "Hide Technologies" : "Show Technologies"}
        </button>
        {showTechnologies && (
          <ul className="list-disc list-inside text-gray-400">
            {job.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Achievements Section */}
      <div className="mt-4">
        <button
          className="text-indigo-400 text-sm font-semibold mb-2 block"
          onClick={() => setShowAchievements(!showAchievements)}
        >
          {showAchievements ? "Hide Achievements" : "Show Achievements"}
        </button>
        {showAchievements && (
          <ul className="list-disc list-inside text-gray-400">
            {job.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default JobItem;
