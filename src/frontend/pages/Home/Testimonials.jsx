import React from "react";
// import { ServerStackIcon, UsersIcon } from "@heroicons/react/16/solid";
import { testimonials } from "../../../backend/assets/data/collection/Testimonials.js";
function Testimonials() {
  return (
    <div>
      <section id="testimonials">
        <div className="container px-5 py-10 mx-auto text-center">
          {/* <UsersIcon className="w-4 inline-block mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-12 underline">
            Client Testimonials
          </h1>
          <div className="container px-5 py-10 mx-auto flex flex-wrap m-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-4 md:w-1/2">
                <div className="bg-rose-900 bg-opacity-40 p-4 rounded">
                  {/* <ServerStackIcon className="block w-4 text-gray-500 mb-4" /> */}
                  <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                  <div className="inline-flex items-center">
                    <img
                      alt={testimonial.name}
                      className="w-6 h-6 rounded-full flex-shrink-0 object-cover object-center"
                      src={testimonial.image}
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-white">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-500 text-sm uppercase">
                        {testimonial.company}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
