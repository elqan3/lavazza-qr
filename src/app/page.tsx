"use client";
export default function Home() {
  const quotes = [
  "القهوة ليست مجرد مشروب، إنها لحظة هدوء.",
  "ابدأ يومك بابتسامة وفنجان قهوة.",
  "كل لحظة جميلة تبدأ بقهوة.",
  "خذ استراحة، واستمتع بلحظتك."
];
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7f2ed] p-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-[#4b2e1f]">
          مرحباً بكم في لافازا
        </h1>

        <div className="my-8">
          <div className="mx-auto w-40 h-40 rounded-full bg-[#4b2e1f] flex items-center justify-center text-white text-2xl">
            Logo
          </div>
        </div>

        <p className="text-xl italic text-gray-700">
          "{quotes}"
        </p>
      </div>
    </main>
  );
}