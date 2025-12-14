import { useNavigate } from "react-router-dom";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section
      id="projects"
      className="w-full flex justify-center px-4 py-16"
    >
      {/* Big outer card */}
      <div
        className="
          w-full max-w-5xl
          bg-white/5 backdrop-blur-xl
          rounded-2xl border border-white/10
          shadow-[0_0_25px_rgba(128,0,255,0.25)]
          p-8 md:p-10
          space-y-8
        "
      >
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-purple-400 underline decoration-purple-500 underline-offset-4text-center">
          My Projects
        </h2>

        {/* 4-grid: 3 projects + All Projects button */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Project 1 */}
          <a
            href="https://github.com/Keshrinandan337/Redirecting-Website"
            target="_blank"
            className="
              bg-black/30 rounded-xl border border-white/10
              px-5 py-4 flex flex-col justify-between
              hover:bg-black/50 hover:border-purple-400
              transition shadow-md
            "
          >
            <h3 className="text-lg font-semibold text-white">
              Redirecting Website
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              🔹 Key Features:User inputs the target website URL Instantly redirects to the specified website 
            </p>
            <span className="mt-4 text-sm text-purple-300 font-medium">
              View on GitHub →
            </span>
          </a>

          {/* Project 2 */}
          <a
            href="https://github.com/Keshrinandan337/Tuned-XGBoost-HousePrice-Predictor"
            target="_blank"
            className="
              bg-black/30 rounded-xl border border-white/10
              px-5 py-4 flex flex-col justify-between
              hover:bg-black/50 hover:border-purple-400
              transition shadow-md
            "
          >
            <h3 className="text-lg font-semibold text-white">
              House Price Predictor using Tuned XGBoost
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              End-to-end Machine Learning project using a Tuned XGBoost Regressor for house price prediction, featuring advanced data cleaning and log transformation (Final RMSE: $0.14$).
            </p>
            <span className="mt-4 text-sm text-purple-300 font-medium">
              View on GitHub →
            </span>
          </a>

          {/* Project 3 */}
          <a
            href="https://github.com/Keshrinandan337/amazon-clone"
            target="_blank"
            className="
              bg-black/30 rounded-xl border border-white/10
              px-5 py-4 flex flex-col justify-between
              hover:bg-black/50 hover:border-purple-400
              transition shadow-md
            "
          >
            <h3 className="text-lg font-semibold text-white">
              Amazon Clone 
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              A responsive and pixel-perfect front-end clone of the Amazon website homepage, built using only HTML and CSS. 
            </p>
            <span className="mt-4 text-sm text-purple-300 font-medium">
              View on GitHub →
            </span>
          </a>

          {/* All Projects button */}
          <button
            onClick={() => navigate("/all-projects")}
            className="
              bg-purple-600/80 rounded-xl border border-purple-400
              px-5 py-4 flex items-center justify-center
              text-white font-semibold text-lg
              hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]
              transition
            "
          >
            All Projects
          </button>

        </div>
      </div>
    </section>
  );
}
