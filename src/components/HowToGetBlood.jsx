// src/components/HowToGetBlood.jsx

// This component uses DaisyUI/Tailwind for a more striking, modern design.

import { ArrowRightIcon } from "lucide-react"; // Assuming you have lucide-react installed

const steps = [
  {
    number: 1,
    title: "Submit Request",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="15" y1="15" x2="9" y2="15" />
      </svg>
    ),
    description:
      "Fill out the simple online form with critical patient information, required blood type, and location details.",
  },
  {
    number: 2,
    title: "Donor Matching",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.15C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    description:
      "Our system instantly scans and notifies matching, verified donors or locates the nearest blood bank with available supply.",
  },
  {
    number: 3,
    title: "Receive Safely",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M16 11l-4 4-4-4" />
        <path d="M12 11V3" />
      </svg>
    ),
    description:
      "Coordinate with the matched source and receive the necessary blood safely and efficiently, saving precious time.",
  },
];

const ArrowSeparator = ({ index }) => (
  <div className="hidden lg:flex items-center justify-center w-20 h-full relative">
    {index < steps.length - 1 && (
      <ArrowRightIcon className="w-8 h-8 text-secondary animate-pulse" />
    )}
  </div>
);

export default function HowToGetBlood() {
  return (
    <section className="py-24 bg-gradient-to-br from-base-100 to-base-200 text-base-content overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-primary mb-3">
          Get Life-Saving Blood
        </h2>
        <p className="text-xl text-gray-600 mb-16">
          A simple three-step process to secure the blood you need.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center relative z-10">
          {steps.map((step, index) => (
            <>
              <div
                key={step.number}
                className="relative flex flex-col items-center max-w-sm mx-auto p-6 bg-white rounded-xl shadow-2xl transition-all duration-500 hover:shadow-primary-focus/50 hover:scale-[1.03] mb-12 lg:mb-0 lg:w-1/3"
              >
                {/* Step Icon and Title */}
                <div className="w-20 h-20 rounded-full bg-primary-content text-primary flex items-center justify-center mb-6 border-4 border-primary/50 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  {step.icon}
                </div>

                {/* Step Number Badge */}
                <div className="badge badge-lg bg-secondary text-secondary-content border-secondary absolute -top-4 right-1/2 translate-x-1/2 lg:right-4 lg:translate-x-0 font-bold shadow-md">
                  Step {step.number}
                </div>

                <h3 className="text-2xl font-bold mb-3 mt-4 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-md text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Separator Arrow (only between cards on large screens) */}
              <ArrowSeparator index={index} />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
