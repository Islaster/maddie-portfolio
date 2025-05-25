function PortfolioGrid() {
  const cardsData = [
    {
      title: "Wilderness Within",
      description:
        "A finalist at Runway's Gen:48 AI filmmaking competition and featured at the Generative International Film Festival, this AI-driven horror short explores themes of mental illness and familial bonds through a surreal, forested lens. ",
      mediaType: "video",
      mediaSrc: "/portfolio/Outtakes.mp4",
    },
    {
      title: "Emergence",
      description:
        "A finalist at the 2025 Runway AI Film Festival, Emergence is a poetic short film that invites viewers into the final moments of a small creature's life, exploring themes of transformation and the ephemeral nature of existence.",
      mediaType: "image",
      mediaSrc: "/portfolio/EmergenceLaurel.png",
    },
    {
      title: "I [•••] You",
      description:
        "An AI-native short film featured on Escape.AI, awarded 2nd place in the Culver Cup.",
      mediaType: "image",
      mediaSrc: "/portfolio/IspaceYou_Hero.jpg",
    },
    {
      title: "New Shoulders",
      description:
        "An AI-generated music video produced in under two weeks, showcasing rapid prototyping in AI filmmaking.",
      mediaType: "video",
      mediaSrc: "/portfolio/Outtakes.mp4",
    },
    {
      title: "Sloomoo Institute x Backlot AI",
      description:
        "An interactive slime-to-movie installation for a public immersive museum, blending tactile play with generative visuals.",
      mediaType: "image",
      mediaSrc: "/portfolio/WWlaurel2.png",
    },
    {
      title: "Eternity (in development)",
      description:
        "A cinematic horror short reimagining Dracula through biotech, opulence, and generative AI.",
      mediaType: "image",
      mediaSrc: "/portfolio/WWlaurel2.png",
    },
    {
      title: "GenJam LA",
      description:
        "Co-lead of Machine Cinema’s film sprint and interactive showcase, fostering community and innovation in AI-driven storytelling.",
      mediaType: "image",
      mediaSrc: "/portfolio/WWlaurel2.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-24" id="work">
      <h2 className="text-3xl font-semibold mb-10">🎬 Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-[#f7f3ed] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="w-full h-48 sm:h-56 overflow-hidden">
              {card.mediaType === "image" ? (
                <img
                  src={card.mediaSrc}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={card.mediaSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioGrid;
