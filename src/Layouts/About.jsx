/* eslint-disable react/display-name */
import GreekTemple from "../assets/images/greek-temple.svg";
import { forwardRef } from "react";

const About = forwardRef((_props, ref) => {
  return (
    <>
      <section ref={ref} className="mx-4 lg:mx-12">
        <div className="space-y-8 flex flex-col">
          <h2>Your Brainfood Spot.</h2>
          <p className="text-fluid-lg">
            This podcast was created to create a thinking, relaxing and
            entertaining space about core topics of our lives, and how do they
            relate to historical moments of western and modern philosophy.{" "}
            <span className="italic font-serif">
              Yes, its not entirely related to Coffee as a whole, but you will
              sure enjoy it better with a cup in your hand.
            </span>
          </p>
          <div className="flex">
            <div className="w-[30%]">
              <img src={GreekTemple} alt="" />
            </div>
            <div className="w-[70%] space-y-8">
              <p>
                We try to define beauty and aesthetics of thinking & coffee,
                understand the purpose of art and beauty, put forward a theory
                on the evolution of reason, and understand the role of taste
                makers & critics in mind.
              </p>
              <p>
              This A-plus Philosophy Podcast is for listeners, by thinkers- to hopefully explain to you the key stuff you&#39;ll need to know to get through life.
              </p>
              <p>Thanks again for being here, we are glad to have you.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}) 

export default About;
