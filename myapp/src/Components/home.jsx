import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function EmailForm() {
  const [formData, setFormData] = useState({
    user_name: "Anju",
    user_email: "",
    from_name: "",
    phone_number: "",
    address: "",
    to_name: "jeevesh",

    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add the logic to send the email with formData
    console.log("Form data:", formData);
    const userId = "";
    const serviceId = "service_te1vs2e";

    // emailjs.sendForm(serviceId, "template_id", e.target, userId).then(
    //   (result) => {
    //     console.log(result.text);
    //     alert("Email sent successfully!");
    //   },
    //   (error) => {
    //     console.log(error.text);
    //     alert("Error sending email. Please try again later.");
    //   }
    // );

    emailjs
      .sendForm(serviceId, "template_uc4e7o9", e.target, "co0tG8wnNb-4M9V1U")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    //  ********************************************
    <div className="container" width={"70%"} display={"flex"}>
      <form onSubmit={handleSubmit} width={"60%"} display="flex">
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          value={formData.from_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          value={formData.user_email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone_number"
          placeholder="enter your number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="enter your address"
          value={formData.address}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmailForm;
