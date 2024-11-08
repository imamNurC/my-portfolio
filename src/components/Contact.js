function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-primary mb-6">
          Get in Touch
        </h2>
        <p className="text-gray-300 mb-8">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-6">
          {/* Email Link with Logo */}
          <a
            href="mailto:imamnc.developer@gmail.com"
            className="text-teal-400 hover:text-teal-300 flex items-center space-x-2"
          >
            {/* Email Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M 5.5 7 C 3.03125 7 1.011719 9.015625 1 11.484375 C 1 11.484375 1 11.488281 1 11.492188 C 1 11.496094 1 11.496094 1 11.5 L 1 38.5 C 1 40.972656 3.027344 43 5.5 43 L 44.5 43 C 46.972656 43 49 40.972656 49 38.5 L 49 11.5 C 49 11.496094 49 11.496094 49 11.492188 C 49 11.488281 49 11.484375 49 11.484375 C 48.988281 9.015625 46.96875 7 44.5 7 Z M 8.101563 9 L 41.902344 9 L 25 20.78125 Z M 4.773438 9.117188 L 25 23.21875 L 45.230469 9.117188 C 46.253906 9.425781 46.992188 10.355469 47 11.488281 C 46.996094 11.699219 46.78125 12.121094 46.46875 12.460938 C 46.152344 12.804688 45.84375 13.019531 45.84375 13.019531 L 45.839844 13.027344 L 25 27.777344 L 4.160156 13.027344 L 4.15625 13.019531 C 4.15625 13.019531 3.847656 12.804688 3.53125 12.460938 C 3.21875 12.121094 3.003906 11.699219 3 11.488281 C 3.007813 10.355469 3.746094 9.425781 4.773438 9.117188 Z M 3 14.652344 C 3 14.652344 3.007813 14.660156 3.007813 14.660156 L 3.015625 14.664063 L 3.015625 14.667969 L 6 16.777344 L 6 41 L 5.5 41 C 4.109375 41 3 39.890625 3 38.5 Z M 47 14.652344 L 47 38.5 C 47 39.890625 45.890625 41 44.5 41 L 44 41 L 44 16.777344 L 46.984375 14.667969 L 46.984375 14.664063 C 46.984375 14.664063 47 14.652344 47 14.652344 Z M 8 18.191406 L 25 30.222656 L 42 18.191406 L 42 41 L 8 41 Z"></path>
            </svg>
            <span>Email</span>
          </a>

          {/* LinkedIn Link with Logo */}
          <a
            href="https://linkedin.com/in/imam-nurcakra"
            className="text-teal-400 hover:text-teal-300 flex items-center space-x-2"
          >
            {/* LinkedIn Icon */}

            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 26 26"
            >
              <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
            </svg>

            <span>LinkedIn</span>
          </a>

          {/* GitHub Link with Logo */}
          <a
            href="https://github.com/ImamNurC"
            className="text-teal-400 hover:text-teal-300 flex items-center space-x-2"
          >
            {/* GitHub Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.111.82-.26.82-.578 0-.286-.01-1.044-.015-2.05-3.338.726-4.042-1.614-4.042-1.614-.546-1.385-1.333-1.755-1.333-1.755-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.303 3.492.997.108-.774.42-1.304.763-1.604-2.665-.3-5.466-1.333-5.466-5.932 0-1.31.467-2.38 1.236-3.22-.125-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.474 11.474 0 013.003-.404c1.018.004 2.045.138 3.003.404 2.292-1.554 3.3-1.23 3.3-1.23.654 1.653.243 2.873.118 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.805 5.628-5.475 5.92.431.371.815 1.102.815 2.22 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.577C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          {/* Medium Link with Logo */}
          <a
            href="https://Medium.com/@imamnurcakra"
            className="text-teal-400 hover:text-teal-300 flex items-center space-x-2"
          >
            {/* Medium Icon */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <path d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z"></path>
            </svg>
            <span>Medium</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
