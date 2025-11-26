import React from "react";

// Color theme derived from Testimonial.jsx
const colors = {
  "primary-red": "#C0392B", // Deep red
  "primary-red-light": "#FEECEB", // Very light red for accents
  "background-light": "#F8F8FF", // Soft off-white
  "text-dark": "#1C2833", // Deep blue-gray
};

// Data for the three mission pillars
const missionPillars = [
  {
    title: "Connect Donors & Patients",
    description:
      "We are dedicated to building a seamless digital bridge, connecting generous, life-saving donors directly with patients in urgent need across the community.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Educate for Regular Giving",
    description:
      "Our platform provides comprehensive, easy-to-understand resources to encourage regular, consistent donation, highlighting its profound community importance.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.414 9.682 5 8.5 5c-4.43 0-8 3.582-8 8s3.57 8 8 8c1.182 0 2.332-.414 3.5-1.253M12 6.253C13.168 5.414 14.318 5 15.5 5c4.43 0 8 3.582 8 8s-3.57 8-8 8c-1.182 0-2.332-.414-3.5-1.253"
        />
      </svg>
    ),
  },
  {
    title: "Ensure Stable Supply",
    description:
      "We are committed to helping maintain a reliable and sufficient blood bank inventory, ensuring timely access for all hospitals and emergency services.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m12 0l-3-3m0 0L9 15m3-3v12"
        />
      </svg>
    ),
  },
];

// Simple, static component for the Mission section
const Mission = () => {
  // Custom CSS for the subtle background pattern
  const missionBackgroundStyle = `
        .mission-bg-pattern {
            background-image: radial-gradient(circle at 1px 1px, ${
              colors["primary-red-light"]
            } 1px, transparent 0);
            background-size: 40px 40px;
        }

        .blood-drop-watermark {
            background-image: url('data:image/svg+xml;utf8,<svg width="40" height="40" viewBox="0 0 24 24" fill="${colors[
              "primary-red"
            ].replace(
              "#",
              "%23"
            )}" xmlns="http://www.w3.org/2000/svg"><path opacity="0.05" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>');
            background-repeat: repeat;
            background-size: 100px 100px;
        }
    `;

  return (
    <section
      className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 font-sans antialiased relative overflow-hidden mission-bg-pattern"
      style={{ backgroundColor: colors["background-light"] }}
    >
      <style>{missionBackgroundStyle}</style>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header and Callout */}
        <p
          className="text-xl font-bold uppercase tracking-[0.2em] transition duration-500"
          style={{ color: colors["primary-red"] }}
        >
          OUR CORE PROMISE
        </p>
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-4 mb-4"
          style={{ color: colors["text-dark"] }}
        >
          A Vow to Save Every Life
        </h2>
        {/* Dynamic divider with shadow */}
        <div
          className="w-32 h-2 mx-auto mb-16 rounded-full shadow-lg"
          style={{ backgroundColor: colors["primary-red"] }}
        ></div>

        {/* Main Mission Statement Container - Wide and Branded */}
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-2xl border border-gray-100 transition duration-300 blood-drop-watermark">
          <p
            className="text-2xl md:text-3xl leading-relaxed font-semibold mb-8"
            style={{ color: colors["text-dark"] }}
          >
            At **[Your Blood Donation Website Name]**, our mission is
            fundamental: to champion a stable blood supply through accessibility
            and education. We believe every community member has the power to
            become a life-giver.
          </p>
        </div>

        {/* Core Pillars Grid - Close to the main statement */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto">
          {missionPillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl transition duration-300 bg-white shadow-lg hover:shadow-xl hover:scale-[1.03] border-b-4 border-transparent"
              style={{ borderColor: colors["primary-red"] }} // Accent border at the bottom
            >
              <div
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 text-white shadow-xl"
                style={{ backgroundColor: colors["primary-red"] }}
              >
                {pillar.icon}
              </div>
              <h3
                className="text-3xl font-bold mb-3"
                style={{ color: colors["text-dark"] }}
              >
                {pillar.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* High Impact Call to Action */}
        {/* <div className="mt-24">
          <a
            href="#"
            className="inline-flex items-center justify-center px-16 py-5 text-xl font-bold rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-red-500/50 ring-4 ring-red-400/40"
            style={{
              backgroundColor: colors["primary-red"],
              color: colors["background-light"],
              boxShadow: `0 10px 20px -5px ${colors["primary-red"]}80`,
            }}
          >
            See How You Can Help Today &rarr;
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Mission;
