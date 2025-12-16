import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllCertificates() {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  // Trigger animation
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  // Always scroll to top when page opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Full list of your certificates
  const certificates = [
    {
      title: "Cloud Computing",
      platform: "NPTEL",
      link: "/Certificates/Cloud%20Computing%20(NPTEL)Certificate.pdf",
    },
    {
      title: "Deloitte - Data Analytics Job Simulation",
      platform: "Deloitte",
      link: "/Certificates/Certificate%20Delloite.pdf",
    },
    {
      title:
        "Multilingual Machine Translation Using Hugging Face Models (Publication)",
      platform: "IJARESM",
      link: "/Certificates/Project%20exhibition%201%20certificate.pdf",
    },
    {
      title: "Statistics Onramp",
      platform: "MathWorks",
      link: "/Certificates/Statistics%20onramp%20certificate.pdf",
    },
    {
      title: "MATLAB Onramp",
      platform: "MathWorks",
      link: "/Certificates/MATLAB%20CERTIFICATE.pdf",
    },
    {
      title: "Python Programming",
      platform: "Great Learning",
      link: "/Certificates/Certificate%20(python%20for%20non%20programmers).pdf",
    },
  ];

  return (
    <section className="w-full flex justify-center px-8 py-10 bg-[#0d0d0d] text-white min-h-screen">
      
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

        {/* Back + Heading Centered */}
        <div className="relative flex items-center justify-center mb-8">
          <button
            onClick={() =>
              navigate("/", { state: { scrollTo: "certificates" } })
            }
            className="
              absolute left-0 bg-purple-600/80 px-4 py-2 rounded-lg text-white 
              border border-purple-400 hover:bg-purple-700 
              transition shadow-md hover:shadow-[0_0_15px_rgba(168,85,247,0.7)]
            "
          >
            ← Back
          </button>

          <h1 className="text-3xl font-bold text-purple-400">
            All Certificates
          </h1>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="
                bg-black/30 p-6 rounded-xl
                border border-white/10
                hover:border-purple-400 hover:bg-black/50
                transition-all shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]
                transform hover:scale-[1.02]
                flex flex-col justify-between
              "
            >
              <div>
                <h3 className="text-lg font-semibold text-purple-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{cert.platform}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex items-center gap-2 px-3 py-2 
                      bg-purple-600/80 rounded-md text-white text-sm 
                      hover:bg-purple-700 transition
                    "
                  >
                    View Certificate →
                  </a>
                ) : (
                  <span
                    className="
                      inline-flex px-3 py-2 bg-white/5 rounded-md 
                      text-sm text-gray-400 cursor-not-allowed
                    "
                  >
                    No link
                  </span>
                )}

                <span className="text-xs text-gray-400 ml-4">
                  {cert.link ? "Opens in new tab" : "Add link to open"}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
