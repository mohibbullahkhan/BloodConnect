// import Link from "next/link";
// import React from "react";

// export default async function ProductsPage() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log({ data });
//   return (
//     <div className="flex flex-col">
//       This is product page
//       {data.map((user) => (
//         <Link key={user.id} href={`/products/${user.id}`}>
//           {user.name}
//         </Link>
//       ))}
//     </div>
//   );
// }

import Link from "next/link";
import React from "react";

// --- DonorCard Component ---
const DonorCard = ({ donor }) => {
  // Destructure donor data for easy use
  const {
    _id,
    id,
    name,
    bloodType,
    donationCount,
    lastDonationDate,
    location,
  } = donor;

  // Formatting the last donation date for the card
  const formattedLastDonation = lastDonationDate
    ? new Date(lastDonationDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "N/A";

  // Short Description logic
  const shortDescription = `${location} | Donations: ${donationCount} times.`;

  return (
    // Card Container
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Icon/Image Placeholder (You can replace this with an actual image or SVG) */}
      <div className="p-4 bg-red-50 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-red-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-1 1v1.386l-.707.707a1 1 0 01-1.414 0l-.707-.707A1 1 0 005 4h-.002zm2 0a1 1 0 011 1v1.386l.707.707a1 1 0 001.414 0l.707-.707A1 1 0 0115 4h.002zm-3 8a4 4 0 100-8 4 4 0 000 8zM9 14.586A1.993 1.993 0 0012 16h1a2 2 0 012 2v1h-3a1 1 0 00-1 1v.5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-.5a1 1 0 00-1-1H5v-1a2 2 0 012-2h1a1.993 1.993 0 003 0v-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3
          className="text-xl font-semibold text-gray-800 mb-1 truncate"
          title={name}
        >
          {name}
        </h3>

        {/* Short description */}
        <p className="text-sm text-gray-500 mb-4 h-10 overflow-hidden line-clamp-2">
          {shortDescription}
        </p>

        {/* Price/Meta */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-red-600">{bloodType}</span>
            <span className="text-xs text-gray-400">
              Last Donated: {formattedLastDonation}
            </span>
          </div>

          {/* Details Button */}
          <Link href={`/bloods/${_id}`}>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded-full transition-colors duration-200 shadow-md">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// --- ProductsPage Component (renamed for clarity) ---
export default async function DonorsPage() {
  const URL = "https://blood-connect-pi-cyan.vercel.app/bloods";
  let data = [];
  let error = null;

  try {
    const res = await fetch(URL, {
      // Add caching control for development/production
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    data = await res.json();
  } catch (err) {
    console.error("Fetch Error:", err.message);
    error = err.message;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          💉 Available Donors
        </h1>
        <p className="text-gray-500">
          List of potential blood donors and their key statistics.
        </p>
      </header>

      {/* Error Message */}
      {error && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          Error fetching data: {error}. Please ensure the server is running at
          **{URL}**.
        </div>
      )}

      {/* Grid Container - Handles the 3-card-per-line requirement and responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((donor) => (
            // The Link component wraps the card for navigation
            // Note: The donor's actual MongoDB _id is typically used in the URL if available,
            // but here we use the `id` from your provided structure for the `href`.
            <DonorCard key={donor._id} donor={donor} />
          ))
        ) : (
          <p className="lg:col-span-3 text-center text-gray-500">
            {error
              ? "Could not load donor data."
              : "No donors found at this time."}
          </p>
        )}
      </div>
    </div>
  );
}
