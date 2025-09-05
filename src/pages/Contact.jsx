import React from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mandllry");
  if (state.succeeded) {
      return (
<div className="bg-white text-white w-full h-screen flex items-center justify-center">
<div className="bg-black w-[400px] h-[200px] text-center flex items-center justify-center">
<h1>Thank you for submitting your review</h1>
</div>
</div>
      );
  }


  return (
    <>
      <section
        className="h-[85vh] w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dmixvynoo/image/upload/v1756716602/pexels-kelly-16241875_juwenm.jpg")`,
        }}
      >
        <div className="flex justify-center items-center text-white text-lg h-full w-full bg-black/50">
          <Link to="/">Home</Link>/Contact
        </div>
      </section>

      <section className="p-6 bg-[#c9c1c1] min-h-screen flex flex-col items-center">
        <h1 className="text-green-900  w-fit text-4xl md:text-5xl text-center py-4">
          Contact Us
        </h1>
        <p className="text-green-700 text-center max-w-2xl mt-2">
          We’re here to answer any questions and are happy to provide more
          details about dates and pricing on request.
        </p>

        <div className="flex flex-col md:flex-row w-full max-w-6xl mt-8 gap-6">
          <div className="flex flex-col w-full md:w-1/2 bg-[#bbb4b4] p-6  shadow-lg">
            <h2 className="text-green-900 text-2xl mb-4">Send Us A Message</h2>
            <form
              className="flex flex-col gap-4"
             onSubmit={handleSubmit}
              method="POST"
            >
              <input
                type="text"
                className="w-full bg-white p-3  focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your Name"
                required
                name="name"
              />
              <input
                id="email"
                type="email"
                name="email"
                className="w-full bg-white p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Email Address"
                required
              />
                 <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
              <textarea
                className="w-full bg-white p-3 text-black h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Message"
                required=""
                name="message"
              ></textarea>
              <button
                type="submit" disabled={state.submitting}
                className="bg-green-800 text-white py-3 px-6  w-[190px] hover:bg-green-900 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 h-64 md:h-auto   overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14164.222846389114!2d25.832241!3d-17.924444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1939f8b35a7f6c85%3A0x9f9b5c4b55a6f98!2sVictoria%20Falls!5e0!3m2!1sen!2szw!4v1691741052000!5m2!1sen!2szw"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
