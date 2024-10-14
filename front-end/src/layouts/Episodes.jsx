import PodcastSlider from "../components/PodcastSlider";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Episodes = forwardRef((_props, _ref) => {
  return (
    <div ref={_ref}>
      <PodcastSlider />
    </div>
  );
});

export default Episodes;
