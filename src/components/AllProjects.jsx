import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllProjects() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  // Trigger fade-in animation
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  // Force page to start at top when opened
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full flex justify-center px-8 py-10 bg-[#0d0d0d] text-white min-h-screen">
      
      {/* Outer Big Box */}
      <div
        className={`
          w-full max-w-5xl
          bg-white/5 backdrop-blur-xl
          rounded-2xl border border-white/10
          shadow-[0_0_25px_rgba(128,0,255,0.25)]
          p-8 md:p-10
          space-y-6
          transition-all duration-700
          ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >

        {/* Back Button + Heading (SAME ROW) */}
        <div className="relative flex items-center justify-center mb-10">

          {/* Back Button - Left */}
          <button
            onClick={() => navigate("/", { state: { scrollTo: "projects" } })}
            className="
              absolute left-0
              bg-purple-600/80 px-4 py-2 rounded-lg text-white 
              border border-purple-400 hover:bg-purple-700 
              transition shadow-md hover:shadow-[0_0_15px_rgba(168,85,247,0.7)] mb- -2
            "
          >
            ← Back
          </button>

          {/* Heading - Center */}
          <h1 className="text-3xl font-bold text-purple-400 text-center">
            All Projects
          </h1>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <ProjectCard
            title="Redirecting Website"
            desc="Enter URL → redirect instantly."
            link="https://github.com/Keshrinandan337/Redirecting-Website"
          />

          <ProjectCard
            title="Tuned XGBoost House Price Prediction"
            desc="End-to-end ML model with tuned XGBoost."
            link="https://github.com/Keshrinandan337/Tuned-XGBoost-HousePrice-Predictor"
          />

          <ProjectCard
            title="Amazon Clone"
            desc="Pixel-perfect Amazon homepage clone."
            link="https://github.com/Keshrinandan337/amazon-clone"
          />

          <ProjectCard
            title="Weather App"
            desc="React weather app using API."
            link="https://github.com/your-repo"
          />

          <ProjectCard
            title="Portfolio Website"
            desc="My first portfolio made using React."
            link="https://github.com/Keshrinandan337/my-portfolio"
          />

          <ProjectCard
            title="Chatbot NLP"
            desc="Simple Python NLP chatbot."
            link="https://github.com/your-repo"
          />

        </div>
      </div>
    </section>
  );
}


/* ------------------------ CARD COMPONENT ------------------------ */

function ProjectCard({ title, desc, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="
        bg-black/30 rounded-xl border border-white/10
        px-10 py-14 flex flex-col justify-between
        hover:bg-black/50 hover:border-purple-400
        transition-all duration-300 
        shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
        transform hover:scale-[1.03] hover:-translate-y-1
      "
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{desc}</p>

      <span className="mt-4 text-sm text-purple-300 font-medium">
        View on GitHub →
      </span>
    </a>
  );
}
