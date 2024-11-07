import React, { useState } from "react";
import JobItem from "./jobItem";

const JobSlider = ({ jobs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous job
  const prevJob = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? jobs.length - 1 : prevIndex - 1
    );
  };

  // Go to next job
  const nextJob = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === jobs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      {/* Job Item */}
      <JobItem job={jobs[currentIndex]} />

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
        <button
          onClick={prevJob}
          className="bg-gray-300 p-2 rounded-full text-lg hover:bg-gray-400"
        >
          &lt;
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
        <button
          onClick={nextJob}
          className="bg-gray-300 p-2 rounded-full text-lg hover:bg-gray-400"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default JobSlider;
