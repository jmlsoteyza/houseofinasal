import Image from 'next/image';

export default function AboutUs() {
  return (
    <section aria-labelledby="about-heading" className="py-16 bg-[#fff]">
      <div
        className="px-5 max-w-[78.125rem] w-full mx-auto
      max-[1200px]:px-20
      max-md:px-5
      "
      >
        <h2 id="about-heading" className="text-heading text-primary-heading font-heading pb-7">
          About Us
        </h2>

        <div
          className="flex gap-2 w-full 
        max-[1200px]:flex-col
        "
        >
          <div
            className="overflow-hidden relative rounded-sm shrink-0 w-full 
          max-w-[575px]
          max-[1200px]:max-w-none 
          max-[1200px]:aspect-[575/400]
          "
          >
            <Image
              src="/images/abt.png"
              alt="House of Inasal restaurant – serving authentic Filipino grilled meals"
              className="object-cover rounded-sm w-full
              max-[1200px]:object-fill
              "
              sizes="(max-width: 1200px) 100vw, 575px"
              priority
              fill
            />
          </div>

          <article
            className="flex-1 font-ui px-8 pt-4 font-ui
           max-[1200px]:px-0"
          >
            <p className="mb-5">
              House of Inasal brings the beloved Filipino grill tradition to the heart of the UAE —
              serving Ihaw-Sarap (deliciously grilled) meals and the Unli-Saya (unlimited fun)
              dining experience that Filipinos know and love.
            </p>

            <p className="mb-5">
              Find us at Sahara Centre, right on the Dubai-Sharjah border — making us easy to reach
              whether you're coming from Dubai, Sharjah, or anywhere in between.
            </p>

            <p className="mb-5">
              Our menu is built around the classics: Chicken Inasal, Pork BBQ, Palabok, and our
              Extra Creamy Halo-Halo — all made fresh daily and packed with the flavors that keep
              our customers coming back.
            </p>

            <p className="mb-5">
              Whether you're dining in, grabbing takeout, or ordering through delivery — we've made
              it easy to get your fill of home-cooked Filipino grilling, right here in the UAE.
            </p>

            <p className="mb-5">
              We're newly open and just getting started. Follow us to stay updated on new dishes,
              promos, and everything happening at House of Inasal.
            </p>
            <div className="pt-5">
              <a
                href="/location"
                aria-label="Find House of Inasal location"
                className="inline-flex items-center gap-2 py-3 px-6 bg-[#2d9751] text-white rounded-sm hover:bg-[#06481F] transition-colors duration-500"
              >
                <span className="text-sm font-ui font-medium">Find Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3.5"
                  stroke="currentColor"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
