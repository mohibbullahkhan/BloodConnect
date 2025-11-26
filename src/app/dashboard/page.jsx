// "use client";

// import React, { useState, useEffect } from "react";
// // Added Edit and Trash2 for the Actions column
// import {
//   PlusCircle,
//   AlertCircle,
//   Heart,
//   List,
//   Edit,
//   Trash2,
// } from "lucide-react";

// // --- Import Clerk Hook ---
// import { useUser } from "@clerk/nextjs";
// // -------------------------

// // --- Donor Form Modal Component (Remains largely the same, kept for completeness) ---

// const DonorFormModal = ({ onClose, onSuccess, currentUserEmail }) => {
//   const [name, setName] = useState("");
//   const [bloodType, setBloodType] = useState("");
//   const [location, setLocation] = useState("");
//   const [formError, setFormError] = useState(null);
//   const [isPosting, setIsPosting] = useState(false);

//   // Check if email is available before showing the form
//   if (!currentUserEmail) {
//     return (
//       <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
//         <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 text-center">
//           <AlertCircle className="w-10 h-10 text-red-600 mx-auto mb-4" />
//           <p className="text-lg font-semibold text-gray-700">
//             User email is not available.
//           </p>
//           <p className="text-sm text-gray-500">
//             Please ensure you are fully logged in via Clerk.
//           </p>
//           <button
//             onClick={onClose}
//             className="mt-4 px-4 py-2 bg-gray-200 rounded"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // 3. Delete Function
//   const handleDeleteDonor = async (id) => {
//     setDeletingId(id);
//     setDeletionStatus(null);

