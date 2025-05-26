function Home() {
  return (
    <section
      id="home"
      className="pt-[122px] bg-[#f7f3ed] md:min-h-screen px-6 sm:px-12 md:px-24 flex flex-col md:flex-row items-center md:items-center md:justify-between gap-12"
    >
      {/* Left Side: Text */}
      <div className="max-w-[698px] h-auto space-y-4 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-none font-light font-[Montserrat]">
          Hello!
          <br />
          <span className="font-normal md:leading-[1.18]">
            My name is Maddie.
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-[32px] font-light leading-none font-[Montserrat] flex justify-center md:justify-start">
          <span className="typing-wrapper relative inline-block">
            <span className="typing">Let’s create.</span>
            <span className="cursor absolute right-0 top-0">|</span>
          </span>
        </p>
      </div>

      {/* Right Side: Image */}

      <div className="relative w-[280px] sm:w-[360px] md:w-[536px] h-auto sm:h-[420px] md:h-[560px]">
        {/* Pink background */}
        <div className="absolute top-0 left-0 w-full h-full !bg-[#FB66FF] rounded-[60px] z-0" />

        {/* Image wrapper offset */}
        <div className="relative w-full h-full overflow-hidden rounded-[60px] top-4 sm:top-8 md:top-10 right-4 sm:right-10 md:right-20">
          <img
            src="/home/image.webp"
            alt="Maddie"
            className="w-full h-auto object-cover z-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
