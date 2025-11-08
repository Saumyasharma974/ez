import React from "react";
import FooterVector from "../assets/FooterVector.png"; // top-right mandala
import FooterVector1 from "../assets/FooterVector1.png"; // bottom-left mandala

const ContactSection = () => {
  return (
    <section className="relative bg-[#FFF7F2] py-20 px-6 md:px-20 overflow-hidden">
      {/* Decorative Mandala Corners */}
      <img
        src={FooterVector}
        alt="Top-right Mandala"
        className="absolute top-0 right-0 w-60 md:w-80 opacity-90 pointer-events-none"
      />
      <img
        src={FooterVector1}
        alt="Bottom-left Mandala"
        className="absolute bottom-0 left-0 w-60 md:w-80 opacity-90 pointer-events-none"
      />

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 relative z-10">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-[#0E1F33] text-base md:text-lg leading-relaxed max-w-md">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V’re just a message away. <br />
            Let’s catch up over coffee ☕ <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="w-full md:w-1/2 bg-transparent border border-[#0E1F33] p-6 md:p-10 text-center md:text-left">
          <h2 className="text-[#0E1F33] text-2xl font-serif mb-2">
            Join the Story
          </h2>
          <p className="text-gray-700 mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          {/* FORM */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name*"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#E25D34]"
            />
            <input
              type="email"
              placeholder="Your email*"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#E25D34]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#E25D34]"
            />
            <textarea
              placeholder="Your message*"
              rows="4"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:border-[#E25D34]"
            ></textarea>

            <button
              type="submit"
              className="bg-[#E25D34] text-white px-6 py-2 rounded-full shadow hover:bg-[#cf4b24] transition-all"
            >
              Submit
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-[#E25D34] font-medium text-sm md:text-base">
            <a href="mailto:vernita@varnanfilms.co.in" className="hover:underline">
              vernita@varnanfilms.co.in
            </a>
            <span className="hidden md:block border-l border-[#E25D34] h-5 mx-3"></span>
            <p>+91 98736 84567</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
