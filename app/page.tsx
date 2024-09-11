import { Metadata } from "next";
import LandingPage from "./(components)/(startup)/landing";

export const metadata: Metadata = {
  title: "G-Library",
  description: "The G-Library of choice",
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <LandingPage />
    </div>
  );
}