//     try {
//       const res = await fetch(`https://blood-connect-pi-cyan.vercel.app/bloods/${id}`, {
//         method: "DELETE",
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(
//           errorData.message || `HTTP error! Status: ${res.status}`
//         );
//       }

//       // Update local state: remove the deleted donor
//       setDonors(donors.filter((donor) => (donor._id || donor.id) !== id));

//       // Set success message
//       setDeletionStatus({
//         type: "success",
//         message: `Donor record deleted successfully.`,
//       });
//     } catch (error) {
//       console.error("Failed to delete donor:", error);
//       // Set error message
//       setDeletionStatus({
//         type: "error",
//         message:
//           error.message || "An unexpected error occurred during deletion.",
//       });
//     } finally {
//       setDeletingId(null);
//       // Automatically clear success/error message after a few seconds
//       setTimeout(() => setDeletionStatus(null), 5000);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormError(null);

//     if (!name || !bloodType || !location) {
//       setFormError("All required fields must be filled out.");
//       return;
//     }

//     const newDonorData = {
//       name,
//       bloodType,
//       location,
//       // CRITICAL STEP: AUTOMATICALLY INCLUDE THE NON-EDITABLE OWNER EMAIL
//       ownerEmail: currentUserEmail,
//       donationCount: 0,
//       isEligible: true,
//       lastDonationDate: new Date().toISOString().split("T")[0],
//     };

//     setIsPosting(true);

//     try {
//       const res = await fetch("https://blood-connect-pi-cyan.vercel.app/bloods", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newDonorData),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(
//           errorData.message || `HTTP error! Status: ${res.status}`
//         );
//       }

//       const addedDonor = await res.json();
//       onSuccess(addedDonor);
//       onClose();
//     } catch (error) {
//       console.error("Failed to add donor:", error);
//       setFormError(
//         error.message || "An unexpected error occurred during post."
//       );
//     } finally {
//       setIsPosting(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8">
//         <h3 className="text-3xl font-bold text-red-700 border-b pb-3 mb-6 flex items-center">
//           <Heart className="w-6 h-6 mr-2 fill-red-700" /> Add New Donor
//         </h3>

//         {formError && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
//             <AlertCircle className="w-5 h-5 mr-2" />
//             <span className="font-semibold">Error:</span> {formError}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Owner Email Field (Non-Editable) */}
//           <div className="p-3 bg-red-100 rounded-lg border border-red-300">
//             <label className="text-xs font-semibold text-red-800 block mb-1">
//               Record Owner (Clerk User Email)
//             </label>
//             <input
//               type="email"
//               value={currentUserEmail}
//               readOnly
//               className="w-full text-sm font-mono text-gray-700 bg-red-100 border-none outline-none cursor-not-allowed"
//             />
//           </div>

//           {/* Editable Donor Fields */}
//           <input
//             type="text"
//             placeholder="Donor Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-4 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition"
//             disabled={isPosting}
//           />
//           <input
//             type="text"
//             placeholder="Blood Type (e.g., O+, AB-)"
//             value={bloodType}
//             onChange={(e) => setBloodType(e.target.value)}
//             className="w-full p-4 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition"
//             disabled={isPosting}
//           />
//           <input
//             type="text"
//             placeholder="Location/Region"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="w-full p-4 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 transition"
//             disabled={isPosting}
//           />

//           {/* Action Buttons */}
//           <div className="flex justify-end space-x-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150"
//               disabled={isPosting}
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-150 disabled:bg-red-400"
//               disabled={isPosting}
//             >
//               {isPosting ? (
//                 "Saving..."
//               ) : (
//                 <>
//                   <PlusCircle className="w-5 h-5 mr-2" /> Post Donor
//                 </>
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// // --- Main Dashboard Component (Updated to filter by user email) ---

// export default function DashboardPage() {
//   const [donors, setDonors] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [error, setError] = useState(null);

//   // 1. Get User Data from Clerk
//   const { user, isLoaded } = useUser();
//   const currentUserEmail = user?.primaryEmailAddress?.emailAddress;

//   // 2. Fetch data from the secured /myBloods endpoint
//   useEffect(() => {
//     // Wait until Clerk data is loaded AND we have a user email
//     if (!isLoaded || !currentUserEmail) {
//       if (isLoaded && !currentUserEmail) {
//         setIsLoading(false); // Stop loading if Clerk is ready but no email is found
//       }
//       return;
//     }

//     const fetchMyDonors = async () => {
//       setIsLoading(true);
//       setError(null);

//       // Construct the URL to query the API using the user's email
//       const apiUrl = `https://blood-connect-pi-cyan.vercel.app/myBloods?ownerEmail=${encodeURIComponent(
//         currentUserEmail
//       )}`;

//       try {
//         const res = await fetch(apiUrl);

//         if (!res.ok) {
//           const errorData = await res.json();
//           throw new Error(
//             errorData.message || `HTTP error! Status: ${res.status}`
//           );
//         }

//         const data = await res.json();
//         setDonors(data);
//       } catch (e) {
//         console.error("Failed to fetch user-specific donors:", e);
//         setError(
//           e.message || "An unexpected error occurred while fetching your data."
//         );
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMyDonors();
//   }, [isLoaded, currentUserEmail]); // Depend on both states

//   const handleDonorAdded = (newDonor) => {
//     // Add the new donor to the list immediately after successful post
//     setDonors([...donors, newDonor]);
//   };

//   // --- Render Logic ---

//   // Show loading while Clerk is initializing or data is fetching
//   if (!isLoaded || isLoading)
//     return (
//       <div className="text-center py-20 text-xl text-red-600">
//         Loading Your Records...
//       </div>
//     );

//   // Handle case where user is logged in but has no primary email (shouldn't happen with standard Clerk setup)
//   if (!currentUserEmail)
//     return (
//       <div className="p-6 max-w-4xl mx-auto bg-red-100 border border-red-400 text-red-700 rounded-lg mt-10">
//         <h1 className="text-2xl font-bold flex items-center mb-2">
//           <AlertCircle className="w-6 h-6 mr-2" /> Authentication Error
//         </h1>
//         <p>
//           Your user profile does not have a primary email address linked, or
//           Clerk is not fully initialized.
//         </p>
//       </div>
//     );

//   if (error)
//     return (
//       <div className="p-6 max-w-4xl mx-auto bg-red-50 border border-red-400 text-red-700 rounded-lg mt-10">
//         <h1 className="text-2xl font-bold">API Error</h1>
//         <p className="text-gray-600">Error fetching your records: {error}</p>
//       </div>
//     );

//   // 3. Main Dashboard Render
//   return (
//     <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
//       {/* Header and Add Button */}
//       <div className="max-w-7xl mx-auto flex justify-between items-center mb-8 border-b pb-4">
//         <h1 className="text-4xl font-extrabold text-gray-900 flex items-center">
//           <List className="w-8 h-8 mr-3 text-red-600" />
//           My Added Donor Records
//         </h1>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-150"
//         >
//           <PlusCircle className="w-5 h-5 mr-2" /> Add New Donor
//         </button>
//       </div>

//       {/* Current User Info */}
//       <div className="max-w-7xl mx-auto mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
//         Showing records created by:{" "}
//         <span className="font-semibold">{currentUserEmail}</span>.
//       </div>

//       {/* Donor Table */}
//       <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Blood Type
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Location
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Donation Count
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {donors.length > 0 ? (
//               donors.map((donor) => (
//                 <tr key={donor._id || donor.id} className="hover:bg-red-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {donor.name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">
//                     {donor.bloodType}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                     {donor.location}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                     {donor.donationCount || 0}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
//                     {/* Placeholder for Edit Button */}
//                     <button
//                       onClick={() => console.log("Edit clicked for", donor._id)}
//                       className="text-blue-600 hover:text-blue-900 p-1 rounded-full hover:bg-blue-50 transition"
//                       title="Edit Record"
//                     >
//                       <Edit className="w-5 h-5" />
//                     </button>
//                     {/* Placeholder for Delete Button */}
//                     <button
//                       onClick={() => handleDeleteDonor(donor._id)}
//                       className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition"
//                       title="Delete Record"
//                     >
//                       <Trash2 className="w-5 h-5" />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td
//                   colSpan="5"
//                   className="px-6 py-10 text-center text-gray-500"
//                 >
//                   You havent added any donor records yet. Click Add New Donor to
//                   get started!
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Donor Add Form Modal */}
//       {isModalOpen && (
//         <DonorFormModal
//           onClose={() => setIsModalOpen(false)}
//           onSuccess={handleDonorAdded}
//           currentUserEmail={currentUserEmail}
//         />
//       )}
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import {
  PlusCircle,
  AlertCircle,
  Heart,
  List,
  Edit,
  Trash2,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";

const DonorFormModal = ({ onClose, onSuccess, currentUserEmail }) => {
  const [name, setName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [formError, setFormError] = useState(null);
  const [isPosting, setIsPosting] = useState(false);

  if (!currentUserEmail) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8 text-center">
          <AlertCircle className="w-10 h-10 text-red-600 mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-700">
            User email is not available.
          </p>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-200 rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!name || !bloodType || !location) {
      setFormError("All required fields must be filled out.");
      return;
    }

    const newDonorData = {
      name,
      bloodType,
      location,
      ownerEmail: currentUserEmail,
      donationCount: 0,
      isEligible: true,
      lastDonationDate: new Date().toISOString().split("T")[0],
    };

    setIsPosting(true);

    try {
      const res = await fetch(
        "https://blood-connect-pi-cyan.vercel.app/bloods",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newDonorData),
        }
      );

      if (!res.ok) throw new Error("Failed to add donor");

      const addedDonor = await res.json();
      onSuccess(
        addedDonor.insertedId
          ? { ...newDonorData, _id: addedDonor.insertedId }
          : addedDonor
      );
      onClose();
    } catch (error) {
      setFormError(error.message || "Failed to save donor");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-8">
        <h3 className="text-3xl font-bold text-red-700 border-b pb-3 mb-6 flex items-center">
          <Heart className="w-6 h-6 mr-2 fill-red-700" /> Add New Donor
        </h3>

        {formError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <AlertCircle className="w-5 h-5 mr-2 inline" />
            {formError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="p-3 bg-red-100 rounded-lg border border-red-300">
            <label className="text-xs font-semibold text-red-800 block mb-1">
              Record Owner (Clerk User Email)
            </label>
            <input
              type="email"
              value={currentUserEmail}
              readOnly
              className="w-full text-sm font-mono text-gray-700 bg-red-100 border-none outline-none cursor-not-allowed"
            />
          </div>

          <input
            type="text"
            placeholder="Donor Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            disabled={isPosting}
            required
          />
          <input
            type="text"
            placeholder="Blood Type (e.g., O+, AB-)"
            value={bloodType}
            onChange={(e) => setBloodType(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            disabled={isPosting}
            required
          />
          <input
            type="text"
            placeholder="Location/Region"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
            disabled={isPosting}
            required
          />

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              disabled={isPosting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 disabled:bg-red-400"
              disabled={isPosting}
            >
              {isPosting ? (
                "Saving..."
              ) : (
                <>
                  {" "}
                  <PlusCircle className="w-5 h-5 mr-2" /> Post Donor
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// MAIN DASHBOARD COMPONENT
export default function DashboardPage() {
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const { user, isLoaded } = useUser();
  const currentUserEmail = user?.primaryEmailAddress?.emailAddress;

  // Fetch donors
  const fetchMyDonors = async () => {
    if (!currentUserEmail) return;

    setIsLoading(true);
    try {
      const res = await fetch(
        `https://blood-connect-pi-cyan.vercel.app/myBloods?ownerEmail=${encodeURIComponent(
          currentUserEmail
        )}`
      );
      if (!res.ok) throw new Error("Failed to fetch donors");
      const data = await res.json();
      setDonors(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded && currentUserEmail) {
      fetchMyDonors();
    }
  }, [isLoaded, currentUserEmail]);

  // DELETE FUNCTION - MOVED HERE (Fixed!)
  const handleDeleteDonor = async (id) => {
    if (!confirm("Are you sure you want to delete this donor?")) return;

    setDeletingId(id);

    try {
      const res = await fetch(
        `https://blood-connect-pi-cyan.vercel.app/bloods/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Failed to delete");

      // Remove from UI instantly
      setDonors(donors.filter((d) => d._id !== id));
      alert("Donor deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to delete donor");
    } finally {
      setDeletingId(null);
    }
  };

  const handleDonorAdded = (newDonor) => {
    setDonors([...donors, newDonor]); // Instant update
    setIsModalOpen(false);
  };

  if (!isLoaded || isLoading)
    return <div className="text-center py-20 text-xl">Loading...</div>;
  if (!currentUserEmail)
    return <div className="text-red-600">No user email found</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h1 className="text-4xl font-extrabold text-gray-900 flex items-center">
            <List className="w-8 h-8 mr-3 text-red-600" />
            My Added Donor Records
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
          >
            <PlusCircle className="w-5 h-5 mr-2" /> Add New Donor
          </button>
        </div>

        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
          Showing records by:{" "}
          <span className="font-bold">{currentUserEmail}</span>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Blood Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Donations
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {donors.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-gray-500">
                    No donors added yet. Click "Add New Donor" to start!
                  </td>
                </tr>
              ) : (
                donors.map((donor) => (
                  <tr key={donor._id} className="hover:bg-red-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {donor.name}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-red-600">
                      {donor.bloodType}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {donor.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {donor.donationCount || 0}
                    </td>
                    cea
                    <td className="px-6 py-4 text-sm space-x-3">
                      <button className="text-blue-600 hover:text-blue-800">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteDonor(donor._id)}
                        disabled={deletingId === donor._id}
                        className="text-red-600 hover:text-red-800 disabled:opacity-50"
                      >
                        {deletingId === donor._id ? (
                          "..."
                        ) : (
                          <Trash2 className="w-5 h-5" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <DonorFormModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleDonorAdded}
          currentUserEmail={currentUserEmail}
        />
      )}
    </div>
  );
}
