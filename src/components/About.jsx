import { motion } from "framer-motion";

export default function About() {
  const scrollToHero = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="bg-[#0d0d0d] text-white px-6 py-16 relative">

      {/* HOME BUTTON */}
      <button
        onClick={scrollToHero}
        className="
          fixed top-12 left-7 z-10
          px-5 py-2 rounded-full
          border border-purple-500
          text-purple-400 font-medium
          bg-black/40 backdrop-blur-md
          transition-all duration-300
          hover:text-white
          hover:bg-purple-600/20
          hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]
        "
      >
        Home
      </button>

      {/* HEADING */}
      <h2 className="text-center text-4xl font-bold">
        About <span className="text-purple-400">Me</span>
      </h2>

      <div className="h-1 w-16 bg-purple-500 mx-auto rounded-full mt-3 mb-10"></div>

      {/* ANIMATED GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          max-w-4xl mx-auto 
          bg-white/5 backdrop-blur-xl 
          rounded-2xl border border-white/10 
          shadow-[0_0_25px_rgba(128,0,255,0.25)] 
          px-10 py-10 space-y-6
        "
      >
        <p className="text-center leading-relaxed text-gray-300 text-lg">
          I am a 3rd-year Integrated M.Tech. student at
          <span className="text-purple-400 font-semibold"> VIT Bhopal University</span>, 
          specializing in
          <span className="text-purple-400 font-semibold"> Computation and Data Science</span>.
          I thrive on discovering patterns, insights, and predictions hidden
          within complex datasets.
        </p>

        <p className="text-center leading-relaxed text-gray-300 text-lg">
          I completed my schooling in
          <span className="text-purple-400 font-semibold">
            {" "}Kathua, Jammu & Kashmir— New Mahavir Vidhya High School (10th) and Govt. Boys Hr. Secondary School (12th)
          </span>.
          This strong foundation is now enhanced through VIT's advanced curriculum.
        </p>

        <p className="text-center leading-relaxed text-gray-300 text-lg">
          I enjoy building data-driven solutions and continuously learning about
          modern technologies in Data Science, Machine Learning, and Computational Analytics.
        </p>

        <p className="text-center leading-relaxed text-gray-300 text-lg">
          Outside academics, I enjoy playing
          <span className="text-purple-400 font-semibold"> Cricket</span> and
          <span className="text-purple-400 font-semibold"> Kabaddi</span>, 
          which sharpen my strategic thinking. I also enjoy singing as a creative outlet.
        </p>
      </motion.div>
    </section>
  );
}
