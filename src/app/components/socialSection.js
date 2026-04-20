export default function SocialSection() {
  const socialIcons = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/houseofinasaluae/',
      bg: 'bg-[#1877F2]',
      icons: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/house_of_inasal/',
      bg: 'bg-gradient-to-br from-[#fdf497] via-[#fd5949] to-[#285AEB]',
      icons: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
        </svg>
      )
    },
    {
      label: 'Tiktok',
      href: 'https://www.tiktok.com/@house_of_inasal',
      bg: 'bg-[#010101]',
      icons: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
        </svg>
      )
    }
  ];

  const deliveryIcons = [
    {
      label: 'Talabat',
      href: 'https://www.talabat.com/uae/restaurant/763104/house-of-inasal-al-nahda?aid=1518',
      icons: (
        <svg width="36" height="36" viewBox="0 0 56 56">
          <rect width="56" height="56" rx="12" fill="#FF6F00" />
          <text
            x="50%"
            y="57%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            talabat
          </text>
        </svg>
      )
    },
    {
      label: 'Noon',
      href: 'http://noon.com/',
      icons: (
        <svg width="36" height="36" viewBox="0 0 56 56">
          <rect width="56" height="56" rx="12" fill="#F8D000" />
          <text
            x="50%"
            y="57%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#222"
            fontSize="11"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            noon
          </text>
        </svg>
      )
    },
    {
      label: 'Keeta',
      href: 'https://www.keeta-global.com/AE/en',
      icons: (
        <svg width="36" height="36" viewBox="0 0 56 56">
          <rect width="56" height="56" rx="12" fill="#1A1A1A" />
          <text
            x="50%"
            y="57%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#F5C842"
            fontSize="11"
            fontWeight="700"
            fontFamily="sans-serif"
          >
            keeta
          </text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-14 px-5 max-md:px-5">
      <section className="max-w-[78.125rem] w-full mx-auto">
        {/* Title */}
        <div className="mb-4">
          <h2 className="text-lg max-md:text-base font-semibold text-gray-500 uppercase tracking-widest">
            Find Us Everywhere
          </h2>
        </div>

        {/* Cards */}
        <section className="grid grid-cols-2 max-md:grid-cols-1 w-full gap-6 max-md:gap-6">
          {/* Left Card — Social Media */}
          <div className="flex flex-col justify-between bg-[#F0F7F2] p-7 max-md:p-6 rounded-2xl min-h-[250px] max-md:min-h-[220px]">
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-wider uppercase text-[#1D5C3A]">
                Stay Connected
              </span>
              <span className="text-2xl max-md:text-xl font-bold text-[#1a1a1a]">
                Follow us on
                <br />
                social media
              </span>
            </div>

            <div className="flex gap-4 max-md:gap-3 flex-wrap">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 max-md:w-11 max-md:h-11 rounded-xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110 ${s.bg}`}
                >
                  {s.icons}
                </a>
              ))}
            </div>

            <p className="text-xs text-[#4A8C6A]">Like, follow & share for the latest promos 🍗</p>
          </div>

          {/* Right Card — Delivery */}
          <div className="flex flex-col justify-between bg-[#1D5C3A] rounded-2xl p-7 max-md:p-6 min-h-[250px] max-md:min-h-[220px]">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold tracking-wider uppercase text-[#7EC8A0]">
                Online Delivery
              </span>
              <span className="text-2xl max-md:text-xl font-bold text-white">
                Order to your
                <br />
                doorstep
              </span>
            </div>

            <div className="grid grid-cols-3 gap-12 max-md:gap-3 max-w-md:wrap">
              {deliveryIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg py-2 px-3 max-md:px-2 flex flex-row items-center gap-2 transition-transform hover:scale-105"
                >
                  {s.icons}
                  <span className="text-xs font-semibold text-gray-700">{s.label}</span>
                </a>
              ))}
            </div>

            <p className="text-xs text-[#8FC9A8]">Available for delivery in your area</p>
          </div>
        </section>
      </section>
    </section>
  );
}
