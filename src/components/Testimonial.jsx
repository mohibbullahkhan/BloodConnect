"use client";
import React, { useState, useEffect } from "react";

// Data for the Marquee Cards
const MARQUEE_TESTIMONIALS = [
  {
    quote:
      "Every donation I make gives me a sense of profound purpose. It's a small act that means a life saved on the operating table. The whole process is quick and deeply rewarding.",
    name: "Alex R.",
    role: "Long-term Donor",
    accent: "red-600",
  },
  {
    quote:
      "I owe my recovery to the incredible blood supply. The swift action and the kindness of strangers are simply overwhelming. Thank you for giving me a future.",
    name: "Sophia K.",
    role: "Transfusion Recipient",
    accent: "blue-600",
  },
  {
    quote:
      "We see the direct impact daily. Blood isn't just a resource; it's a constant necessity for trauma and urgent surgery. Donors are heroes in the medical field.",
    name: "Nurse Elena G.",
    role: "ER Staff",
    accent: "green-600",
  },
  {
    quote:
      "Volunteering lets me contribute directly. The atmosphere at the center is one of pure community spirit and life-giving hope. It makes every shift worthwhile.",
    name: "David M.",
    role: "Center Volunteer",
    accent: "orange-600",
  },
  {
    quote:
      "My son pulled through thanks to the readily available blood bank. It taught me the true meaning of selfless giving, and we are forever thankful for the community support.",
    name: "Priya L.",
    role: "Family Member",
    accent: "purple-600",
  },
  {
    quote:
      "As a rare blood type donor, I know my contribution is vital. It’s my privilege to help those waiting on that specific match. It truly is life's most precious gift.",
    name: "Lisa B.",
    role: "O-Negative Donor",
    accent: "teal-600",
  },
];

// Define colors and styles outside the component logic for clean rendering
const colors = {
  "primary-red": "#C0392B", // Deep red for high-contrast CTA and accents
  "background-light": "#F8F8FF", // Very light off-white background
  "text-dark": "#1C2833", // Deep blue-gray for main text
};

// Helper function to get color for inline styles
const getColor = (accent) => {
  switch (accent) {
    case "red-600":
      return "#C0392B";
    case "blue-600":
      return "#3498DB";
    case "green-600":
      return "#2ECC71";
    case "orange-600":
      return "#F39C12";
    case "purple-600":
      return "#A569BD";
    case "teal-600":
      return "#1ABC9C";
    default:
      return colors["primary-red"];
  }
};

// Helper Component for a single Testimonial Card
const TestimonialCard = ({ quote, name, role, accent }) => {
  const accentColor = getColor(accent);

  return (
    <div
      className={`inline-block w-80 sm:w-96 md:w-[26rem] flex-shrink-0 mx-4 p-8 pt-10 bg-white rounded-3xl transition duration-300 hover:scale-[1.02] border-t-8`}
      // Custom styles applied here for dynamic colors and better shadows
      style={{
        animation: "none",
        borderColor: accentColor,
        // Premium, sharp shadow for light background
        boxShadow: `0 15px 30px -10px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.08)`,
      }}
    >
      {/* SVG Quote Icon for visual punch */}
      <svg
        className={`mb-4 h-10 w-10`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ color: accentColor, opacity: 0.9 }}
      >
        <path d="M13.682 9.775a6.002 6.002 0 01-5.746-4.225.5.5 0 00-.946-.328A7.002 7.002 0 0013.682 10.775V15a.5.5 0 00.5.5h1.5a.5.5 0 00.5-.5V10.775a6.002 6.002 0 01-1.498-1.0zm-6 0a6.002 6.002 0 01-5.746-4.225.5.5 0 00-.946-.328A7.002 7.002 0 007.682 10.775V15a.5.5 0 00.5.5h1.5a.5.5 0 00.5-.5V10.775a6.002 6.002 0 01-1.498-1.0z" />
      </svg>

      <p className="text-xl font-serif text-gray-800 leading-relaxed mb-6">
        {quote}
      </p>
      <div className="flex items-center pt-4 border-t border-gray-100">
        {/* Placeholder Initial Circle */}
        <div
          className={`h-14 w-14 rounded-full flex items-center justify-center text-white font-bold text-xl ring-4 ring-white shadow-md`}
          style={{
            backgroundColor: accentColor,
            // Clean contrast ring on light background
            boxShadow: `0 0 0 4px #FFFFFF, 0 0 0 6px ${accentColor}50`,
          }}
        >
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="text-xl font-bold text-gray-900">{name}</p>
          <p className={`text-sm font-medium text-gray-500`}>{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  // Duplicate the list of testimonials to create a seamless scrolling effect
  const marqueeContent = [...MARQUEE_TESTIMONIALS, ...MARQUEE_TESTIMONIALS];

  // Custom CSS for the marquee effect, injected using a style tag
  const marqueeStyle = `
        /* Custom styles for the section background */
        .page-background {
            background-color: ${colors["background-light"]};
            /* Subtle, clean texture */
            background-image: radial-gradient(circle at 1px 1px, rgba(192, 57, 43, 0.05) 1px, transparent 0); 
            background-size: 20px 20px;
        }

        /* Marquee Keyframes */
        @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
        }

        .marquee-container {
            overflow: hidden;
            width: 100%;
            padding: 3rem 0; 
            /* Enhanced Gradient Mask for fading edges */
            mask-image: linear-gradient(to right, transparent 5%, black 20%, black 80%, transparent 95%);
            -webkit-mask-image: linear-gradient(to right, transparent 5%, black 20%, black 80%, transparent 95%);
        }

        .marquee-content {
            display: flex;
            white-space: nowrap;
            animation: scroll-left 40s linear infinite; /* Dynamic scroll: 40 seconds */
        }

        /* Pause animation on hover */
        .marquee-content:hover {
            animation-play-state: paused;
        }
    `;

  return (
    <div className="page-background min-h-screen font-sans antialiased">
      {/* Inject custom CSS styles */}
      <style>{marqueeStyle}</style>

      <section
        id="testimonials"
        className="py-20 md:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header: Clean, High-Contrast Title */}
          <div className="text-center mb-16 lg:mb-20">
            <p
              className="text-2xl font-extrabold uppercase tracking-[0.3em]"
              style={{ color: colors["primary-red"] }}
            >
              HEAR THE IMPACT
            </p>
            <h2
              className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-extrabold"
              style={{ color: colors["text-dark"] }}
            >
              Voices of the Life-Givers
            </h2>
            <p className="mt-6 max-w-4xl mx-auto text-xl text-gray-600">
              These stories, from recipients and donors alike, highlight the
              critical difference you make with every single contribution.
            </p>
          </div>

          {/* Scrolling Marquee Section */}
          <div className="marquee-container">
            <div className="marquee-content">
              {marqueeContent.map((item, index) => (
                <TestimonialCard
                  key={index}
                  quote={item.quote}
                  name={item.name}
                  role={item.role}
                  accent={item.accent}
                />
              ))}
            </div>
          </div>

          {/* Call to Action Footer: Highly Visible and Professional */}
          <div className="mt-20 text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold rounded-full shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-primary-red/50 ring-4 ring-red-400/40"
              style={{
                backgroundColor: colors["primary-red"],
                color: colors["background-light"], // Use light text for contrast
                boxShadow: `0 10px 20px -5px ${colors["primary-red"]}80`,
              }}
            >
              Schedule Your Donation Appointment Now &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
