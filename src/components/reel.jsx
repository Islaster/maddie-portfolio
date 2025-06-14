function Reel() {
  return (
    <video
      className="px-4 sm:px-8 md:px-16"
      preload="auto"
      controls
      poster="/reel/POLYTYPIC.png"
    >
      <source src="/reel/maddie_hong_aireel25.mp4" type="video/mp4" />
    </video>
  );
}

export default Reel;
