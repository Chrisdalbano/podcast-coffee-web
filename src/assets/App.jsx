import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Headline from "../Layouts/Headline";
import Navbar from "../Components/Navbar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Headline />

      {/* <Routes>
        <Route path="/" element={<Home HomeText={'this is the home text!'}/>}/>
        <Route path="categories" element={<Categories/>}/>
      </Routes> */}
      <div className="pt-8 mx-12">
        <p className="pt-4">
          The existentialist Coffee Break serves as a spot for the creatives,
          thinkers, lovers & coffee adicts that are looking to feed their minds
          with some funny toughts.
        </p>
        <h2 className="pt-4">
          By joining this Network you'll get cool stuff like:
        </h2>
        <ul className=" border-black border-2">
          <li>-Newsletter Notifications</li>
          <li>-Alerts when new episodes are released.</li>
          <li>-Special Promos.</li>
          <li>-More secret features!</li>
        </ul>
      </div>
    </>
  );
}

export default App;
