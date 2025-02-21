import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message was sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative py-12">
      <div className="container px-5 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section - Contact Information */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden p-10 flex flex-col space-y-6 relative">
          {/* Map Container */}
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0.1}
              marginWidth={0.1}
              style={{ filter: "opacity(0.6)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Lillian+Dr,+Newnan,+GA+30265,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>

          {/* Contact Details */}
          <div className="bg-gray-900 flex flex-col md:flex-row w-full p-6 rounded-lg shadow-md space-y-4 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="text-red-400 tracking-widest text-xs mt-1">
                10 Lillian Dr. <br />
                Newnan, GA 30265
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-indigo-400 leading-relaxed tracking-widest text-xs"
                href="email-address"
              >
                117MWC117@GMAIL.COM
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="text-indigo-400 leading-relaxed tracking-widest text-xs">
                678-675-6882
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-1/3 md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col space-y-4">
          <h2 className="text-white text-3xl font-medium title-font">
            Hire Me - Looking For Work
          </h2>
          <p className="leading-relaxed">
            I am a full-stack developer looking to start work immediately. I
            enjoy web development and learning new skills every day. I work well
            in teams and adapt quickly to challenges.
          </p>

          {/* Form */}
          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
          >
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm text-gray-400">
                NAME
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm text-gray-400">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-gray-400">
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
