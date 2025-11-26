import React from "react";

// Color theme derived from Mission.jsx and Testimonial.jsx
const colors = {
  "primary-red": "#C0392B", // Deep red
  "background-light": "#F8F8FF", // Soft off-white
  "text-dark": "#1C2833", // Deep blue-gray
};

// Data for the collaborators (Using full names and abbreviations for professional display)
const collaborators = [
  { name: "National Civic Corps", abbreviation: "NCC" },
  { name: "National Service Scheme", abbreviation: "NSS" },
  { name: "Youth Mobilization Association", abbreviation: "YMA" },
  { name: "Healthcare Solidarity Group", abbreviation: "HSG" },
  { name: "Community Health Alliance", abbreviation: "CHA" },
  { name: "Regional Blood Trust", abbreviation: "RBT" },
];

// Collaborator Card Component (using initials as a professional placeholder)
const CollaboratorCard = ({ name, abbreviation }) => (
  <div
    className="group bg-white p-8 rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.05] hover:shadow-2xl border-t-4 border-transparent"
    style={{
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
      // Accent border on hover
      "--hover-border-color": colors["primary-red"],
    }}
  >
    <div
      className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 text-white font-extrabold text-2xl transition duration-300 group-hover:shadow-red-500/50"
      style={{
        backgroundColor: colors["primary-red"],
        boxShadow: `0 0 0 5px ${colors["primary-red"]}10, 0 0 0 10px ${colors["primary-red"]}05`, // Layered shadow ring
      }}
    >
      {abbreviation}
    </div>
    <h3
      className="text-xl font-bold mb-1"
      style={{ color: colors["text-dark"] }}
    >
      {name}
    </h3>
    <p className="text-sm text-gray-500">Official Partner</p>
  </div>
);

// Main Collaborators Section
export default function Collaborators() {
  return (
    <section
      className="py-24 md:py-36 px-4 sm:px-6 lg:px-8 font-sans antialiased"
      style={{ backgroundColor: colors["background-light"] }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <p
          className="text-xl font-bold uppercase tracking-[0.2em] mb-3"
          style={{ color: colors["primary-red"] }}
        >
          TRUSTED PARTNERS
        </p>
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-4"
          style={{ color: colors["text-dark"] }}
        >
          Working Together to Save Lives
        </h2>
        <p className="max-w-4xl mx-auto text-xl text-gray-600 mb-20">
          We proudly collaborate with national health organizations and
          community groups who share our unwavering commitment to ensuring a
          stable blood supply.
        </p>

        {/* Collaborator Grid (Responsive) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {collaborators.map((collaborator, index) => (
            <CollaboratorCard
              key={index}
              name={collaborator.name}
              abbreviation={collaborator.abbreviation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
