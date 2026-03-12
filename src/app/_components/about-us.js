import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="py-16 bg-green-100">
      <div className="px-6 max-w-[1250px] w-full mx-auto">
        <p className="text-heading text-primary-heading font-heading pb-7">About Us</p>
        <div className="flex gap-12 w-full">
          <div className="overflow-hidden rounded-lg shrink-0">
            <Image
              src="/images/aboutusimage.png"
              width={480}
              height={480}
              alt="not yet"
              className="object-cover"
            />
          </div>
          <div className="flex-1 font-primary py-4 px-8 max-w-[65ch] text-medium text-gray-700">
            <p className="mb-6">
              Mang Inasal is the Philippines’ Grill Expert, loved for its Ihaw-Sarap (deliciously
              grilled) meals and Unli-Saya (unlimited fun) dining experience.
            </p>
            <p className="mb-6">
              Since 2003, we’ve welcomed locals and visitors from around the world. While the look
              of our stores has evolved, our heart remains the same: great-tasting grilled food,
              warm service, and unforgettable moments.
            </p>
            <p className="mb-6">
              Our menu features bestsellers like Chicken Inasal, Pork BBQ, Extra Creamy Halo-Halo,
              and Palabok, all flavor-packed and prepared fresh every day. These favorites are
              enjoyed by millions nationwide.
            </p>
            <p className="mb-6">
              With over 570 stores across the Philippines, Mang Inasal makes it easy to enjoy your
              favorites through dine-in, takeout, drive-thru, or online delivery.
            </p>
            <p className="mb-6">
              Craving delicious grilled meals? Order your Mang Inasal favorites today and stay
              updated on our newest products, exclusive promos, and exciting announcements.
            </p>
            <button>Test</button>
          </div>
        </div>
      </div>
    </div>
  );
}
