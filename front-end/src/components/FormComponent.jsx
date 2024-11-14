import { useState, useRef } from "react";
import party from "party-js";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Using useRef to get the reference of the button
  const runButton = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subscriberData = {
      name: name,
      email: email,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/subscribe/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberData),
      });

      if (response.ok) {
        setMessage("Thanks for subscribing!");

        // Trigger confetti on the button
        if (runButton.current) {
          party.confetti(runButton.current, {
            count: party.variation.range(20, 40),
          });
        }

        setName("");
        setEmail("");
      } else {
        setMessage("Failed to subscribe. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage("An error has occurred.");
    }
  };

  return (
    <div id="join_form" className="newsletter-form w-max">
      <p className="heading">Subscribe to The Good Thoughts.</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          required
          placeholder="Enter your name"
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          required
          placeholder="Enter your email address"
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" ref={runButton}>
          Subscribe
        </button>
      </form>
      {message && (
        <p className="text-[var(--primary-color)] text-center">{message}</p>
      )}
    </div>
  );
};

export default FormComponent;
