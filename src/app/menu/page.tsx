import Image from "next/image";

const menus = [
  "/menu/menu1.jpg",
  "/menu/menu2.jpg",
  "/menu/menu3.jpg",
  "/menu/menu4.jpg",
  "/menu/menu5.jpg",
  "/menu/menu6.jpg",
  "/menu/menu7.jpg",
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-lavaza-blue via-[#16284a] to-[#0d1830] text-white">

      {/* ================= Header ================= */}

     {/* ================= Header ================= */}

<header className="sticky top-0 z-20 backdrop-blur-xl bg-[#102040]/85 border-b border-white/10">

  <div className="max-w-md mx-auto px-6 py-2 text-center">

    <Image
      src="/menu/logo.png"
      alt="Lavaza Logo"
      width={125}
      height={125}
      priority
      className="mx-auto select-none drop-shadow-2xl"
    />

    <h1
      className="mt-4 text-[2rem] font-extrabold text-white tracking-tight"
    >
      منيو لافازا مود
    </h1>

    <h2
      className="font-jakarta mt-1 text-[1.05rem] font-semibold tracking-[0.35em] uppercase text-yellow-400"
    >
      LAVAZA MOOD MENU
    </h2>

    <div className="w-24 h-[3px] bg-yellow-400 rounded-full mx-auto mt-5 mb-5" />

    <p className="text-white/70 text-sm leading-7">
      استمتع بأفضل المشروبات الساخنة والباردة
      <br />
      والحلويات المحضرة بعناية
    </p>

  </div>

</header>

      {/* ================= Menu ================= */}

      <section className="py-8">

        <div className="max-w-md mx-auto px-4 space-y-8">

          {menus.map((image, index) => (

            <article
              key={image}
              className="
                rounded-[30px]
                overflow-hidden
                bg-white/95
                shadow-[0_25px_70px_rgba(0,0,0,.35)]
                ring-1
                ring-white/10
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_30px_80px_rgba(0,0,0,.45)]
              "
            >

              {/* Card Header */}

         <div className="flex items-center justify-between bg-lavaza-blue px-5 py-4">

    <span className="font-jakarta text-xs uppercase tracking-[0.25em] text-white/80">
        Menu
    </span>

   <span className="font-jakarta bg-yellow-400 text-[#16284a] text-xs font-bold rounded-full px-4 py-2 shadow-md">
  {index + 1}
</span>
</div>

              {/* Menu Image */}

              <Image
                src={image}
                alt={`Lavaza Menu ${index + 1}`}
                width={1500}
                height={2200}
                quality={100}
                loading="lazy"
                className="
                  w-full
                  h-auto
                  object-contain
                  bg-white
                  transition-transform
                  duration-500
                  hover:scale-[1.02]
                "
              />

            </article>

          ))}

        </div>

      </section>

      {/* ================= Footer ================= */}

      <footer className="border-t border-white/10 mt-10">

        <div className="max-w-md mx-auto px-6 py-10 text-center">

          <Image
            src="/menu/logo.png"
            alt="Lavaza"
            width={55}
            height={55}
            className="mx-auto mb-4 opacity-80"
          />

     
          <p className="mt-3 text-sm text-white/60">
            نتمنى لكم تجربة ممتعة في Lavaza MOOD
          </p>

        </div>

      </footer>

    </main>
  );
}