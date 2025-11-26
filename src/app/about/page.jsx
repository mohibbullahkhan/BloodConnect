import React from "react";
import {
  Heart,
  Users,
  Droplet,
  Globe,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Full Width */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-10 left-10 animate-pulse">
          <Droplet className="w-20 h-20 text-red-300 opacity-50" />
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse delay-300">
          <Heart className="w-16 h-16 text-pink-300 opacity-60" />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Save Lives. One Drop at a Time.
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
            A simple, fast, and heartfelt platform to connect blood donors with
            those in urgent need.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-lg font-semibold">
              <span className="text-yellow-300">Be a Hero Today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building a community where no one waits for blood when it matters
              most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To create an easy-to-use platform that instantly connects
                verified blood donors with hospitals and individuals during
                emergencies — reducing response time and saving lives.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A world where blood shortage is never the reason someone loses
                hope. Every city, every village — connected through kindness and
                technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section - Full Width */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-10">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                MK
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Developed with Passion by
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
              Mohibbullah Khan
            </h3>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed mb-10">
              Full-Stack Developer | Lifesaver Enthusiast | Believer in
              Technology for Good
            </p>

            <p className="text-gray-600 text-base max-w-2xl mx-auto italic mb-10">
              "I built this app because I believe every second counts in an
              emergency. If this platform helps even one person find blood in
              time — my purpose is fulfilled."
            </p>

            <div className="flex justify-center gap-6">
              <a
                href="mailto:mohibbullah@example.com"
                className="p-4 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-600 transition"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 rounded-full hover:bg-black hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-100 rounded-full hover:bg-blue-600 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <p className="mt-12 text-sm text-gray-500">
              © 2025 BloodConnect • Built with Next.js, Love & Hope ❤️
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
