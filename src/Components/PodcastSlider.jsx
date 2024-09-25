import Slider from "react-slick";

// Dummy data for episodes until we set up a backend
const episodes = [
  {
    id: 1,
    title: "Episode 1: Introduction to Philosophy",
    description:
      "In this episode, we explore the basics of philosophy and the big questions.",
    duration: "45 mins",
  },
  {
    id: 2,
    title: "Episode 2: Socratic Method",
    description:
      "We dive into the Socratic method and how it shaped philosophical inquiry.",
    duration: "55 mins",
  },
  {
    id: 3,
    title: "Episode 3: Existentialism and Coffee",
    description:
      "What do coffee and existentialism have in common? Find out in this episode.",
    duration: "60 mins",
  },
  {
    id: 4,
    title: "Episode 4: Ethics in the Modern World",
    description:
      "A look into modern ethical dilemmas and how philosophy can help.",
    duration: "50 mins",
  },
];

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PodcastSlider = () => {
  return (
    <section className="podcast-slider-section py-10">
      <div className="container  px-5 text-[var(--primary-color)]">
        <h2 className="text-fluid-lg text-[var(--complementary-color)] font-bold mb-5">
          Latest Podcast Episodes
        </h2>
        <Slider {...sliderSettings}>
          {episodes.map((episode) => (
            <div key={episode.id} className="p-4">
              <div className="bg-[var(--contrast-color)]  overflow-hidden">
                <div className="p-4">
                  <h3 className="text-fluid-lg font-bold mb-2">
                    {episode.title}
                  </h3>
                  <p className=" mb-3 text-fluid-base">{episode.description}</p>
                  <span className="block ">{episode.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PodcastSlider;
