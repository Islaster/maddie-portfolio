function Clients() {
  const clients = [
    "Netflix",
    "Secret Level",
    "AI LA",
    "Hollywood Professional Association",
    "SMPTE",
    "Microsoft",
    "Universal Pictures",
    "Sloomoo",
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
            <li key={index} className="hover:text-black">
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Clients;
