// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";

// export default function Page() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (!id) return;

//     async function fetchData() {
//       try {
//         const res = await fetch(`https://blood-connect-pi-cyan.vercel.app/bloods/${id}`);
//         const result = await res.json();
//         setData(result);
//       } catch (error) {
//         console.error("Failed to fetch:", error);
//       }
//     }

//     fetchData();
//   }, [id]);

//   if (!data) return <div>Loading...</div>;

//   return (
//     <div>
//       Product details page: {data?.name}
//       <h2>{data?.mobileNumber}</h2>
//     </div>
//   );
// }

// import React from "react";

// export default async function page({ params }) {
//   const { _id } = await params;
//   const paramId = parseInt(_id);
//   const res = await fetch(`https://blood-connect-pi-cyan.vercel.app/bloods/${paramId}`);
//   const data = await res.json();
//   return <div>Product details page : {data.name}</div>;
// }

"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link"; // Use Link for navigation if you have a defined route for the back button

// Helper function to format the date
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Helper component for meta information
const MetaInfo = ({ label, value, className = "" }) => (
  <div
    className={`flex justify-between py-2 border-b border-gray-100 ${className}`}
  >
    <span className="text-gray-500 font-medium">{label}</span>
    <span className="font-semibold text-gray-800">{value}</span>
  </div>
);

export default function DonorDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    async function fetchData() {
      setIsLoading(true);
      setError(null);
      try {
        // Adjust the URL if necessary, or keep it as is
        const res = await fetch(
          `https://blood-connect-pi-cyan.vercel.app/bloods/${id}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (e) {
        console.error("Failed to fetch:", e);
        setError("Could not load donor details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-xl text-red-600">Loading Donor Data...</div>
      </div>
    );

  if (error)
    return (
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-gray-600">{error}</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-sm text-blue-500 hover:text-blue-700"
        >
          &larr; Go Back
        </button>
      </div>
    );

  if (!data)
    return (
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg mt-10">
        <h1 className="text-2xl font-bold text-red-600">Donor Not Found</h1>
        <p className="text-gray-600">The donor ID {id} does not exist.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-sm text-blue-500 hover:text-blue-700"
        >
          &larr; Go Back
        </button>
      </div>
    );

  // Destructure data for cleaner JSX
  const {
    name,
    bloodType,
    donationCount,
    lastDonationDate,
    isEligible,
    mobileNumber,
    email,
    location,
    notes,
  } = data;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-red-600 hover:text-red-800 transition duration-150 mb-6 font-medium"
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        Back to Donor List
      </button>

      {/* Main Card Container */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Large Image/Banner - Use a relevant image for the banner */}
        {/*  */}
        <div className="h-48 bg-red-700 bg-opacity-80 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Donor Profile
            </h1>
            <p className="mt-1 text-red-200 text-lg">Details for ID: {id}</p>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {/* Product Title (Donor Name) */}
          <div className="mb-6 border-b pb-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {name || "N/A"}
            </h2>
            <p className="text-xl font-mono mt-1 text-red-600">
              {bloodType || "N/A"}
            </p>
          </div>

          {/* Product Meta Info Section (Grid Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 mb-8 border-b pb-6">
            <div className="space-y-2">
              <MetaInfo label="Mobile Number" value={mobileNumber || "N/A"} />
              <MetaInfo label="Email" value={email || "N/A"} />
              <MetaInfo label="Location" value={location || "N/A"} />
            </div>
            <div className="space-y-2 mt-4 md:mt-0">
              <MetaInfo
                label="Donation Count"
                value={`${donationCount || 0} times`}
              />
              <MetaInfo
                label="Last Donation"
                value={formatDate(lastDonationDate)}
              />
              <MetaInfo
                label="Eligibility"
                value={isEligible ? "ELIGIBLE" : "NOT ELIGIBLE"}
                className={isEligible ? "text-green-600" : "text-red-600"}
              />
            </div>
          </div>

          {/* Full Description (Notes) */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Donor Notes / Profile Summary
            </h3>
            <div className="bg-red-50 p-4 rounded-lg shadow-inner border border-red-100">
              <p className="text-gray-700 italic leading-relaxed">
                {notes || "No additional notes provided for this donor."}
              </p>
            </div>
          </div>

          {/* Call to Action - Example of Priority Meta Info */}
          <div className="text-center pt-4 border-t">
            <p className="text-lg text-red-600 font-semibold mb-3">
              Current Status:{" "}
              {isEligible ? "Ready to Donate" : "Currently Ineligible"}
            </p>
            <button
              onClick={() => alert(`Contacting ${name}...`)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
              disabled={!isEligible}
            >
              {isEligible ? "Contact Donor Now" : "Review Eligibility"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
