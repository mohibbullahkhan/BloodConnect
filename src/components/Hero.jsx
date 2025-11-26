"use client"; // ← THIS LINE FIXES EVERYTHING

import React from "react";
import { Heart, Droplet, Users, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop')",
          }}
        />

        <div className="absolute inset-0 pointer-events-none">
          <Droplet className="absolute top-20 left-10 w-20 h-20 text-red-500 opacity-60 animate-bounce" />
          <Heart className="absolute top-32 right-20 w-16 h-16 text-red-400 fill-red-400 opacity-70 animate-pulse" />
          <Droplet className="absolute bottom-40 left-1/3 w-24 h-24 text-red-600 opacity-50 animate-bounce delay-700" />
          <Heart className="absolute bottom-20 right-1/4 w-20 h-20 text-pink-500 fill-pink-500 opacity-60 animate-pulse delay-1000" />
        </div>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-red-600/20 backdrop-blur-md border border-red-500/30 rounded-full px-8 py-4 mb-8 animate-pulse">
            <Heart className="w-7 h-7 fill-red-500 text-red-500" />
            <span className="text-red-200 font-bold tracking-wider uppercase text-sm">
              One Donation = Three Lives Saved
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-6">
            Your Blood Can
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400 drop-shadow-2xl">
              Save a Life Today
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
            Every 2 seconds, someone needs blood. In just{" "}
            <span className="text-red-400 font-bold">30 minutes</span>, you can
            give someone another tomorrow.
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            {[
              { number: "1", label: "Donation" },
              { number: "3", label: "Lives Saved" },
              { number: "∞", label: "Hope Created" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-6xl md:text-7xl font-black text-red-500 drop-shadow-lg">
                  {stat.number}
                </div>
                <p className="text-gray-300 uppercase tracking-widest text-sm mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a
              href="/bloods"
              className="group flex items-center gap-4 px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-red-600/50 transform hover:scale-105 transition-all duration-300"
            >
              <Users className="w-7 h-7" />
              Find Donor Now
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>

            <a
              href="/dashboard"
              className="flex items-center gap-4 px-10 py-5 bg-transparent hover:bg-white/10 text-white font-bold text-lg rounded-full border-2 border-white backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-7 h-7 fill-white" />
              Register as Donor
            </a>
          </div>

          <p className="mt-16 text-gray-400 text-sm uppercase tracking-wider">
            Verified Donors • Real-Time • 100% Free • Secure
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Optional: Move animations to globals.css instead of style jsx */}
      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </>
  );
}
