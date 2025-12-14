export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="absolute top-3 w-full px-20 flex justify-between text-gray-300 font-medium z-20">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-purple-400 transition"
        >
          About Me
        </a>

        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-purple-400 transition"
        >
          Projects
        </a>

        <a
          href="#certifications"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("certifications")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-purple-400 transition"
        >
          Certificates
        </a>

        <a
          href="#experience"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("experience")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-purple-400 transition"
        >
          Experience
        </a>
      </nav>
      {/* =============== END NAVBAR =============== */}


      {/* Soft Purple Glow Behind Photo */}
      <div className="absolute top-40 w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full"></div>

      {/* Profile Photo + Badge */}
      <div className="flex flex-col items-center relative">
        
        {/* Profile Image */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-44 h-44 rounded-full object-cover object-top border-4 border-purple-500 shadow-xl"
        />

        {/* Badge */}
        <div className="absolute -bottom-4 bg-green-600 px-4 py-1 text-sm rounded-full shadow-lg border border-green-400 font-medium">
          #OpenToWork
        </div>

      </div>

      {/* Name */}
      <h1 className="mt-10 text-4xl font-bold text-center">
        Keshri Nandan
      </h1>

      {/* Bio */}
      <p className="mt-3 text-gray-300 text-lg text-center max-w-2xl">
        CSE (Data Science) Student at VIT Bhopal University | Energetic lifelong
        learner & Data Science Enthusiast.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <a
          href="/My_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium shadow-md transition"
        >
          My Resume
        </a>

        <a
          href="https://www.linkedin.com/in/keshrinandan337"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-blue-800 hover:bg-blue-900 rounded-lg font-medium shadow-md transition"
        >
          LinkedIn
        </a>
      </div>

    </section>
  );
}
