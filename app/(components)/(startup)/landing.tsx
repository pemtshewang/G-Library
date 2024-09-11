"use client";

import Image from "next/image";
import GButton from "../button";
import { useState } from "react";

const Quote = ({
  randomQuote,
}: {
  randomQuote: {
    quote: string;
    author: string;
  };
}) => (
  <div className="w-fit">
    <blockquote className="font-semibold">{randomQuote.quote}</blockquote>
    <p className="text-center">~{randomQuote.author}</p>
  </div>
);

const LandingPage = () => {
  const [randomQuote, setRandomQuote] = useState<{
    author: string;
    quote: string;
  } | null>(null);
  return (
    <div className="">
      <div>
        {randomQuote ? (
          <Quote randomQuote={randomQuote} />
        ) : (
          <div>
            <h1>&nbsp;</h1>
            <h1>&nbsp;</h1>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Image width={250} height={250} src={"assets/logo.png"} alt="image" />
      </div>
      <div className="flex justify-center">
        <GButton setRandomQuote={setRandomQuote}>Start Reading</GButton>
      </div>
    </div>
  );
};

export default LandingPage;
