import React from "react";

export default function about() {
  return (
    <div className="container w-[75%] md:w-full mx-auto md:p-5 mt-21">
      <h2 className="text-xl md:text-5xl font-bold text-center mb-9">
        About This Website
      </h2>
      <div className="text-xl mb-9 tracking-tighter text-justify font-light">
        Welcome to
        <span className="text-lg text-blue-500 font-bold px-1">
          Country Explorer
        </span>
        This website uses the{" "}
        <span className="text-lg font-bold pl-1">
          REST Countries API
        </span>{" "}
        to provide a comprehensive list of all recognized nations. With just a
        few clicks, users can easily explore essential information about each
        country including population, region, capital, languages, flags, and
        more. Whether you're curious about the world or need quick access to
        country data, this platform makes global discovery simple and engaging.
      </div>
      <div className="text-xl mb-9 tracking-tighter text-justify font-light">
        Each country profile includes key details such as the official and
        common names, region, subregion, capital city, and population. Whether
        you're a student, traveler, or simply curious about global geography,
        the clean and accessible layout ensures you find the information you
        need quickly.
      </div>
      <div className="text-xl mb-9 tracking-tighter text-justify font-light">
        To enhance your experience, each country listing also features a
        high-quality image of the national flag, giving visual context and
        adding a colorful element to your exploration. Whether you're
        researching for education or planning a trip, World Explorer makes
        learning about the world simple and engaging. This website is built
        using <span className="text-lg font-bold px-1"> React, React Router v7, Axios, React Icons, and Tailwind CSS,</span>
        ensuring fast performance, dynamic routing, and a fully responsive
        design across all devices.
      </div>
    </div>
  );
}
