"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const quotes = [
    "القهوة ليست مجرد مشروب، إنها لحظة هدوء.",
    "ابدأ يومك بابتسامة وفنجان قهوة.",
    "كل لحظة جميلة تبدأ بقهوة.",
    "خذ استراحة، واستمتع بلحظتك.",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote =
      quotes[Math.floor(Math.random() * quotes.length)];

    setQuote(randomQuote);
  }, []);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-[#f8f1ea] to-[#efe2d5] flex items-center justify-center px-5 py-10"
    >
      <section className="w-full max-w-sm text-center">

        {/* Welcome */}
        <h1 className="text-3xl font-bold text-[#4b2e1f] leading-relaxed">
          مرحباً بكم في
          <br />
          لافازا ☕
        </h1>

        {/* Logo */}
        <div className="my-10 flex justify-center">
          <div className="bg-white rounded-full w-52 h-52 flex items-center justify-center shadow-xl p-8">
            <img
              src="/lavaza-logo.jpg"
              alt="Lavazza Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Quote Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl px-6 py-8 shadow-lg border border-white">

          <span className="text-4xl text-[#8b5e3c]">
            “
          </span>

          <p className="text-xl leading-loose text-[#4b2e1f] italic">
            {quote}
          </p>

          <span className="text-4xl text-[#8b5e3c]">
            ”
          </span>

        </div>


        {/* Menu Button */}
        <a
          href="/menu"
          className="mt-10 block w-full bg-[#4b2e1f] text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:bg-[#362015] transition"
        >
          مشاهدة المنيو ☕
        </a>


        {/* Footer */}
        <p className="mt-8 text-sm text-[#765846]">
          استمتع بلحظتك مع لافازا
        </p>

      </section>
    </main>
  );
}