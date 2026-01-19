export function Banner() {
  return (
    <section 
      className="w-full bg-black bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/const-mfg-slide.png')",
        aspectRatio: "16 / 9",
      }}
    >
      <div className="w-full h-full flex flex-col justify-end items-center pb-[12%] pl-[15%]">
        <p className="text-white text-center text-sm md:text-base lg:text-lg leading-relaxed">
          Constitution MFG delivers uncompromising quality in precision parts
          <br />
          manufacturing. Built on American values of excellence, integrity,
          <br />
          and craftsmanship.
        </p>
      </div>
    </section>
  )
}

