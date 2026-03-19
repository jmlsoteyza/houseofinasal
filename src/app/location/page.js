export default function Location() {
  return (
    <section className="w-full">
      <div className="h-[250px] w-full bg-green-800 mb-8">Save this later</div>
      <section className="px-6 py-16 mx-auto max-w-[1250px]">
        <div className="flex flex-row gap-12">
          {/* map */}
          <div className="rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.369242260709!2d55.371426302757705!3d25.29712093594576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d000e4942b1%3A0x7dfc6b67a1eba9!2sHouse%20Of%20Inasal%20UAE!5e1!3m2!1sen!2sae!4v1773902819331!5m2!1sen!2sae"
              width="720"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>

          {/* info */}
          <div className="flex flex-col justify-between py-4">
            <div>
              <p className="text-2xl font-medium mb-2">Find Us</p>
              <p className="text-gray-500 text-sm mb-8">
                Authentic Filipino Inasal in the heart of Sharjah
              </p>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Address</p>
                  <p className="text-sm">
                    Food Court, 1st Floor, Sahara Centre, Sahara Atrium, East Atrium, Sharjah, UAE
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">Hours</p>
                  <p className="text-sm">Mon – Fri · 11:00am – 11:00pm</p>
                  <p className="text-sm">Sat – Sun · 10:00am – 12:00am</p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">Phone</p>
                  <p className="text-sm">+971 XX XXX XXXX</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=House+Of+Inasal+UAE"
              target="_blank"
              rel="noopener
            noreferrer"
              className="mt-8 bg-[#27AE60] text-white text-sm font-semibold text-center
            py-3 rounded-lg hover:bg-[#1a8a47] transition-colors duration-200"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
