import React, {
  useState,
} from "react";

function Contact() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [message, setMessage] =
    useState("");

  const [errors, setErrors] =
    useState({});

  const [success, setSuccess] =
    useState("");

  function validateForm() {
    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name =
        "Name is required.";
    }

    if (email.trim() === "") {
      newErrors.email =
        "Email is required.";
    } else if (
      !email.includes("@") ||
      !email.includes(".")
    ) {
      newErrors.email =
        "Enter a valid email address.";
    }

    if (phone.trim() === "") {
      newErrors.phone =
        "Phone number is required.";
    } else if (
      phone.length !== 10 ||
      isNaN(phone)
    ) {
      newErrors.phone =
        "Enter a valid 10 digit phone number.";
    }

    if (message.trim() === "") {
      newErrors.message =
        "Message is required.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSuccess("");

    const validationErrors =
      validateForm();

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors)
        .length === 0
    ) {
      setSuccess(
        "Your message has been sent successfully!"
      );

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrors({});
    }
  }

  return (
    <div className="page">

      <div className="page-header">

        <span>
          GET IN TOUCH
        </span>

        <h1>
          Contact CrickPluse
        </h1>

        <p>
          Have a question? Send us a message.
        </p>

      </div>

      <div className="contact-card">

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Name
            </label>

            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(event) =>
                setName(
                  event.target.value
                )
              }
            />

            {errors.name && (
              <p className="error-message">
                {errors.name}
              </p>
            )}

          </div>

          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="text"
              value={email}
              placeholder="Enter your email"
              onChange={(event) =>
                setEmail(
                  event.target.value
                )
              }
            />

            {errors.email && (
              <p className="error-message">
                {errors.email}
              </p>
            )}

          </div>

          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              type="text"
              value={phone}
              placeholder="Enter 10 digit phone number"
              onChange={(event) =>
                setPhone(
                  event.target.value
                )
              }
            />

            {errors.phone && (
              <p className="error-message">
                {errors.phone}
              </p>
            )}

          </div>

          <div className="form-group">

            <label>
              Message
            </label>

            <textarea
              value={message}
              placeholder="Enter your message"
              onChange={(event) =>
                setMessage(
                  event.target.value
                )
              }
            />

            {errors.message && (
              <p className="error-message">
                {errors.message}
              </p>
            )}

          </div>

          <button
            type="submit"
            className="primary-button"
          >
            Send Message
          </button>

        </form>

        {success && (
          <p className="success-message">
            {success}
          </p>
        )}

      </div>

    </div>
  );
}

export default Contact;