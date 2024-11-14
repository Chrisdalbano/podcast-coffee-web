import Slider from "react-slick";
import PropTypes from "prop-types";

// Custom Next Arrow component
function CustomNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style, backgroundColor: "transparent" }}
      aria-label="Next"
      onClick={onClick}
    />
  );
}

// Custom Previous Arrow component
function CustomPreviousArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style, backgroundColor: "transparent" }}
      aria-label="Previous"
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
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPreviousArrow />,
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
    return (
      <div className="text-center text-gray-500">No episodes available.</div>
    );
  }

  return (
    <section className="podcast-slider-section py-10 bg-[var(--primary-color)]  ">
      <div className="container mx-auto px-5">
        <h2 className="text-[var(--complementary-color)]  mb-5 text-center">
          Latest Podcast Episodes
        </h2>
        <Slider {...sliderSettings}>
          {episodes.map((episode) => (
            <div key={episode.id} className="p-4">
              <div className="bg-[var(--contrast-color)] text-[var(--primary-color)]   overflow-hidden transition-transform transform hover:scale-105">
                <div className="p-5">
                  <h3 className="font-bold mb-2 text-[var(--primary-color)]">
                    {episode.title}
                  </h3>
                  <p className="text-[var(--primary-color)] mb-4">
                    {episode.description}
                  </p>
                  <span className="block text-sm text-[var(--primary-color)] opacity-70">
                    {episode.duration}
                  </span>
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
