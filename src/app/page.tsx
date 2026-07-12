"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const quotes = [
    "القهوة ليست مجرد مشروب، إنها لحظة هدوء.",
    "ابدأ يومك بابتسامة وفنجان قهوة.",
    "كل لحظة جميلة تبدأ بقهوة.",
    "خذ استراحة، واستمتع بلحظتك."
  ];

  const [quote, setQuote] = useState("");

useEffect(() => {
  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  setQuote(randomQuote);
}, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7f2ed] p-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-[#4b2e1f]">
          مرحباً بكم في لافازا
        </h1>

        <div className="my-8">
          <img
  src="/lavaza-logo.jpg"
  alt="Lavazza Logo"
  className="mx-auto w-40 h-40 object-contain"
/>
        </div>

        <p className="text-xl italic text-gray-700">
          "{quote}"
        </p>
        <div className="mt-8">
  <a
    href="/menu"
    className="inline-block bg-[#4b2e1f] text-white px-6 py-3 rounded-full"
  >
    شاهد المنيو ☕
  </a>
</div>
      </div>
    </main>
  );
}