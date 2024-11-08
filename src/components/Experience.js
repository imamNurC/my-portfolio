import React from "react";
import JobList from "./JobList";

class Experience extends React.Component {
  render() {
    return (
      <section id="experience" className="py-20 bg-gray-900 text-white">
        <div id="experience">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="text-3xl font-semibold text-primary">
              Experiences
            </span>
          </div>

          {/* Job List (Slider) */}
          <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <JobList />
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
