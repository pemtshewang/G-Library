"use client";

import { useRouter } from "next/navigation";
import { getRandomQuote } from "../(data)/quotes";

export default function GButton({
  setRandomQuote,
  children,
}: {
  setRandomQuote: (quote: { author: string; quote: string } | null) => void;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <button
      onMouseEnter={() => setRandomQuote(getRandomQuote())}
      onMouseLeave={() => setRandomQuote(null)}
      className="hover:scale-105 transition-transform delay-100 font-semibold rounded-full p-3 bg-[#FC6D7C] text-white border-2 border-black"
      onClick={()=>router.push("/library")}
    >
      {children}
    </button>
  );
}
