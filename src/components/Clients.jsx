function Clients() {
  const clients = [
    "netflix.png",
    "secret_level.png",
    "ai_la.png",
    "hpa.png",
    "smpte.png",
    "microsoft.png",
    "universal_pictures.png",
    "sloomoo.avif",
    "project_odyssey.png",
    "machine_cinema.png",
  ];

  return (
    <section
      id="clients"
      className="bg-[#f7f3ed] py-20 px-6 sm:px-12 md:px-24 text-black"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
          Worked for / Clients Include:
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-sm sm:text-base font-medium text-gray-800">
          {clients.map((client, index) => (
            <li key={index} className="flex items-center justify-center">
              <img src={`clients/${client}`} alt="company logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Clients;
