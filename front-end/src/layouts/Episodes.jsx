import { useEffect, useState, forwardRef } from "react";
import PodcastSlider from "../components/PodcastSlider";

// eslint-disable-next-line react/display-name
const Episodes = forwardRef((_props, _ref) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    // Fetch episodes from the backend API
    fetch("http://127.0.0.1:8000/api/episodes/")
      .then((response) => response.json())
      .then((data) => setEpisodes(data))
      .catch((error) => console.error("Error fetching episodes:", error));
  }, []);

  return (
    <div ref={_ref} className="my-10">
      {/* Pass episodes data to PodcastSlider */}
      <PodcastSlider episodes={episodes} />
    </div>
  );
});

export default Episodes;
