import { useState } from "react";

// eslint-disable-next-line react/display-name
const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        setMessage("Thanks for subscribing! ");
        setName("");
        setEmail("");
      } else {
        setMessage("Failed to subscribed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage("An error has occurred.");
    }
  };

  return (
    <div id="join_form" className="newsletter-form w-max">
      <p className="heading"> Subscribe to The Good Thoughts.</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          required
          placeholder="Enter your name"
          name="name"
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Name:</label>
        <input
          required
          placeholder="Enter your email address"
          name="email"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button value="Subscribe" type="submit">
          Subscribe
        </button>
      </form>
      {message && <p className="text-[var(--primary-color)] text-center">{message}</p>}
    </div>
  );
};

export default FormComponent;
