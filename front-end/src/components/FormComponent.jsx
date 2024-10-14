// eslint-disable-next-line react/display-name
const FormComponent = () => {
  return (
    <div id="join_form" className="newsletter-form w-max">
      <p className="heading"> Subscribe to The Good Thoughts.</p>
      <form className="form">
        <label>Name:</label>
        <input
          required=""
          placeholder="Enter your name"
          name="name"
          id="name"
          type="text"
        />
        <label>Name:</label>
        <input
          required=""
          placeholder="Enter your email address"
          name="email"
          id="email"
          type="email"
        />
        <button value="Subscribe" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
