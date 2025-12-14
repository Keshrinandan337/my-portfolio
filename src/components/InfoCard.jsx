import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaWhatsapp, FaUniversity } from "react-icons/fa";

export default function InfoCard() {
  return (
    <div
      className="
        w-96 p-3
        scale-[0.85] -translate-y-1
        bg-white/5 backdrop-blur-xl 
        rounded-2xl shadow-[0_0_25px_rgba(128,0,255,0.25)]
        border border-white/10
        space-y-4
      "
    >

      {/* Address */}
      <div className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg">
        <FaMapMarkerAlt className="text-purple-400" />
        <p>Darbhanga, Bihar, India</p>
      </div>

      {/* College */}
      <div className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg">
        <FaUniversity className="text-purple-400" />
        <p>VIT Bhopal University</p>
      </div>

      {/* Email */}
      <div className="flex items-center gap-3 bg-black/30 px-4 py-2 rounded-lg">
        <FaEnvelope className="text-purple-400" />
        <p>keshrinandan337@gmail.com</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">

        {/* GitHub */}
        <a
          href="https://github.com/Keshrinandan337"
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 
          bg-black/40 hover:bg-black/60 
          px-4 py-2 rounded-lg transition"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/9541715361"
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 
          bg-green-600 hover:bg-green-700 
          px-4 py-2 rounded-lg transition"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

      </div>
    </div>
  );
}
