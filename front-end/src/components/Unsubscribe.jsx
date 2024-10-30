import { useState } from "react";

// eslint-disable-next-line react/display-name
const Unsubscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subscriberData = {
      email: email,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/unsubscribe/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(subscriberData),
      });
      if (response.ok) {
        setMessage("Sad to see you go. You have unsubscribed. ");
        setEmail("");
      } else {
        setMessage("Failed to unsubscribed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      setMessage("An error has occurred.");
    }
  };

  return (
    <div id="join_form" className="newsletter-form w-max">
      <p className="heading"> You are about to unsubscribe.</p>
      <form className="form" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          required
          placeholder="Enter your email address to unsubscribe"
          name="email"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button value="Unsubscribe" type="submit">
          Unsubscribe
        </button>
      </form>
      {message && (
        <p className="text-[var(--primary-color)] text-center">{message}</p>
      )}
    </div>
  );
};

export default Unsubscribe;
