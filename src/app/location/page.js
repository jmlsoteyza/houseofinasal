import Image from 'next/image';

export default function Location() {
  const deliveryLinks = [
    {
      label: 'Noon',
      href: 'https://www.noon.com',
      img: 'https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg',
      bg: '#feee00'
    },
    {
      label: 'Talabat',
      href: 'https://www.talabat.com',
      img: 'https://www.talabat.com/assets/images/remix-logo.svg',
      bg: '#ff5900'
    }
  ];
  return (
    <section className="w-full">
      <div className="h-[250px] w-full bg-green-800">Save this later</div>

      <section className="px-8 py-10 my-24 mx-auto rounded-lg max-w-[1260px] shadow-[0_0_10px_0_rgba(0,0,0,.1)]">
        <div className="flex flex-row gap-12">
          {/* map */}
          <div className="rounded-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.369242260709!2d55.371426302757705!3d25.29712093594576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d000e4942b1%3A0x7dfc6b67a1eba9!2sHouse%20Of%20Inasal%20UAE!5e1!3m2!1sen!2sae!4v1773902819331!5m2!1sen!2sae"
              width="650"
              height="600"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>

          {/* info */}
          <div className="flex flex-col justify-between py-4 font-ui">
            <div>
              <p className="text-2xl font-medium mb-2">Find Us</p>
              <p className="text-md mb-6 text-[#8e8e8e]">Filipino Inasal in the heart of Sharjah</p>

              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm mb-1 font-[500]">Address</p>
                  <p className="text-md text-[#8e8e8e]">
                    Food Court, 1st Floor, Sahara Centre, Sahara Atrium, East Atrium, Sharjah, UAE
                  </p>
                </div>

                <div>
                  <p className="text-sm  mb-1 font-[500]">Business Hours</p>
                  <p className="text-md text-[#8e8e8e]">Mon – Fri · 11:00am – 11:00pm</p>
                  <p className="text-md text-[#8e8e8e]">Sat – Sun · 10:00am – 12:00am</p>
                </div>

                <div>
                  <p className="text-sm mb-1 font-[500]">Contact</p>
                  <p className="text-md text-[#8e8e8e]">+971 600 560 031</p>
                  <p className="text-md text-[#8e8e8e]">houseofinasal@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm mb-1 font-[500]">Services</p>
                  <div>
                    <p className="text-md mb-2 text-[#8e8e8e]">
                      Dine-In , Take Out, Call & Pickup , Delivery
                    </p>
                    <div className="flex align-center gap-3 mt-2">
                      {deliveryLinks.map((d) => (
                        <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer">
                          <div
                            className="h-6 w-full rounded-md flex items-center justify-center w-[50] h-[40] px-2"
                            style={{ backgroundColor: d.bg }}
                          >
                            <Image src={d.img} alt={`${d.label}-logo`} width={50} height={50} />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/House+Of+Inasal+UAE/@25.2641209,55.3016143,14673m/data=!3m1!1e3!4m10!1m2!2m1!1sHouse+Of+Inasal+UAE!3m6!1s0x3e5f5d000e4942b1:0x7dfc6b67a1eba9!8m2!3d25.2972627!4d55.3721536!15sChNIb3VzZSBPZiBJbmFzYWwgVUFFWhUiE2hvdXNlIG9mIGluYXNhbCB1YWWSAQxzb3VwX2tpdGNoZW6aAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjVDTkdKWVFrOWhWbVJUVTNwQk0xVXlaRVpWVkd4c1dUSmtibEZYWXhBQuABAPoBBQiBAhA6!16s%2Fg%2F11xw73nty8?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
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
