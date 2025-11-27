// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   SignUpButton,
//   UserButton,
// } from "@clerk/nextjs";
// import Link from "next/link";
// import React from "react";
"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

// export default function Navbar() {
//   return (
//     <div className="flex justify-center py-5 ">
//       <Link href="/">
//         <span className="px-5 no-underline">Home</span>
//       </Link>
//       <Link href="/products" className="px-5 no-underline">
//         Products
//       </Link>
//       <Link href="/about" className="px-5">
//         About Us
//       </Link>
//       <Link href="/dashboard" className="px-5">
//         DashBoard
//       </Link>
//       <Link href="/login" className="px-5">
//         Login
//       </Link>
//       <Link href="/register" className="px-5">
//         Register
//       </Link>
//       <SignedOut>
//         <SignInButton mode="modal" />
//         <SignUpButton mode="modal">
//           <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//             Sign Up
//           </button>
//         </SignUpButton>
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </div>
//   );
// }

// src/components/Navbar.jsx

// Use a default export for the primary component in the file
export default function Navbar() {
  const { isSignedIn, user, isLoaded } = useUser();

  // ... your DaisyUI navbar JSX code here
  const links = (
    <>
      <li>
        <Link href="/">
          <span className="px-5 no-underline">Home</span>
        </Link>
      </li>

      <li>
        <Link href="/about" className="px-5">
          About Us
        </Link>
      </li>
      <li>
        <Link href="/bloods" className="px-5 no-underline">
          Find Blood
        </Link>
      </li>

      {isSignedIn && (
        <li>
          <Link href="/dashboard" className="px-5">
            DashBoard
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BloodConnect</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <SignedOut>
            <SignInButton mode="modal" />
            <SignUpButton mode="modal">
              <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium ml-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
