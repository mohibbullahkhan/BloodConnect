import Collaborators from "@/components/Collabrates";
import Hero from "@/components/Hero";
import HowToGetBlood from "@/components/HowToGetBlood";
import Mission from "@/components/Mission";
import Testimonial from "@/components/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div
    //  className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black"
    >
      <Hero />
      <Mission />
      <Collaborators />
      <HowToGetBlood />
      <Testimonial />
    </div>
  );
}
