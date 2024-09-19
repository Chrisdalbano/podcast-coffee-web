function About() {
  return (
    <>
      <div className="flex justify-center flex-col space-y-4 h-dvh text-2xl">
        <p className="flex flex-col space-y-4 border-b border-gray-800">
          <span>
            The existentialist Coffee Break serves as a spot for the Creatives,
            Thinkers,
          </span>
          <span>
            Lovers & Coffee Passionates that are looking to feed their minds
            with some funny thoughts.
          </span>
        </p>
        <h2 className="pt-4">By joining this Network you'll find thoughts like:</h2>
        <ul className="flex flex-col w-fit border-black border-2 space-y-4 py-4">
          <li>~Newsletter Notifications</li>
          <li>~Alerts when new episodes are released.</li>
          <li>~Special Promos.</li>
          <li>~More secret features!</li>
        </ul>
      </div>
    </>
  );
}

export default About;
