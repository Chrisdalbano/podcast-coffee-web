import Slider from "react-slick";
import PropTypes from "prop-types";

// {
//   id: 4,
//   title: "Episode 4: Ethics in the Modern World",
//   description:
//     "A look into modern ethical dilemmas and how philosophy can help.",
//   duration: "50 mins",
// },

// Custom Next Arrow component
function GreekNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        color: "red",
      }}
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow component
function GreekPreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        color: "green",
      }}
      onClick={onClick}
    />
  );
}

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <GreekNextArrow />,
  prevArrow: <GreekPreviousArrow />,
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

const PodcastSlider = ({ episodes }) => {
  if (!episodes || episodes.length === 0) {
    return <div>No episodes available.</div>;
  }

  return (
    <section className="podcast-slider-section py-10">
      <div className="container  px-5 text-[var(--primary-color)]">
        <h2 className="text-fluid-lg text-[var(--complementary-color)] font-bold mb-5">
          Latest Podcast Episodes
        </h2>
        <Slider {...sliderSettings} className="overflow-hidden">
          {episodes.map((episode) => (
            <div key={episode.id} className="p-4">
              <div className="bg-[var(--contrast-color)] overflow-hidden">
                <div className="p-4">
                  <h3 className="text-fluid-lg font-bold mb-2">
                    {episode.title}
                  </h3>
                  <p className="mb-3 text-fluid-base">{episode.description}</p>
                  <span className="block">{episode.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

// PropTypes validation
PodcastSlider.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PodcastSlider;
