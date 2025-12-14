import { useNavigate } from "react-router-dom";

/* ------------------ Single Certificate Card Component ------------------ */

function CertificateCard({ title, platform, link }) {
  return (
    <div
      className="
        bg-black/30 p-5 rounded-xl 
        border border-white/10
        hover:border-purple-400 hover:bg-black/50
        transition-all 
        shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
        transform hover:scale-[1.02]
        flex flex-col justify-between
      "
    >
      <div>
        <h3 className="text-lg font-semibold text-purple-300">{title}</h3>
        <p className="text-sm text-gray-300 mt-1">{platform}</p>
      </div>

      <div className="mt-4">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-purple-600/80 rounded-md text-white text-sm hover:bg-purple-700 transition"
          >
            View Certificate →
          </a>
        ) : (
          <span className="inline-flex px-3 py-2 bg-white/5 rounded-md text-sm text-gray-400 cursor-not-allowed">
            No link
          </span>
        )}
      </div>
    </div>
  );
}

/* --------------------------- Main Section ------------------------------- */

export default function CertificateSection() {
  const navigate = useNavigate();

  // Full list of your certificates
  const certificates = [
    {
      title: "Cloud Computing",
      platform: "NPTEL",
      link: null,
    },
    {
      title: "Deloitte - Data Analytics Job Simulation",
      platform: "Deloitte",
      link: null,
    },
    {
      title:
        "Multilingual Machine Translation Using Hugging Face Models (Publication)",
      platform: "IJARESM",
      link: null,
    },
    // These are for the full page only (not shown here)
    {
      title: "Statistics Onramp",
      platform: "MathWorks",
      link: null,
    },
    {
      title: "MATLAB Onramp",
      platform: "MathWorks",
      link: null,
    },
    {
      title: "Python Programming",
      platform: "Great Learning",
      link: null,
    },
  ];

  // Only show first 3 on main page
  const preview = certificates.slice(0, 3);

  return (
    <section
      id="certifications"
      className="w-full flex justify-center px-4 py-16 text-white"
    >
      <div
        className="
          w-full max-w-5xl 
          bg-white/5 backdrop-blur-xl
          rounded-2xl border border-white/10 
          shadow-[0_0_25px_rgba(128,0,255,0.25)] 
          p-8 md:p-10 space-y-7
        "
      >
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-purple-400 underline decoration-purple-500 underline-offset-4">
          Certifications
        </h2>

        {/* Grid: 3 certificates + button card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <CertificateCard
            title={preview[0].title}
            platform={preview[0].platform}
            link={preview[0].link}
          />

          {/* Card 2 */}
          <CertificateCard
            title={preview[1].title}
            platform={preview[1].platform}
            link={preview[1].link}
          />

          {/* Card 3 */}
          <CertificateCard
            title={preview[2].title}
            platform={preview[2].platform}
            link={preview[2].link}
          />

          {/* Card 4 = All Certificates Button */}
          <button
            onClick={() => navigate("/all-certificates")}
            className="
              bg-purple-600/80 rounded-xl border border-purple-400
              px-5 py-4 flex items-center justify-center
              text-white font-semibold text-lg
              hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)]
              transition
            "
          >
            All Certificates
          </button>

        </div>
      </div>
    </section>
  );
}
