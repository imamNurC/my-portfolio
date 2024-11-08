function Projects() {
  const projects = [
    {
      title: "LMS Student Startup",
      description:
        "helping Student Contribute Volunteer to get new experiences about Software Development and Building a video learning platforms to provide knowledge from another resource",
      github: "https://github.com/imamNurC/ubslearning",
      live: "",
    },
    {
      title: "Generative LLM google gemini API",
      description:
        "Text Generation Like chat-gpt to ask anything leveraging API google gemini models multimodal which is deployed on google cloud",
      github: "https://github.com/imamNurC/gemini-llm-GDGjakarta2024",
      live: "https://deploy-gemini-llm-seaasw6rba-uw.a.run.app/",
    },
    {
      title: "Anime Recommender System",
      description:
        "A recommendation system for anime lovers. Using approach Content Based Filtering and Collaborative Filtering pop the top-N similiatity genre anime list",
      github:
        "https://github.com/imamNurC/Notebook-Research/tree/main/RecommenderSystem",
      live: "", // No live demo for this project
    },
    {
      title: "Indonesian Nutrition Food",
      description:
        "Implements Models to predict nutrition food based calories from dataset list of Food and drink at indonesian",
      github:
        "https://github.com/imamNurC/Notebook-Research/tree/main/IndoNutriFood",
      live: "", // No live demo for this project
    },
    {
      title: "Air Quality Data analysis",
      description:
        "project about analysis of Air Speed ​​and Direction Tendency in Wanliu City in 2013 using Python and Streamlit to design friendly user interface Csv data",
      github: "https://github.com/imamNurC/PyStreamlit",
      live: "https://imamnurc-pystreamlit-dashboarddashboard-cgof85.streamlit.app/", // No live demo for this project
    },
    {
      title: "Web API",
      description:
        "Implement new tools and technologies with an understanding of software engineer workflow Using C# and .NET core Framework for proof Some complex proccess CRUD development write clean OOP code implementing testing and building APIs using RESTFUL at PostgreSQL database",
      github: "https://github.com/imamNurC/customer-API",
      live: "", // No live demo for this project
    },
    {
      title: "Movie Reference",
      description:
        "A reference tool for movie enthusiasts helping to find Reference trailer, new, popular, and good ratings movies through utilize public API The Movies  Database ( TMDB )",
      github: "",
      live: "https://perpustakaan-film.netlify.app/",
    },
    {
      title: "Ticketing Reservation System (PHP Native)",
      description:
        "Build a tour ticket reservation project using native PHP: PHP, HTML and CSS with Database Management Using MySQL then Integrating data with users and ensuring the quality and functionality of the entire project.",
      github: "https://github.com/imamNurC/maskapai-penerbangan-webApp", // No GitHub for this project
      live: "", // No live demo for this project
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-purple-900 text-white"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-primary bg-clip-text bg-gradient-to-r">
          Projects
        </h2>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              {/* Conditionally render GitHub Link */}
              {project.github ? (
                <a
                  href={project.github}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-800 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.111.82-.26.82-.578 0-.286-.01-1.044-.015-2.05-3.338.726-4.042-1.614-4.042-1.614-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.42-1.304.763-1.604-2.665-.3-5.466-1.333-5.466-5.932 0-1.31.467-2.38 1.236-3.22-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.474 11.474 0 013.003-.404c1.018.004 2.045.138 3.003.404 2.292-1.554 3.3-1.23 3.3-1.23.654 1.653.243 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.628-5.475 5.92.431.371.815 1.102.815 2.22 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.577C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-300 rounded-full">
                  GitHub Not Available
                </span>
              )}

              {/* Conditionally render Live Link */}
              {project.live ? (
                <a
                  href={project.live}
                  className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg hover:opacity-80 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              ) : (
                <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-600 bg-gray-300 rounded-full">
                  No Live Demo
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
