import Image from 'next/image';

export default function AboutUs() {
  return (
    <section aria-labelledby="about-heading" className="py-16 bg-[#fff]">
      <div className="px-2 max-w-[78.125rem] w-full mx-auto">
        <h2 id="about-heading" className="text-heading text-primary-heading font-heading pb-7">
          About Us
        </h2>

        <div className="flex gap-8 w-full max-[1200px]:flex-col">
          <div className="overflow-hidden rounded-sm shrink-0">
            {/* ✅ SEO: Descriptive alt text for the image */}
            <Image
              src="/images/abt.png"
              width={575}
              height={400}
              alt="House of Inasal restaurant – serving authentic Filipino grilled meals"
              className="object-cover"
              priority
            />
          </div>

          <article className="flex-1 font-ui py-4 px-4 w-min font-light w-full">
            <p className="mb-6">
              House of Inasal is your local Grill Expert, loved for its Ihaw-Sarap (deliciously
              grilled) meals and Unli-Saya (unlimited fun) dining experience that brings people
              together.
            </p>
            <p className="mb-6">
              Since we opened our doors, we've welcomed locals and visitors from all walks of life.
              While the look of our store has evolved, our heart remains the same: great-tasting
              grilled food, warm service, and unforgettable moments.
            </p>
            <p className="mb-6">
              Our menu features bestsellers like Chicken Inasal, Pork BBQ, Extra Creamy Halo-Halo,
              and Palabok, all flavor-packed and prepared fresh every day. These favorites are
              enjoyed by customers who keep coming back for more.
            </p>
            <p className="mb-6">
              At House of Inasal, we make it easy to enjoy your favorites through dine-in, takeout,
              or online delivery — however you like it, we've got you covered.
            </p>
            <p className="mb-6">
              Craving delicious grilled meals? Order your House of Inasal favorites today and stay
              updated on our newest products, exclusive promos, and exciting announcements!
            </p>
            <div className="pt-2">
              <button
                aria-label="Learn more about House of Inasal"
                className="py-3 px-6 bg-[#2d9751] text-white rounded-sm flex items-center gap-2 cursor-pointer hover:bg-[#06481F] transition-colors duration-500"
              >
                <span className="text-sm font-ui font-medium">Learn More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3.5"
                  stroke="white"
                  className="size-4"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
