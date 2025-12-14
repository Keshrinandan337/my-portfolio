export default function TechnicalExperience() {
  return (
    <section
      id="experience"
      className="w-full flex justify-center px-4 py-16 text-white"
    >
      {/* Big Outer Card */}
      <div
        className="
          w-full max-w-5xl
          bg-white/5 backdrop-blur-xl
          rounded-2xl border border-white/10
          shadow-[0_0_25px_rgba(128,0,255,0.25)]
          p-8 md:p-10 space-y-10
        "
      >
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-purple-400 underline decoration-purple-500 underline-offset-4">
          Technical Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l border-purple-400/40 pl-6 space-y-10">

          {/* Experience 1 */}
          <div className="relative pl-4">
            <div className="absolute -left-3 top-2 w-3 h-3 bg-purple-400 rounded-full"></div>

            <h3 className="text-xl font-semibold text-purple-300">
              House Price Prediction using Tuned XGBoost
            </h3>

            <p className="text-sm text-gray-300">July 2024 — Nov 2024</p>

            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/50 rounded-full">Python</span>
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/50 rounded-full">XGBoost</span>
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/50 rounded-full">ML</span>
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/50 rounded-full">Data Cleaning</span>
            </div>

            <ul className="list-disc ml-5 mt-3 text-gray-300 space-y-1 text-sm">
              <li>Developed an end-to-end ML model for predicting house prices.</li>
              <li>Implemented feature engineering, log-transformation & outlier removal.</li>
              <li>Achieved <span className="text-purple-300 font-semibold">RMSE: 0.14</span> using a tuned XGBoost model.</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="relative pl-4">
            <div className="absolute -left-3 top-2 w-3 h-3 bg-purple-400 rounded-full"></div>

            <h3 className="text-xl font-semibold text-purple-300">
              Portfolio Website (React + Tailwind CSS)
            </h3>

            <p className="text-sm text-gray-300">Dec 2025 — Present</p>

            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/50 rounded-full">React</span>
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/50 rounded-full">Tailwind CSS</span>
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/50 rounded-full">JavaScript</span>
              <span className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/50 rounded-full">UI/UX</span>
            </div>

            <ul className="list-disc ml-5 mt-3 text-gray-300 space-y-1 text-sm">
              <li>Designed and developed a fully responsive personal portfolio.</li>
              <li>Implemented smooth animations, routing, and glass-morphism UI.</li>
              <li>Built scalable project structure with reusable components.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
