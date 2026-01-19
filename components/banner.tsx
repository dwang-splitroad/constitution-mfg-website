import Image from "next/image"

export function Banner() {
  return (
    <section className="w-full bg-black">
      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col items-center pt-2 pb-6 overflow-hidden">
        <div className="w-full px-4">
          <Image
            src="/const-mfg-slide.png"
            alt="Constitution MFG precision manufacturing"
            width={800}
            height={450}
            className="w-full h-auto -my-12"
            priority
          />
        </div>
        <div className="px-6 pb-2">
          <p className="text-white text-center text-sm leading-relaxed">
            Constitution MFG delivers uncompromising quality in precision parts
            manufacturing. Built on American values of excellence, integrity,
            and craftsmanship.
          </p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div 
        className="hidden md:block w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/const-mfg-slide.png')",
          aspectRatio: "16 / 9",
        }}
      >
        <div className="w-full h-full flex flex-col justify-end items-center pb-[12%] pl-[15%]">
          <p className="text-white text-center text-base lg:text-lg leading-relaxed">
            Constitution MFG delivers uncompromising quality in precision parts
            <br />
            manufacturing. Built on American values of excellence, integrity,
            <br />
            and craftsmanship.
          </p>
        </div>
      </div>
    </section>
  )
}

