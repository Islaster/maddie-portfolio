function Connect() {
  return (
    <section
      id="connect"
      className="bg-white py-20 px-6 sm:px-12 md:px-24 text-black"
    >
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">🌐 Let’s Connect</h2>

        <p className="text-lg text-gray-700">
          Maddie is always open to collaboration—whether you're a musician
          exploring generative visuals, a studio seeking creative AI direction,
          or a curator building the next wave of hybrid art.
        </p>

        <p className="text-base text-gray-600 italic">
          Reach out for: Creative commissions · Collaborations · Speaking
          engagements · AI story consultation · Teaching/workshops
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4 text-sm font-medium">
          <a
            href="https://www.instagram.com/hmdehong"
            className="hover:underline"
            target="_blank"
          >
            👉 Instagram
          </a>
          <a
            href="https://linkedin.com/in/maddiehong"
            className="hover:underline"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="mailto:maddiehmhong@gmail.com" className="hover:underline">
            Email
          </a>
          <span className="text-gray-400">[Newsletter coming soon]</span>
        </div>
      </div>
    </section>
  );
}

export default Connect;
