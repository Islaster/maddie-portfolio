function WhatIDo() {
  return (
    <section id="what-i-do" className="text-black py-16 px-6 sm:px-12 md:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light mb-12">
          ✨ <span className="font-medium">What I Do</span>
        </h2>

        <div className="space-y-10">
          {/* Item */}
          <div>
            <h3 className="text-xl font-semibold">
              AI Storytelling & Filmmaking
            </h3>
            <p className="text-gray-700 mt-2">
              From experimental music videos to narrative shorts that adapt in
              real time, Maddie explores how machine intelligence can reshape
              cinematic language and production workflows.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Creative Direction & Curation
            </h3>
            <p className="text-gray-700 mt-2">
              Maddie leads curatorial and production efforts at events like AI
              on the Lot and GenJam, bridging the gap between traditional
              creatives and emerging technologists.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Toolmaking & Prototyping</h3>
            <p className="text-gray-700 mt-2">
              She develops and tests AI tools that empower artists—from avatar
              pipelines to generative prompts to audience-responsive
              experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Workshops & Community Building
            </h3>
            <p className="text-gray-700 mt-2">
              Maddie designs interactive workshops on AI filmmaking, hybrid
              aesthetics, and ethical creativity for festivals, schools, and
              studios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
